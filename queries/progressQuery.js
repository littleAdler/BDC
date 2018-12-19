var pool= require('../connection_tools/connection_pool.js');


function query(){

var promise = new Promise((resolve,reject)=>{
//connect to db
pool.connect(function(err,client,done){
  if(err){
    //log a connection error if it occurs
    console.error('error from connection pool -->',err);
  }
  //query the databse

  client.query('SELECT * FROM student natural join taughtstep natural join attendance',function(err,result){

      if(err){
        done();
        reject(err);
      }else{
        done();
        resolve(result);
      }
    });


  });
});

var obj = promise.then(function(result){
    //pass connection back to pool
    return result.rows;
}, function(err) {
  //log if there is an error with the query
  console.err('error running query',err);
  //pass connection back to pool
});


return obj;

}
module.exports.query = query;
