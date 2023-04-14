export function formatPrice(price: number) {
  const priceInCents = price / 100;

  return new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(priceInCents);
}
