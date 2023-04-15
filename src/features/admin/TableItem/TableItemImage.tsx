import Image from "next/image";

type TableImageProps = {
  image: string;
};

export function TableItemImage({ image }: TableImageProps) {
  return (
    <td className="w-32 p-4">
      <div className="relative h-10 w-10 rounded-full">
        <Image
          src={image}
          alt="imagem do produto"
          fill
          className="rounded-full object-cover"
        />
      </div>
    </td>
  );
}
