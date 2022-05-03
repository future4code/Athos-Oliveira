CREATE TABLE labecommerce_users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password varchar(255)NOT NULL
    
);
INSERT INTO labecommerce_users (id, name, email, password)
VALUES(
  "005", 
  "KENNY",
  "KENNY@hotmail.com",
  "119G9GEC"
);

CREATE TABLE labecommerce_products (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    price FLOAT NOT NULL,
    image_url varchar(255)NOT NULL
    
);
select * from labecommerce_users;
select * from labecommerce_products;
update labecommerce_products set name ="Fosforos" where  id = "002";
INSERT INTO labecommerce_products (id, name, price, image_url)
VALUES(
  "005", 
  "Biscoito",
  "4.00",
  "https://a-static.mlcdn.com.br/1500x1500/biscoito-maisena-bauducco-170g/magazineluiza/225337300/7848919852b8fc2cc34ddac9ceb1c7a7.jpg"
);
select * from labecommerce_purchases;
CREATE TABLE labecommerce_purchases (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR (255),  FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
    product_id VARCHAR (255),  FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
    quantity FLOAT NOT NULL,
    total_price FLOAT NOT NULL
);
INSERT INTO labecommerce_purchases (id,  user_id, product_id, quantity,total_price)
VALUES(
  "001", 
  "001",
  "001",
  "5",
  "75"
);