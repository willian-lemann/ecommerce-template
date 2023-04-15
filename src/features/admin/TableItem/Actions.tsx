import { PropsWithChildren } from "react";

export function Actions({ children }: PropsWithChildren) {
  return <td className="px-6 py-4">{children}</td>;
}
