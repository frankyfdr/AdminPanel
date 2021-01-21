const customer = "CREATE TABLE customer (email VARCHAR(255)  PRIMARY KEY, dateREG VARCHAR(255), status VARCHAR(255), phone INT, address VARCHAR(255), password VARCHAR(255))"
var NewCustomer = "CREATE PROCEDURE NewCustomer \
(\
    email varchar(64),\
    name varchar(64),\
    dateREF varchar(64),\
    status varchar(64),\
    phone int,\
    address varchar(255),\
    password VARCHAR(255),\
) \
BEGIN \
  insert into customers (email,name,date,status,phone,address,password) VALUES ('email', 'name', 'date', 'status', 'phone', 'address', 'password')\
END; "