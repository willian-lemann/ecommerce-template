type NameProps = {
  name: string;
};

export function Name({ name }: NameProps) {
  return (
    <td className="px-6 py-4 font-semibold text-gray-900">
      {name}
    </td>
  );
}
