export const allAnswersFalse = (map: Record<string, boolean>) => {
  for (const val of Object.values(map)) {
    if (val === true) {
      return false;
    }
  }
  return true;
};

export const someAnswersInList = (
  map: Record<string, boolean>,
  list: string[]
) => {
  for (const [key, value] of Object.entries(map)) {
    if (list.includes(key) && value) {
      return true;
    }
  }
  return false;
};
