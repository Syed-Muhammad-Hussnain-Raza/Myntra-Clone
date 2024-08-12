import HomeItem from "../components/HomeItem";

const Home = () => {
  return (
    <main>
      <div className="items-container">
        <HomeItem item={item} />
      </div>
    </main>
  );
};

export default Home;
