```javascript
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity; //Error: Assuming all items have price and quantity
  }
  return total;
}

const items = [
  { name: "item1", price: 10 },
  { name: "item2", quantity: 5 },
];

console.log(calculateTotal(items)); // Throws an error because item2 is missing price
```