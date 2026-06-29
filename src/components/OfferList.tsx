import type { Offer } from "../types/Offer";
import { formatCurrency } from "../utils/currency";

interface OfferListProps {
  offers: Offer[];
}

const OfferList = ({ offers }: OfferListProps) => {
  if (offers.length === 0) {
    return (
      <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <p className="text-gray-500">No special offers applied.</p>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-3">
      {offers.map((offer, index) => (
        <div
          key={index}
          className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-4"
        >
          <div>
            <h3 className="font-medium text-green-700">✅ {offer.title}</h3>
          </div>

          <span className="font-bold text-green-700">
            -{formatCurrency(offer.saving)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default OfferList;
