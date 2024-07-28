// src/App.js
import React from 'react';
import SuprSendInbox from '@suprsend/react-inbox';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

function App() {
  return (
    <div>
      <header>
        <h1>Delicious Recipes</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>Welcome to Your Favorite Recipe Source</h2>
          <p>Find the best recipes for every occasion.</p>
        </section>
        <section className="recipes">
          <h2>Popular Recipes</h2>
          <div className="recipe-card">
            <img src="recipe1.jpg" alt="Recipe 1" />
            <h3>Recipe Title 1</h3>
            <p>A brief description of the recipe.</p>
            <a href="#">View Recipe</a>
          </div>
          <div className="recipe-card">
            <img src="recipe2.jpg" alt="Recipe 2" />
            <h3>Recipe Title 2</h3>
            <p>A brief description of the recipe.</p>
            <a href="#">View Recipe</a>
          </div>
          {/* Add more recipe cards as needed */}
        </section>
      </main>
      <SuprSendInbox
        workspaceKey="<workspace_key>"
        subscriberId="<subscriber_id>"
        distinctId="<distinct_id>"
      />
      <footer>
        <p>&copy; 2024 Recipe Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
