

export const sortProducts = (products, sortBy) => {
  const sorted = [...products];

  if (sortBy === "Low to High") {
    return sorted.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "High to Low") {
    return sorted.sort((a, b) => b.price - a.price);
  }

  return sorted;
};