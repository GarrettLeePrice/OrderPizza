
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;;
  };

  Pizza.prototype.price = function() {
    var price = 15;
    if (this.size === "large"){
      price = price + 10
    } else if (this.size === "medium") {
      price = price + 5
    } else if (this.toppings === "Fish Sticks" || "Ice Cream" || "Spaghetti") {
      price = price + 5
    } else {
      price = price
    }
    return price;
  };
