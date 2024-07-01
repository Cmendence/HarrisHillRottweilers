export const calculateAge = (birthdate) => {
  const now = new Date();
  const birthDate = new Date(birthdate);
  const ageInMs = now - birthDate;
  const ageInWeeks = Math.floor(ageInMs / (1000 * 60 * 60 * 24 * 7));

  if (ageInWeeks < 16) {
    return `${ageInWeeks} weeks`;
  } else if (ageInWeeks < 78) {
    const ageInMonths = Math.floor(ageInWeeks / 4);
    return `${ageInMonths} months`;
  } else {
    const ageInYears = Math.floor(ageInWeeks / 52);
    const remainingWeeks = ageInWeeks % 52;
    const remainingMonths = Math.floor(remainingWeeks / 4);
    return `${ageInYears} year${ageInYears > 1 ? "s" : ""}${
      remainingMonths > 0
        ? ` ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`
        : ""
    }`;
  }
};
