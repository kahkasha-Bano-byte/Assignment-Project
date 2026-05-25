export const filterProducts = (
  products,
  selectedSizes
) => {
  if (selectedSizes.length === 0) {
    return products;
  }

  return products.filter((product) =>
    selectedSizes.some((size) =>
      product.availableSizes.includes(size)
    )
  );
};