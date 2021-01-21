const con = require("../db.js");
var db = require("../db.js");

module.exports ={

    async allSell(req,res)
    {   

        db.query("use store");
        await db.query("select sum(total) as TotalSell from orders",function(err,resp) {
            if (err) {
              console.error('error: ' + err.stack);
              return;
            }
            res.send(resp);
        });
    }
}
