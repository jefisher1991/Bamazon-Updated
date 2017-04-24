var mysql = require("mysql");
var inquirer = require("inquirer");

// creates the connection to mySQL
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "NotAnother1",
    database: "bamazon"
});

// shows the connection to the database.
connection.connect(function(err) {
    getItem();
})

// // Creates the prompts
// function promptUser(res) {
//     inquirer.prompt([{
//         name: "id",
//         message: "What is the id of the product you would like to buy?"
//     }, {
//         name: "quantity",
//         message: "How many would you like to buy?"
//     }]).then(function(res) {
//         var itemId = res.id;
//         var customerAmount = res.quantity;
//         getItem(itemId, customerAmount);
//     });
// }


// function updateItem (items){
// // // to grab the specific item to update
// for (var i = 0; i < results.length; i++) {
//         if (items[i].id === customer.ID && customerAmount > items.stock_quantity) {

//     connection.query(stock_quantity[i]-customerAmount);
//         }
//       }
//  }

var getItem = function() {
    connection.query("SELECT * FROM products", function(err, res) {
      inquirer.prompt({
        name: "product",
        type: "rawlist",
        message: "What product would you like to buy? Enter the ID number.",
        choices: function(value) {
          var choiceArray = [];
          for (var i = 0; i < res.length; i++) {
            var result = {};
            result.id = res[i].id;
            result.product_name = res[i].product_name;
            result.price = res[i].price;
            choiceArray.push(JSON.stringify(result));
          }
          return choiceArray;
        }
      }).then(function(answer) {
        var selectedItemId = JSON.parse(answer.product).id;
        var selectedPrice = JSON.parse(answer.product).price;
        for (var i=0; i<res.length; i++) {
          if (res[i].id == selectedItemId) {
            var chosenItem = res[i];
            inquirer.prompt({
              name: "units",
              type: "input",
              message: "How many units would you like to buy?",
              validate: function(value) {
                if (isNaN(value) == false) {
                  return true;
                } else {
                  return false;
                }
              }
            }).then(function(answer) {
              var totalCost = parseInt(answer.units) * selectedPrice;
              if (chosenItem.stock_quantity > parseInt(answer.units)) {
                connection.query("UPDATE products SET ? WHERE ?", [{
                  stock_quantity: chosenItem.stock_quantity - parseInt(answer.units)
                }, {
                  id: chosenItem.id
                }], function(err, res) {
                  console.log("Order placed successfully! Your total was: " + totalCost);
                  return;
                })
              } else {
                console.log("Insufficient quantity! Try again...")
                getItem();
              }
            })
          }
        }
      })
    })
  }
