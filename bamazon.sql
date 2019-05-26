
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price , stock_quantity)
VALUES ("soda","beverages", 1.50, 10);

INSERT INTO products (product_name, department_name, price , stock_quantity)
VALUES ("chocolate", "desserts", 2.00, 12);

INSERT INTO products (product_name, department_name, price , stock_quantity)
VALUES ("t-shirt", "clothing", 11.50, 7);

INSERT INTO products (product_name, department_name, price , stock_quantity)
VALUES ("toilet papper", "cleaning", 2.50, 7);

INSERT INTO products (product_name, department_name, price , stock_quantity)
VALUES ("bread", "food",  3.25, 8);

INSERT INTO products (product_name, department_name, price , stock_quantity)
VALUES ("beer","beverages", 6.50, 20);

INSERT INTO products (product_name, department_name, price , stock_quantity)
VALUES ("cake", "desserts", 6.00, 4);

INSERT INTO products (product_name, department_name, price , stock_quantity)
VALUES ("pants", "clothing", 15.50, 6);

INSERT INTO products (product_name, department_name, price , stock_quantity)
VALUES ("mop", "cleaning", 8.50, 5);

INSERT INTO products (product_name, department_name, price , stock_quantity)
VALUES ("ham", "food",  4.25, 9);

SELECT * FROM products;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES;