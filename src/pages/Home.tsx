import AvailableOffers from "../components/AvailableOffers";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Summary from "../components/Summary";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

  {/* Left */}
  <div className="lg:col-span-2 space-y-8">
        <AvailableOffers />

    <ProductList />
  </div>

  {/* Right */}
  <div className="lg:col-span-1">
    <Summary />
  </div>

</div>
      </main>
    </div>
  );
};

export default Home;
