import Articles from "./Articles";

function Home() {
  return (
    <section className="Home">
      <p>Home Component</p>
      <Articles num={6} />
    </section>
  );
}

export default Home;
