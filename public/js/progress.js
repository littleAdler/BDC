$('.collapsedmid').click(function(){

  //Query the db for the user info and render everything onto the page

  $.get('/progress',function(data,status){
    //console.log(data);
    //console.log(status);
    console.log(data[0]);
    $('#level').text(data[0].studentlevel);
    $('#level-exp').text(data[0].studentlevel);
    $('#sid').text(data[0].studentid)
    $('#name').text(data[0].studentname.toUpperCase());

    console.log(data)

  })

});
