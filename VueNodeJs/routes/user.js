
/*
 * GET users listing.
 */
var puductDAO = require("../DB/puductDAo")

exports.login = function(req, res){
  
  
  var name=req.body.name ;
  var pwd=req.body.pwd ;
  
  puductDAO.checkPwd(name, pwd).then(() => {
      res.send("ok");
  },

  () => {
      res.send("fail");
  });
  
};
exports.getAll = function(req, res){
  puductDAO.getAllPuduct().then((data) => {
    res.send(data);
  }).catch(function(err){
    res.send(err);
  })

};