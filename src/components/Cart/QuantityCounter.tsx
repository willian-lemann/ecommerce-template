interface QuantityCounterProps {
  quantity: number | undefined;
}

export const QuantityCounter = ({ quantity }: QuantityCounterProps) => {
  return (
    <div className="flex flex-row h-10 w-28 rounded-lg relative bg-transparent mt-1">
      <button
        data-action="decrement"
        className=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none"
      >
        <span className="m-auto text-2xl font-thin">−</span>
      </button>
      <input
        type="number"
        className=" focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
        name="custom-input-number"
        disabled
        defaultValue={quantity}
      />
      <button
        data-action="increment"
        className=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none"
      >
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  );
};
