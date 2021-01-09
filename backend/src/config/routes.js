const express = require('express')

module.exports = function(server) {
  const router = express.Router()
  server.use('/api', router)
  router.get('/login', function (req, res, next) {
    res.send({"Success":"Success!"});
  });
  router.post('/login', function (req, res, next) {
    //console.log(req.body);
    User.findOne({email:req.body.email},function(err,data){
      if(data){
          res.send({"Success":"Success!"});
      }else{
        res.send({"Success":"This Email Is not regestered!"});
      }
    });
  });
  
  const todoService = require('../api/todo/todoService')
  todoService.register(router, '/todos')
}
