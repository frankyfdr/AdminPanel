const con = require("../db.js");
var db = require("../db.js");
var Model = require("../Models/Orders.js")

module.exports ={

    async new(req,res)
    {   
        let data,status,customer,item,total;
        data= req.body.data;
        status = req.body.status;
        customer = req.body.customer;
        item = req.body.item;
        total = req.body.total;

        db.query("use store");
        await db.query("call NewOrder('"+data+"','"+status+"',"+customer+","+item+","+total+");",function(err) {
            if (err) {
              console.error('error: ' + err.stack);
              return;
            }
            res.send(true);
        });
       // Model.createProcuNewOrder();
    },

    async allOrders(req, res) {
        db.query("use store");
        await db.query("select * from orders",function(err,query) {
            if (err) {
              console.error('error: ' + err.stack);
              return;
            }
            res.send(query);
        });
    },
    async updateOrder(req, res){
         db.query("use store");
        await db.query("call updateOrderStatus('"+req.body.status+"',"+req.body.id+")",function(err,query) {
            if (err) {
              console.error('error: ' + err.stack);
              return;
            }
            res.send(true);
        });
    },
    async deleteOrder(req, res){
  
        db.query("use store");
       await db.query("call delOrder("+req.body.id+")",function(err) {
           if (err) {
             console.error('error: ' + err.stack);
             return;
           }
           res.send(true);
       });
   },
}
/*
UPDATE orders SET status = req .body

*/
