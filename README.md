# Enrique Gamboa - Personal Portfolio

Welcome to the repository for my personal portfolio website. This project is designed to help me better connect with others and showcase the projects I've been working on throughout my career.

## 🚀 Features

The application is modular and includes several dedicated components to highlight different aspects of my professional experience:

-   **Interactive UI:** Features a custom typewriter effect (`Typewriter.tsx`) for dynamic text presentation.
    
-   **GitHub Integration:** A dedicated section (`GitHubSection.tsx`) to display my latest repositories and open-source contributions.
    
-   **Project Showcase:** Highlights my specific builds and technical work (`ProjectsSection.tsx`).
    
-   **Resume Viewer:** A structured section (`ResumeSection.tsx`) to display my professional experience, skills, and background.
    

## 🛠️ Tech Stack

This project is built with modern web technologies:

-   **Frontend Framework:** React with TypeScript (`App.tsx`, `main.tsx`).
    
-   **Build Tool:** Vite (`vite.config.ts`).
    
-   **Styling:** CSS (`index.css`).
    
-   **Backend/Server:** Node.js environment utilizing `server.ts`.
    
-   **Environment Management:** Secure configuration via `.env` files (template provided in `.env.example`).
    

## 💻 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    
    Bash
    
    ```
    git clone <your-repository-url>
    cd enrique-gamboa-porfolio
    ```
    
2.  **Install dependencies:** The project uses a `package.json` file for dependency management.
    
    Bash
    
    ```
    npm install
    ```
    
3.  **Set up environment variables:** Copy the example environment file to create your own configuration.
    
    Bash
    
    ```
    cp .env.example .env
    ```
    
    *Fill in any necessary API keys inside the `.env` file.*
    
4.  **Start the development server:**
    
    Bash
    
    ```
    npm run dev
    ```
