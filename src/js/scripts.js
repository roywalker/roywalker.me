$(function(){
    var 
    Node = $('.box'),
    BaseWidth = Node.width();
    
    $(window).resize(function() {
        $('.box').css({
            //left: ($(window).width() - $('.box').outerWidth()) / 2
        });
    });
    
    
    
    // To initially run the function:
    $(window).resize();
    
    
    var $scrollingDiv = Node;
    $(window).scroll(function() {
        var winScrollTop = $(window).scrollTop() + 0,
            zeroSizewidth = $(document).width() - $(window).width(),
            newSize = BaseWidth * ( 1 - (winScrollTop / zeroSizewidth) * (2/3) );
        
        Node.css({
            width: newSize
        });
    });

});
