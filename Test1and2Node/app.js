const orders = require("./orders");
const bigDecimal = require("js-big-decimal");
const { RoundingModes } = require("js-big-decimal");

const getDayOfTheWeekName = date => {
    return date.toLocaleString("default", { weekday: "long" });
}

const createEmptyMap = () => {
  const map = new Map();
  for (let i = 0; i < 7; i++) {
      let date = new Date();
      date.setDate(date.getDate() + i);
      const dayOfWeek = getDayOfTheWeekName(date)
      map.set(dayOfWeek, 0)
  }
  return map;
};

const getInfoFromOrder = order => {
  const date = new Date(order.creationDate);
  const dayOfWeek = getDayOfTheWeekName(date)
  const { orderLines, orderId } = order;
  return { dayOfWeek, orderLines, orderId };
};

const getTotalsMap = productId => {
  const orderTotals = createEmptyMap();
  
  orders.forEach(order => {
    const { dayOfWeek, orderLines } = getInfoFromOrder(order);
    orderLines.forEach(orderLine => {
      if (orderLine.productId == productId) {
        const quantityInMap = orderTotals.get(dayOfWeek);
        const quantity = orderLine.quantity;
        orderTotals.set(dayOfWeek, quantityInMap + quantity);
      }
    });
  });

  return orderTotals;
};

const getValuesMap = () => {
  const orderSum = createEmptyMap();
  orderSum.forEach((value, key) => orderSum.set(key, new bigDecimal(value)))
  const orderCount = createEmptyMap();
  const orderAvg = createEmptyMap();

  orders.forEach(order => {
    const { dayOfWeek, orderLines } = getInfoFromOrder(order);
    orderLines.forEach(orderLine => {
      const quantity = new bigDecimal(orderLine.quantity);
      const unitPrice = new bigDecimal(orderLine.unitPrice);
      const newValue = quantity.multiply(unitPrice)
      const valueInMap = orderSum.get(dayOfWeek)
      orderSum.set(dayOfWeek, newValue.add(valueInMap));
    });
    const count = orderCount.get(dayOfWeek);
    orderCount.set(dayOfWeek, count + 1)
  });

  orderCount.forEach((count, dayOfWeek) => {
    if(count != 0) {
        const sum = orderSum.get(dayOfWeek)
        const avg = sum.divide(new bigDecimal(count)).round(0, RoundingModes.HALF_UP).getValue();
        orderAvg.set(dayOfWeek, avg)
    }
  })
  
  return orderAvg;
};

console.log(getTotalsMap(9872));
console.log(getTotalsMap(1746));
console.log(getTotalsMap(5723));
console.log(getTotalsMap(3433));
console.log(getValuesMap())