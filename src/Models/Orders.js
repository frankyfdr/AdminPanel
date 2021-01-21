const db = require("../db.js")
module.exports= {
  async createTable(req, res)
  {
    const orders = "CREATE TABLE orders (ordersID INT AUTO_INCREMENT PRIMARY KEY, date VARCHAR(255), status VARCHAR(255), customer INT, item int,total INT)";

  },

  async createProcuNewOrder(req, res)
  {
   const NewOrder = " CREATE PROCEDURE NewOrder \
    (\
        date varchar(64),\
        status varchar(64),\
        customer int,\
        item int,\
        total int\
    ) \
    BEGIN \
      insert into orders (date, status, customer, item, total) VALUES ('date', 'date', 'status', 'customer', 'item', 'total');\
    END "

     db.query("use store")
      db.query(NewOrder, function (err, resposta) {
        console.log(resposta)
        console.log(err)
             //---> don't forget the connection release.
      });
  
    },


    async updateOrderStatus(req, res)
    {
      const updateOrderStatus = " CREATE PROCEDURE updateOrderStatus \
      (\
          status varchar(64),\
      ) \
      BEGIN \
        UPDATE orders set status = status;\
        END "

      db.query("use store")
        db.query(updateOrderStatus, function (err, resposta) 
        {
          console.log(err)
              //---> don't forget the connection release.
        });
  
    },
    async delOrder(req, res)
    {
    
      const delOrder = " CREATE PROCEDURE delOrder \
      (id int)\
      BEGIN \
      DELETE FROM orders WHERE  oid = id;\
      end";
      

      db.query("use store")
        db.query(delOrder, function (err, resposta) 
        {
          console.log(err)
              //---> don't forget the connection release.
        });
  
    }
  


    
}

