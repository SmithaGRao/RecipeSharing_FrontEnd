import { Link } from "react-router-dom";

export default function Recipes({ specialRecipes }) {
  // 🔁 repeat the list twice
  const repeatedRecipes = [...specialRecipes, ...specialRecipes];

  return (
    <section className="special">
      <h2>Recipes</h2>

      <div className="card-grid">
        {repeatedRecipes.map((item, index) => (
          <Link
  to={`/recipes/${item.title}`}
  className="recipe-link"
>
  <div className="recipe-card">
    <div className="circle-img">
      <img src={item.image} alt={item.title} />
    </div>
    <h4>{item.title}</h4>
    <p>{item.desc}</p>
  </div>
</Link>

        ))}
      </div>
    </section>
  );
}
