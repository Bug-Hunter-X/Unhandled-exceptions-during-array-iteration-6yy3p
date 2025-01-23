```javascript
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.price !== undefined && item.quantity !== undefined) {
      total += item.price * item.quantity;
    } else {
      console.warn("Skipping item due to missing price or quantity:", item);
      //Consider alternative handling, such as using default values or throwing a more informative error
    }
  }
  return total;
}

const items = [
  { name: "item1", price: 10, quantity:2 },
  { name: "item2", quantity: 5 },
  {name: "item3", price: 20}
];

console.log(calculateTotal(items));
```