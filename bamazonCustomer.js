var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
	host: "localhost",

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "root",
	database: "bamazon"
});

connection.connect(function (err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
});


// Function that displays products in a table using module cli-table

var displayProducts = function() {
	var query = "SELECT * FROM products";
	connection.query(query, function(err, res){
		if(err) throw err;
		var displayTable = new Table ({
			head: ["item_id","product_name", "department_name", "price" , "stock_quantity"],
			colWidths:[10,25,25,10,41]
		});
		for(var i=0; i < res.length; i++){
			displayTable.push(
				[res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
			);
		}
		console.log(displayTable.toString());
		purchasePrompt();
	});
}

function purchasePrompt(){
	inquirer.prompt([
		{
			name: "ID",
			type: "input",
			message: "Please enter Item ID you would like to purchase.",
			filter:Number
		},
		{
			name: "Quantity",
			type:"input",
			message: "How many items would like to purchase?",
			filter: Number
		},
	]).then(function(answers){
		var quantityNeeded = answers.Quantity;
		var IDrequested = answers.ID;
		purchaseOrder(IDrequested, quantityNeeded)
	});
};

function purchaseOrder(ID, amtNeeded) {
	connection.query('SELECT * FROM products WHERE item_id = ' + ID, function(err, res){
		if(err){console.log(err)};
		if(amtNeeded <= res[0].stock_quantity){
			var totalCost = res[0].price * amtNeeded;
			console.log("Good news your order is in stock!");
			console.log("Your total cost for " + amtNeeded + " " + res[0].product_name + " is " + totalCost + " ,Thank you!");

			connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amtNeeded + " WHERE item_id =" + ID);
		} else {
			console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
			displayProducts();
		};

	})
}



displayProducts();