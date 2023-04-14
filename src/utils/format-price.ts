export function formatPrice(price: number) {
  const priceInCents = price / 100;

  const priceValue = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(priceInCents);

  return priceValue;
}
