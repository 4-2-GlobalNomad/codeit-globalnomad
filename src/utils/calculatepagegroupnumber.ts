function calculatePageGroupNumber(currentPage: number) {
  return Math.floor(currentPage / 5);
}

export default calculatePageGroupNumber;
