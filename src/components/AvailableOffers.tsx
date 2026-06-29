const AvailableOffers = () => {
  return (
    <div className="rounded-xl bg-white p-4 shadow-md">
      <h2 className="mb-3 text-lg font-bold">🎁 Available Offers</h2>

      <div className="space-y-2">
        <div className="rounded-lg border bg-green-50 p-3">
          <h3 className="text-sm font-semibold">🧀 Buy One Get One Free</h3>
          <p className="text-xs text-gray-600">
            Buy 1 Cheese and get another Cheese FREE.
          </p>
        </div>

         <div className="rounded-lg border bg-yellow-50 p-3">
          <h3 className="text-sm font-semibold">
            🍲 Soup + Bread Offer
          </h3>
          <p className="text-xs text-gray-600">
            Buy a Soup and get one Bread at 50% off.
          </p>
        </div>

        <div className="rounded-lg border bg-blue-50 p-3">
          <h3 className="text-sm font-semibold">
            🧈 Butter Discount
          </h3>
          <p className="text-xs text-gray-600">
            Get 33% OFF
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvailableOffers;
