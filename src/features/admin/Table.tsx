import { useProducts } from "../products/hooks/use-products";
import { TableItem } from "./TableItem";
import { useEditModal } from "./hooks/use-edit-modal";

export function Table() {
  const { products } = useProducts();
  const { openModal } = useEditModal();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              <span className="">Imagem</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Produto
            </th>
            <th scope="col" className="px-6 py-3">
              Quantidade
            </th>
            <th scope="col" className="px-6 py-3">
              Preço
            </th>
            <th scope="col" className="px-6 py-3">
              Editar
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableItem key={product.id}>
              <TableItem.Image image={String(product.images[0])} />
              <TableItem.Name name={product.name} />
              <TableItem.Quantity quantity={2} />
              <TableItem.Price price={String(product.price)} />
              <TableItem.Actions>
                <div className="space-x-3">
                  <a
                    href="#"
                    onClick={() => openModal(product.id)}
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    Editar
                  </a>
                </div>
              </TableItem.Actions>
            </TableItem>
          ))}
        </tbody>
      </table>
    </div>
  );
}
