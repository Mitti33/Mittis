# [Mitti's](https://mittis-app-632905721715.asia-south1.run.app) 👗✨
> **Attire as you desire.**

Mitti's is a modern, Gen Z-focused fashion affiliate web application designed around the "Shop the Look" philosophy. Instead of browsing individual items in isolation, users explore highly aesthetic, fully styled outfits and can interact directly with the images to purchase specific pieces via affiliate links.

## 🚀 Features

*   **Interactive Shoppable Images:** Hover over specific items (sunglasses, bags, dresses) on a model to reveal pricing and direct affiliate links.
*   **Pinterest-Style Masonry Grid:** A fluid, visually appealing feed of trending outfits.
*   **Dynamic Categories:** Filter looks by occasions such as College Fest, Party, Wedding Guest, or Streetwear.
*   **Save to Favorites:** Local storage integration allows users to heart and save their favorite aesthetics for later.
*   **Vibe Requests:** A dedicated portal for users to request custom styling for specific events.

## 🛠️ Tech Stack

This project was built focusing on rapid deployment, high performance, and seamless content management.

*   **Frontend Generation & UI:** React, TypeScript, and Vite (Vibe-coded via Google Antigravity)
*   **Content Management (CMS):** Sanity.io (Headless architecture for dynamic outfit and hotspot coordinate updates)
*   **Deployment & Hosting:** Google Cloud CLI & Google Cloud Run

## 💻 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/mitti.git](https://github.com/yourusername/mitti.git)
   ```
   
2. Navigate into the project directory:
  ```bash
  cd mitti
  ```

3. Install the dependencies:
  ```bash
  npm install
  ```

4. Set up environment variables:
   Create a `.env` file in the root directory and add your Sanity Project ID to connect the backend brain:
   ```env
   VITE_SANITY_PROJECT_ID=your_project_id_here
   VITE_SANITY_DATASET=production
   ```
   
Start the development server:
  ```bash
  npm run dev
  ```

## 🏗️ Architecture Notes
Mitti's separates the codebase from the data. The frontend is a lightweight Single Page Application (SPA) that fetches JSON data from Sanity.io on load. This allows new outfits, prices, and affiliate links to be updated instantly via the Sanity dashboard without requiring a full code redeployment. 

## 🙌 Acknowledgments
* Conceptualized and built following the **GeeksforGeeks Build with AI** workshop. 
* UI/UX driven by modern "vibe coding" methodologies. 

---
*Designed with 🤎 for the effortless aesthetic.*
