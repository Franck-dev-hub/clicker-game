export function buyPlant(money, plantCost, plantCount) {
  if (money >= plantCost) {
    return {
      money: money - plantCost,
      plantCount: plantCount + 1,
      plantCost: Math.round(plantCost * 1.5),
      success: true,
    };
  }
    return { money, plantCost, plantCount, success: false };
}
