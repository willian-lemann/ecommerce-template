import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";

import { useAddProductModal } from "../hooks/use-add-modal";

export function Content() {
  const { closeProductModal } = useAddProductModal();

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel
        className={
          "container relative h-full w-full max-w-xl rounded bg-white pt-8 shadow-xl transition-all"
        }
      >
        <XMarkIcon
          className="absolute right-10 top-6 h-10 w-10 cursor-pointer text-zinc-800"
          onClick={closeProductModal}
        />
        <Dialog.Title>
          <h1 className="text-xl">Adicionar novo produto</h1>
        </Dialog.Title>

        <div className="mt-4">
          <div className="max-w-[200px]">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nome
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Nome produto"
              />
            </div>
          </div>

          <div className="max-w-[200px]">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Price
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">R$</span>
              </div>

              <input
                type="number"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 px-8 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="max-w-[200px]">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Price
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">R$</span>
              </div>

              <input
                type="number"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 px-8 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="max-w-[200px]">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Descrição
            </label>

            <textarea
              name="description"
              id="description"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="descricao"
            />
          </div>
        </div>
      </Dialog.Panel>
    </div>
  );
}
