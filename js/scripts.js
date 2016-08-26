
function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;
  };

  Pizza.prototype.price = function() {
    var price = 15;
      if (this.toppings === "fishSticks") {
      price = price + 5
    }  if (this.toppings === "iceCream") {
      price = price + 5
    }  if (this.toppings === "spaghetti") {
      price = price + 5
    } if (this.size === "large") {
      price = price + 10
    } else if (this.size === "medium") {
      price = price + 5
    } else {
      price === price;
    }
      return price;
  };

  $(document).ready(function() {
    $("#newPizza").submit(function(event) {
      $("ul").empty();
      event.preventDefault();
      var size = $("input:radio[name=pizzaSize]:checked").val();
      var toppings = $("input:radio[name=toppings]:checked").val();
      var myPizza = new Pizza(size,toppings);
      $("#showPrice").text(" TOTAL $" + myPizza.price());
    });
  });

// || "iceCream" || "spaghetti"
//
// ********************************************************************
//   // $(document).ready(function() {
//   //   $("#newPizza").submit(function(event) {
//   //     $("ul").empty();
//   //     event.preventDefault();
//   //     var inputtedSize = $("input#pizzaSize").val();
//   //     var inputtedToppings = $("input#toppings").val();
//   //     var myPizza = new Pizza(inputtedSize, inputtedToppings);
//   //     $("#showPrice").text(" TOTAL $" + myPizza.price());
//   //   });
//   // });
// ********************************************************************
