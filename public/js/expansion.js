$('.collapsedmid').click(function(){

  if($(this).hasClass('collapsedmid')){
    $(this).toggleClass('collapsedmid expandedmid');
    $( this ).animate({width:"44%"},2000,function(){
      //run on animation complete
      if(this.id ==="d2" && $('.expanded-content').is(':hidden') ){
        $('.expanded-content').fadeToggle("slow");
      }

      });
      $('.content').fadeToggle("slow");


    if(this.id === "d1"){


      $('#d2').toggleClass('expandedmid collapsedmid');
      $('#d3').toggleClass('expandedmid collapsedmid');

      $('#d2').animate({width:"3%"},1000,function(){
        //run on animation complete

        });
      $('#d3').animate({width:"3%"},1000,function(){
        //run on animation complete
        });
    }else if(this.id ==="d2"){
      $('#d1').toggleClass('expandedmid collapsedmid');
      $('#d3').toggleClass('expandedmid collapsedmid');

      $('#d1').animate({width:"3%"},1000,function(){
        //run on animation complete
        });
      $('#d3').animate({width:"3%"},1000,function(){
        //run on animation complete
        });
    }else{
      $('#d1').toggleClass('expandedmid collapsedmid');
      $('#d2').toggleClass('expandedmid collapsedmid');

      $('#d1').animate({width:"3%"},1000,function(){
        //run on animation complete
        });
      $('#d2').animate({width:"3%"},1000,function(){
        //run on animation complete
        });
    }

  }else if($(this).hasClass('expandedmid')){
    if( $('.expanded-content').is(':visible')){
      $('.expanded-content').fadeToggle("fast");
    }

      $(this).toggleClass('expandedmid collapsedmid');
      $( this ).animate({width:"16.67%"},2000,function(){
        //run on animation complete

        $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
        	$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
        });
        $('.content').fadeToggle("slow");

      });
    if(this.id === "d1"){
      $('#d2').toggleClass('collapsedmid expandedmid');
      $('#d3').toggleClass('collapsedmid expandedmid');

      $('#d2').animate({width:"16.67%"},2500,function(){
        //run on animation complete
        });
      $('#d3').animate({width:"17%"},2500,function(){
        //run on animation complete
        });
    }else if(this.id === "d2"){
      $('#d1').toggleClass('collapsedmid expandedmid');
      $('#d3').toggleClass('collapsedmid expandedmid');

      $('#d1').animate({width:"16.67%"},2500,function(){
        //run on animation complete
        });
      $('#d3').animate({width:"17%"},2500,function(){
        //run on animation complete
        });
    }else{
      $('#d1').toggleClass('collapsedmid expandedmid');
      $('#d2').toggleClass('collapsedmid expandedmid');

      $('#d1').animate({width:"16.67%"},2500,function(){
        //run on animation complete
        });
      $('#d2').animate({width:"17%"},2500,function(){
        //run on animation complete
    });
    }
  }
});


var progressBarOptions = {
	startAngle: -1.55,
	size: 200,
    value: .74,
    fill: {
		color: '#ffa500'
	}
}
//need this one to run circle on initial page
$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
	$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});
