type PriceProps = { price: string };

export function Price({ price }: PriceProps) {
  return (
    <td className="px-6 py-4 font-semibold text-gray-900 ">
      {price}
    </td>
  );
}
