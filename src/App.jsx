import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import { FiSearch } from "react-icons/fi";
import RecipeDetails from "./pages/RecipeDetails";
import CreateRecipe from "./pages/CreateRecipe";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";





const initialSpecialRecipes = [
  {
    title: "Biryani",
    desc: "Veg Biryani – flavorful, aromatic, and packed with vibrant veggies and spices.",
    image: "/Biryani.png",
  },
  {
    title: "Golgappe",
    desc: "Golgappe – crispy, tangy, and bursting with spicy, flavorful fillings.",
    image: "/Golgappe.png",
  },
  {
    title: "Dosa",
    desc: "Dosa – crispy, golden, and perfectly paired with savory chutneys and sambar.",
    image: "/Dosa.png",
  },
  {
    title: "Curd Rice",
    desc: "Curd Rice – creamy, cooling, and delicately seasoned for ultimate comfort.",
    image: "/Curd Rice.png",
  },
  {
    title: "Samosa",
    desc: "Samosa – crispy, golden pastry filled with spicy, savory goodness.",
    image: "/Samosa.png",
  },
  {
    title: "Churmuri",
    desc: "Churmuri – crunchy, tangy, and bursting with spicy street food flavors.",
    image: "/Churmuri.png",
  },
  {
    title: "Fruit Salad",
    desc: "Fruit Salad – fresh, vibrant, and bursting with juicy, seasonal fruits.",
    image: "/Fruit Salad.png",
  },
  {
    title: "Idli",
    desc: "Idli – soft, fluffy, and delicately steamed, perfect with chutney and sambar.",
    image: "/Idli.png",
  },
];


const moreRecipes = [
  {
    name: "Quick and Easy",
    image: "/Quick and Easy.png",
  },
  {
    name: "Healthy",
    image: "/Healthy.png",
  },
  {
    name: "Desserts",
    image: "/Desserts.png",
  },
  {
    name: "Snacks Rice",
    image: "/Snacks.png",
  },
];



export default function App() {
  const [specialRecipes, setSpecialRecipes] = useState(initialSpecialRecipes);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://recipesharing-backend-x3m4.onrender.com/api/recipes');
        console.log("Fetch response:", response);
        if (response.ok) {
          const data = await response.json();
          // Merge or replace specialRecipes. For now, let's append or replace if we have data.
          // Since the UI expects a specific format, we ensure the data matches or we map it.
          // The backend returns { title, desc, image, ... }. existing data matches this structure.
          if (data.length > 0) {
            setSpecialRecipes(prev => [...prev, ...data]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <BrowserRouter>
      <div className="app">

        {/* NAVBAR */}
        <nav className="navbar">
          <img src={logo} alt="Recipe Logo" />


          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/recipes"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Recipes
              </NavLink>
            </li>

            <li>Category</li>
            <li>Accounts</li>
          </ul>



          <div className="nav-actions">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
            <NavLink to="/create-recipe" className="primary-btn">Create Recipe</NavLink>
          </div>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route
            path="/"
            element={<Home specialRecipes={specialRecipes} moreRecipes={moreRecipes} />}
          />

          <Route
            path="/recipes"
            element={<Recipes specialRecipes={specialRecipes} />}
          />

          <Route
            path="/recipes/:title"
            element={<RecipeDetails specialRecipes={specialRecipes} />}
          />
          <Route
            path="/create-recipe"
            element={<CreateRecipe />}
          />
        </Routes>


        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-col">
            <img src={logo} alt="Recipe Logo" />
            <p>
              New Taste is the ultimate community for food lovers.
              Whether you're a seasoned chef or just starting in the kitchen,
              New Taste is the perfect place to discover new recipes,
              share your culinary creations, and connect with fellow food enthusiasts.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li>Home</li>
              <li>Recipes</li>
              <li>Categories</li>
              <li>Accounts</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Recipes</h4>
            <ul>
              <li>Veg</li>
              <li>Non-veg</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow us on</h4>
            <div className="socials">
              <img src="/tw_icon.png" alt="Twitter" />
              <img src="/wa_icon.png" alt="WhatsApp" />
              <img src="/In_icon.png" alt="Instagram" />
              <img src="/fb_icon.png" alt="Facebook" />
            </div>

          </div>

        </footer>

        <div className="copyright">
          © 2024 New Taste. All Right Reserved
          <span>Terms of service</span>
          <span>Privacy policy</span>
        </div>
      </div>
    </BrowserRouter>
  );
}



