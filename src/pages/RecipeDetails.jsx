import { useParams } from "react-router-dom";

export default function RecipeDetails({ specialRecipes }) {
  const { title } = useParams();

  // find recipe by title
  const recipe = specialRecipes.find(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );

  if (!recipe) {
    return <h2 style={{ textAlign: "center" }}>Recipe not found</h2>;
  }

  return (
    <section className="recipe-details">
      <div className="details-left">
        <h1>{recipe.title}</h1>

        <div className="rating">
          ⭐ ⭐ ⭐ ⭐ ⭐ <span>(120)</span>
        </div>

        <div className="meta">
          <div>
            <strong>8</strong>
            <span>Ingredients</span>
          </div>
          <div>
            <strong>15</strong>
            <span>Minutes</span>
          </div>
          <div>
            <strong>500</strong>
            <span>Calories</span>
          </div>
        </div>

        <p className="description">{recipe.desc}</p>

        {/* PLACEHOLDER – we’ll expand later */}
        <h3>Ingredients</h3>
        <ul>
          <li>Sample ingredient 1</li>
          <li>Sample ingredient 2</li>
          <li>Sample ingredient 3</li>
        </ul>

        <h3>Procedure</h3>
        <p>
          Step-by-step cooking instructions will go here.
        </p>
      </div>
          
      <div className="details-right">
        <img src={recipe.image} alt={recipe.title} />
      </div>
    </section>
  );
}
