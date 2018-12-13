var pool= require('../connection_tools/connection_pool.js');

//connect to db
pool.connect(function(err,client,done){
  if(err){
    //log a connection error if it occurs
    console.error('error from connection pool -->',err);
  }
  //query the databse
  client.query('SELECT * FROM student',function(err,result){
    //return connection to pool
    done();

    if(err){
      //log if there is an error with the query
      console.err('error running query',err);
    }
    //diplay the query result
    console.log(result.rows);
  });
});
