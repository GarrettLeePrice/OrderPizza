
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

  $(document).ready(function() {
    $("#newPizza").submit(function(event) {
      $("ul").empty();
      event.preventDefault();
      var inputtedSize = $("input#pizzaSize").val();
      var inputtedToppings = $("input#toppings").val();

      var myPizza = new Pizza(inputtedSize, inputtedToppings);
      console.log(myPizza);
      $("#showPrice").append("<li>" + myPizza.price() + "</li>");
    });
  });
