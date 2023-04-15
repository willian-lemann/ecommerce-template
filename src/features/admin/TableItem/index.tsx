import { ReactNode } from "react";
import { Actions } from "./Actions";
import { Name } from "./Name";
import { Price } from "./Price";
import { Quantity } from "./Quantity";
import { TableItemImage } from "./TableItemImage";

type TableItem = {
  children: ReactNode;
};

export function TableItem({ children }: TableItem) {
  return <tr className="border-b bg-white hover:bg-gray-50 ">{children}</tr>;
}

TableItem.Image = TableItemImage;
TableItem.Name = Name;
TableItem.Price = Price;
TableItem.Quantity = Quantity;
TableItem.Actions = Actions;
