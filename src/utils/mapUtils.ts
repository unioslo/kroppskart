export const allAnswersFalse = (map: Record<string, boolean>) => {
  for (const val of Object.values(map)) {
    if (val === true) {
      return false;
    }
  }
  return true;
};
