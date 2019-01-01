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

  client.query("SELECT COUNT(DISTINCT stepname), studentname,studentlevel FROM student NATURAL JOIN attendance NATURAL JOIN lesson NATURAL JOIN dancestep NATURAL JOIN taughtstep WHERE dancename = 'Waltz' GROUP BY stepdifficulty,studentname,studentlevel",function(err,result){
    //SELECT * FROM student natural join taughtstep natural join attendance
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
  console.error('error running query',err);
  //pass connection back to pool
});


return obj;

}

//----------------------------------------
function query2(){

var promise = new Promise((resolve,reject)=>{
//connect to db
pool.connect(function(err,client,done){
  if(err){
    //log a connection error if it occurs
    console.error('error from connection pool -->',err);
  }
  //query the databse

  client.query("SELECT * FROM student natural join taughtstep natural join attendance",function(err,result){
    //
    //SELECT stepdifficulty,COUNT(DISTINCT stepname) FROM dancestep WHERE dancename = 'Waltz' GROUP BY stepdifficulty ORDER BY stepdifficulty ASC
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
  console.error('error running query',err);
  //pass connection back to pool
});


return obj;

}
module.exports.query = query;
module.exports.query2 = query2;
