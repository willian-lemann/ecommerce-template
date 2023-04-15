import { useAddProductModal } from "./hooks/use-add-modal";
import { Table } from "./Table";

export function Products() {
  const { openAddProductModal } = useAddProductModal();

  return (
    <main className="flex h-[calc(100vh-80px)] flex-col">
      <div className="flex h-20 justify-between">
        <h2 className="text-lg">Dashboard dos produtos</h2>

        <section className="flex items-start gap-4">
          <button
            onClick={openAddProductModal}
            className="cursor-pointer rounded-lg bg-indigo-800 px-4 py-1.5 text-white"
          >
            Adicionar produto
          </button>

          <div className="bg-white ">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500 "
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 "
                placeholder="Procure um produto"
              />
            </div>
          </div>
        </section>
      </div>

      <div>
        <Table />
      </div>
    </main>
  );
}
