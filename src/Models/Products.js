
const express = require("express");
const db = require("../db.js")

module.exports = {

async createTableProducts()
{
const query = "CREATE TABLE products\
 (pid INT AUTO_INCREMENT PRIMARY KEY,\
  name VARCHAR(255),\
  title VARCHAR(255),\
  price INT,\
  stock INT,\
  category VARCHAR(255),\
  PrecoCusto INT)";

  db.query("use store")
  await  db.query(createTableProducts, function (err, resposta) {
        console.log(err)
             //---> don't forget the connection release.
      });
},

async NewProduct()
{

const newProduct = "CREATE PROCEDURE NewProduct \
(\
    name varchar(64),\
    title varchar(64),\
    price int,\
    stock int,\
    category varchar(64),\
    precoCusto int\
) \
BEGIN \
  insert into products (name,title,price,stock,category,precoCusto) VALUES (name,title,price,stock,category,precoCusto);\
END; "

}, 
    async updateProduct(req, res)
    {
      const updateProduct = " CREATE PROCEDURE updateProduct \
      (\
        id int,\
        name varchar(64),\
        title varchar(64),\
        price int,\
        stock int,\
        category varchar(64),\
        precoCusto int\
      ) \
      BEGIN \
        UPDATE products set name = name,title =title, price= price, stock = stock, category = category,precoCusto = precoCusto\
        where pid = id;\
        END ";

      db.query("use store")
        db.query(updateOrderStatus, function (err, resposta) 
        {
          console.log(err)
              //---> don't forget the connection release.
        });
  
    },
    async delPRO(req, res)
    {
      const delPRO = " CREATE PROCEDURE delPRO \
      (id int)\
      BEGIN \
      DELETE FROM products WHERE  pid = id;\
      end";
      

      db.query("use store")
        db.query(delPRO, function (err, resposta) 
        {
          console.log(err)
              //---> don't forget the connection release.
        });
  
    }
  
}

