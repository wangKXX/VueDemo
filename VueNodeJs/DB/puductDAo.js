var connect = require("./MYSQL.js")
var connect = connect.conntentMySQL();
exports.checkPwd = function(name,pwd){
    var isExsit = false;
    return new Promise((resolve,reject)=>{
        connect.query("SELECT pwd from user where account='" + name + "'", function (error, results, fields) {
            if (error) throw error;
            postHTML = results[0];
            if (typeof(postHTML) == undefined) {
                reject("fail");
            }
            repwd = postHTML['pwd'];
            
            if(repwd === pwd){
                resolve("ok");
            }else{
                reject("fail");
            }
        })
    });            
}

exports.getAllPuduct = function(){
    return new Promise((resolve,reject)=>{
        connect.query("SELECT * from puducttab", function (error, results, fields) {
            if (error) {
                reject("fail");
               throw error; 
            } else{
                if (typeof(postHTML) == undefined)
                    reject("fail");
                var puduct = {};
                puduct.results = results; 
                resolve(puduct);
            }
        })
    });            
}