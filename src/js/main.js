// Add main scripts here
$(document).ready(function() {

    $('a.scrollTo').each(function(a,b){
        $(this).on('click',function(event){
            event.preventDefault();
            var selector = $(this).attr('data-targ');
            $('body, html').scrollTo(selector);
        });
    });
    
    $('a.scrollToPos').each(function(a,b){
        console.log("each");
        $(this).on('click',function(event){
            console.log("on click in");
            var val = parseInt($(this).attr('data-targ'));
            var currentDis = Math.floor(Math.abs(document.body.scrollTop - val)*0.6);
            if(currentDis < 600) {
                currentDis = 600;
            }
            console.log(Math.floor(currentDis));
            $('body, html').scrollTo(val,currentDis,{easing:'easeInOutQuart',interrupt:true});

        });
    });


});