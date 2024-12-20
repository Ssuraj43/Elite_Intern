// Pizza data
const pizzas = [
    { id: 1, name: "Margherita", price: 150, img: "https://static.toiimg.com/thumb/56868564.cms?imgsize=1948751&width=800&height=800" },
    { id: 2, name: "Pepperoni", price: 255, img: "https://cdn.shopify.com/s/files/1/0508/5514/9736/files/Recipe_Pepperoni_Pizza_1_480x480.jpg?v=1622552852" },
    { id: 3, name: "BBQ Chicken", price: 460, img: "https://www.eatwithcarmen.com/wp-content/uploads/2023/05/bbq-chicken-in-air-fryer-1.jpg" },
    { id: 4, name: "Veggie Delight", price: 149, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKA6tGHGmS8SwvH6gg7Y4NX412Uou-zC9Mw&s" },
    { id: 5, name: "Meat Lover's", price: 199, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpZESxM1C6pxdyfXJuEgO6aAZt6DSpue5pg&s"},
    { id: 6, name: "Brick oven Pizza", price: 156, img: "https://t3.ftcdn.net/jpg/02/66/91/26/360_F_266912601_PBQg09Cf3O4et9ugx91wfIQScBdY37xJ.jpg"},

  ];
  
  const cart = [];
  
  // Render pizza list
  const pizzaList = document.getElementById("pizzaList");
  
  pizzas.forEach((pizza) => {
    const pizzaItem = document.createElement("div");
    pizzaItem.className = "pizza-item";
    pizzaItem.innerHTML = `
      <img src="${pizza.img}" alt="${pizza.name}">
      <h3>${pizza.name}</h3>
      <p>INR ${pizza.price.toFixed(2)}</p>
      <button onclick="addToCart(${pizza.id})">Add to Cart</button>
    `;
    pizzaList.appendChild(pizzaItem);
  });
  
  // Add to cart
  function addToCart(pizzaId) {
    const pizza = pizzas.find((p) => p.id === pizzaId);
    cart.push(pizza);
    updateCart();
  }
  
  // Update cart
  function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");
  
    cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach((pizza, index) => {
      total += pizza.price;
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <p>${pizza.name} - INR ${pizza.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItems.appendChild(cartItem);
    });
  
    totalPrice.textContent = `INR ${total.toFixed(2)}`;
  }
  
  // Remove from cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  // Place order
  function placeOrder() {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    alert("Thank you for your order!");
    cart.length = 0; // Clear the cart
    updateCart();
  }
  