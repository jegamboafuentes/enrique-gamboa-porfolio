import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // GitHub API proxy
  app.get("/api/github", async (req, res) => {
    try {
      const response = await fetch("https://api.github.com/users/jegamboafuentes/repos?sort=updated&direction=desc&per_page=100");
      if (!response.ok) throw new Error(`GitHub API responded with status: ${response.status}`);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Error fetching GitHub repos:", error);
      res.status(500).json({ error: "Failed to fetch GitHub data" });
    }
  });

  // Medium RSS proxy
  app.get("/api/medium", async (req, res) => {
    try {
      const response = await fetch("https://jegamboafuentes.medium.com/feed");
      if (!response.ok) throw new Error(`Medium API responded with status: ${response.status}`);
      const xmlText = await response.text();
      
      const items: any[] = [];
      const itemRegex = /<item>([\s\S]*?)<\/item>/g;
      let match;
      
      while ((match = itemRegex.exec(xmlText)) !== null) {
        const itemContent = match[1];
        
        const titleMatch = /<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/.exec(itemContent);
        const title = titleMatch ? (titleMatch[1] || titleMatch[2]) : "Untitled";
        
        const contentMatch = /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/.exec(itemContent);
        const contentHtml = contentMatch ? contentMatch[1] : "";
        
        const imgMatch = /<img[^>]+src="([^">]+)"/.exec(contentHtml);
        const mainImage = imgMatch ? imgMatch[1] : null;
        
        const cleanText = contentHtml.replace(/<[^>]+>/g, "").trim();
        const description = cleanText.length > 150 ? cleanText.substring(0, 150) + "..." : cleanText;
        
        const linkMatch = /<link>(.*?)<\/link>/.exec(itemContent);
        const link = linkMatch ? linkMatch[1] : "";
        
        const categories: string[] = [];
        const categoryRegex = /<category><!\[CDATA\[(.*?)\]\]><\/category>|<category>(.*?)<\/category>/g;
        let categoryMatch;
        while ((categoryMatch = categoryRegex.exec(itemContent)) !== null) {
          const cat = categoryMatch[1] || categoryMatch[2];
          if (cat) categories.push(cat);
        }
        
        items.push({
          title,
          description,
          mainImage,
          link,
          categories
        });
      }
      
      res.json(items);
    } catch (error) {
      console.error("Error fetching Medium feed:", error);
      res.status(500).json({ error: "Failed to fetch Medium data" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
