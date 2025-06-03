
async function fetchAndDisplayProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
  
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
  
      const products = await response.json();
  
      // Display product details in console
      products.forEach(product => {
        console.log(`Title: ${product.title}`);
        console.log(`Price: $${product.price}`);
        console.log(`Image URL: ${product.image}`);
        console.log('---------------------------');
      });
  
      // Calculate and log total price using reduce
      const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
      console.log(`Total Price of all products: $${totalPrice.toFixed(2)}`);
      
    } catch (error) {
      console.error("Failed to fetch products. Please try again later.");
      console.error(error.message);
    }
  }
  
  // Call the function
  fetchAndDisplayProducts();
  