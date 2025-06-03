
const checkout = {
    items: [],
    total: 0,
  
    addItem(item) {
      const price = parseFloat(item.price); // Convert to number if it's a string
  
      if (isNaN(price)) {
        console.log("Invalid price.");
        return;
      }
  
      this.items.push({ ...item, price }); // Store item with number price
      this.total += price;
    },
  
    getTotal() {
      return `Total: $${this.total.toFixed(2)}`;
    }
  };
  
  checkout.addItem({ name: "Coffee Maker", price: "99.95" });
  checkout.addItem({ name: "Milk", price: 3.50 });
  
  console.log(checkout.getTotal()); // ✅ Output: Total: $103.45
  