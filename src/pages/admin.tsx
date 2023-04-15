import { DeleteProduct } from "@/features/admin/DeleteModal";
import { EditProduct } from "@/features/admin/EditProduct";
import { Orders } from "@/features/admin/Orders";
import { Products } from "@/features/admin/Products";

import { Tab, Popover } from "@headlessui/react";
import Image from "next/image";

export default function Admin() {
  return (
    <div className="h-screen w-screen pt-10 text-zinc-900">
      <div className="container grid grid-cols-[0.5fr,2fr]">
        <Tab.Group>
          <aside>
            <div className="flex items-center gap-2">
              <Popover className="relative">
                <Popover.Button>
                  <div className="relative h-10 w-10 cursor-pointer">
                    <Image
                      src="https://avatars.githubusercontent.com/u/44612750?v=4"
                      alt="avatar profile"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                </Popover.Button>

                <Popover.Panel className="absolute z-10">
                  <div className="flex h-20 w-40 items-center justify-center bg-white p-4 shadow-lg">
                    <a className="cursor-pointer  p-2 transition-colors hover:text-red-800">
                      Sair
                    </a>
                  </div>
                </Popover.Panel>
              </Popover>

              <h1>Admin [Nome loja]</h1>
            </div>

            <Tab.List className="mt-14 flex flex-col items-start gap-3">
              <Tab className=" outline-none">Produtos</Tab>

              <Tab className="outline-none">Pedidos</Tab>
            </Tab.List>
          </aside>

          <Tab.Panels>
            <Tab.Panel>
              <Products />
              <EditProduct />
              <DeleteProduct />
            </Tab.Panel>

            <Tab.Panel>
              <Orders />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
