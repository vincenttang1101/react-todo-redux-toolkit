const CountStat = (todos, type) => {
  let countStat = [];
  let countLow = 0;
  let countMedium = 0;
  let countHigh = 0;
  let total = 0;
  if (type === "countPending") {
    total = todos.filter((item) => item.status === "Pending").length;
    countLow = todos.filter(
      (item) => item.status === "Pending" && item.priority === "Low"
    ).length;
    countMedium = todos.filter(
      (item) => item.status === "Pending" && item.priority === "Medium"
    ).length;
    countHigh = todos.filter(
      (item) => item.status === "Pending" && item.priority === "High"
    ).length;
    countStat.push(total, countLow, countMedium, countHigh);
  } else if (type === "countCompleted") {
    total = todos.filter((item) => item.status === "Completed").length;
    countLow = todos.filter(
      (item) => item.status === "Completed" && item.priority === "Low"
    ).length;
    countMedium = todos.filter(
      (item) => item.status === "Completed" && item.priority === "Medium"
    ).length;
    countHigh = todos.filter(
      (item) => item.status === "Completed" && item.priority === "High"
    ).length;
    countStat.push(total, countLow, countMedium, countHigh);
  } else {
    total = todos.filter((item) => true).length;
    countLow = todos.filter((item) => item.priority === "Low").length;
    countMedium = todos.filter((item) => item.priority === "Medium").length;
    countHigh = todos.filter((item) => item.priority === "High").length;
    countStat.push(total, countLow, countMedium, countHigh);
  }

  return countStat;
};

export default CountStat;
