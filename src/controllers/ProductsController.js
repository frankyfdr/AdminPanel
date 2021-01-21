const con = require("../db.js");
var db = require("../db.js");
var Model = require("../Models/Orders.js")

module.exports ={

    async newPRO(req,res)
    {   console.log(req.body)
        let name,title,price,stock,category,precoCusto;
        name= req.body.name;
        title= req.body.title
        price = req.body.price;
        stock = req.body.stock;
        category = req.body.category;
        precoCusto = req.body.precoCusto;

        db.query("use store");
        await db.query("call NewProduct('"+name+"','"+title+"',"+price+","+stock+",'"+category+"',"+precoCusto+");",function(err) {
            if (err) {
              console.error('error: ' + err.stack);
              return;
            }
            res.send(true);
        });
       // Model.createProcuNewOrder();
    },

    async allPRO(req, res) {
        db.query("use store");
        await db.query("select * from products",function(err,query) {
            if (err) {
              console.error('error: ' + err.stack);
              return;
            }
            res.send(query);
        });
    },
    async updatePRO(req, res){
         db.query("use store");
        await db.query("call updateProduct("+req.body.id+",'"+req.body.name+"',\
        '"+req.body.title+"',\
        "+req.body.price+",\
        "+req.body.stock+",\
       '"+req.body.category+"',\
        "+req.body.precoCusto+")",function(err,query) {
            if (err) {
              console.error('error: ' + err.stack);
              return;
            }
            res.send(true);
        });
    },
    async deletePRO(req, res){
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