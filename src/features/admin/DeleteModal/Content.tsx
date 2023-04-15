import { useProducts } from "@/features/products/hooks/use-products";
import { classnames } from "@/utils/classnames";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useDeleteModal } from "../hooks/use-delete-modal";
import { useEditModal } from "../hooks/use-edit-modal";
import { useFetchEditProduct } from "../hooks/use-fetch-edit-product";

type ContentProps = { id: string };

export function Content({ id }: ContentProps) {
  const { isLoading, product } = useFetchEditProduct(id);
  const { closeDeleteModal } = useDeleteModal();
  const { remove } = useProducts();

  if (isLoading) return <p>loading...</p>;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel
        className={
          "container relative flex w-full max-w-xl flex-col rounded bg-white py-10 shadow-xl transition-all"
        }
      >
        <XMarkIcon
          className="absolute right-10 top-6 h-10 w-10 cursor-pointer text-zinc-800"
          onClick={closeDeleteModal}
        />
        <Dialog.Title>
          <h1 className="text-xl">
            Certeza que deseja{" "}
            <span className="pr-1 text-red-400">deletar</span>
            {product?.name} ?
          </h1>
        </Dialog.Title>

        <div className="mt-10 flex h-full items-center gap-4 self-end">
          <button
            onClick={closeDeleteModal}
            className="rounded bg-zinc-800 px-4 py-2 text-white"
          >
            Cancelar
          </button>
          <button
            onClick={() => remove(String(product?.id))}
            className="rounded bg-red-700 px-4 py-2 text-white"
          >
            Deletar
          </button>
        </div>
      </Dialog.Panel>
    </div>
  );
}
