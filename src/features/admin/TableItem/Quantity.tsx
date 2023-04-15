type QuantityProps = { quantity: number };

export function Quantity({ quantity }: QuantityProps) {
  return (
    <td className="px-6 py-4">
      <div className="flex items-center space-x-3">
        <button
          className="inline-flex items-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 "
          type="button"
        >
          <span className="sr-only">Quantity button</span>
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div>
          <input
            type="number"
            id="first_product"
            className="block w-14 outline-none text-center rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm"
            value={quantity}
            required
          />
        </div>
        <button
          className="inline-flex items-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 "
          type="button"
        >
          <span className="sr-only">Quantity button</span>
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </td>
  );
}
