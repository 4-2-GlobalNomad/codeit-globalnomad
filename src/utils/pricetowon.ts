const priceToWon = (price: number) => {
  return `₩${price.toLocaleString()}`;
};

export default priceToWon;
