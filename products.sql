CREATE database bamazon; 

USE bamazon; 

CREATE TABLE products (
	id  INTEGER (11) AUTO_INCREMENT NOT NULL, 
    product_name VARCHAR (50), 
    department_name VARCHAR (50), 
    price INTEGER (11), 
    stock_quantity INTEGER (11),
  PRIMARY KEY (id));
  
  

            insert INTO products (product_name,  department_name, price, stock_quantity) VALUES ("mug", "Home Goods", 10, 4);
              insert INTO products (product_name,  department_name, price, stock_quantity) VALUES ("bean bag chair", "furniture", 125, 3);
                insert INTO products (product_name,  department_name, price, stock_quantity) VALUES ("apples", "groceries", 1, 100);
                  insert INTO products (product_name,  department_name, price, stock_quantity) VALUES ("dog food", "pets", 45, 6);
                    insert INTO products (product_name,  department_name, price, stock_quantity) VALUES ("t-shirt", "clothing", 12, 15);
                    
			insert INTO products (product_name,  department_name, price, stock_quantity) VALUES ("lava lamp", "Home Goods", 25, 15);
              insert INTO products (product_name,  department_name, price, stock_quantity) VALUES ("painting", "art", 300, 1);
                insert INTO products (product_name,  department_name, price, stock_quantity) VALUES ("bread", "groceries", 3, 75);
                  insert INTO products (product_name,  department_name, price, stock_quantity) VALUES ("mascara", "beauty", 12, 29);
                    insert INTO products (product_name,  department_name, price, stock_quantity) VALUES ("football", "toys", 25,103);
            
SELECT * from products; 
