
export default function Home({ specialRecipes, moreRecipes }) {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            We provide the best <br />
            <span>Recipes for you</span>
          </h1>

          <p>
            Share your favorite Recipes, tips, browse through a vast
            collection of recipes from all over the world. Whether you
            are looking for quick weeknight dinners, decadent desserts,
            or healthy meals, you will find it all here.
          </p>

          <button className="primary-btn">Create Recipe</button>
        </div>

        <div className="hero-right">
          <img
            src="hero.png"
            alt="recipe"
          />
        </div>
      </section>

      {/* SPECIAL RECIPES */}
      <section className="special">
        <h2>Our special Recipes</h2>
        <p className="section-sub">
          Whether you are a chef or just starting in the kitchen, our recipe is the perfect
        </p>

        <div className="card-grid">
          {specialRecipes.map((item, index) => (
            <div className="recipe-card" key={index}>
              <div className="circle-img">
                <img src={item.image} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MORE RECIPES */}
      <section className="more">
        <h2>More Recipes</h2>
        <p className="section-sub">
          Whether you are a chef or just starting in the kitchen, our recipe is the perfect
        </p>

        <div className="circle-grid">
          {moreRecipes.map((item, index) => (
            <div className="circle-item" key={index}>
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
