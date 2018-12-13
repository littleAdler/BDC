$('.collapsedmid').click(function(){
  $.get('/progress',function(data,status){
    console.log(data);
    console.log(status);
  })

});
