import { useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/outline";

import { SideNavbar } from "./SideNavbar";
import { NavbarActions } from "./NavbarActions";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-white">
      <header className="relative text-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div>
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

              <NavbarActions />
            </div>
          </div>
        </nav>
      </header>

      <SideNavbar open={open} onToggleSideNavbar={() => setOpen(!open)} />
    </div>
  );
};
