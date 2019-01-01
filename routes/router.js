const router = require('express').Router();
var path = require('path');

router.get('/',(req,res)=>{
  var addtodb = require(path.join(__dirname, '../queries/addtodb.js'));

});

router.get('/main',(req,res)=>{
  res.render('homepage');
});
router.get('/progress',(req,res)=>{

  var progress = require(path.join(__dirname, '../queries/progressQuery.js'));

  progress.query().then(function(result){
    res.send(result);

  },function(err){
    console.log(err);
  })


});

module.exports = router;
