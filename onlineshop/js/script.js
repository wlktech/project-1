$(document).ready(function () {
  
    var navbar = $('#navbar');
    $(window).scroll(function(){
        if($(window).scrollTop() <=30){
            navbar.slideDown('slow');
        }else{
            navbar.slideUp('slow');
        }
    })

    $(".hoverEffect").hover(function(){
      $('.dropdown-menu').show('slow');
      }, function(){
      $('.dropdown-menu').hide('slow');
    });

    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-angle-left left_arrow">',
        nextArrow: '<i class="fas fa-angle-right right_arrow">',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    
    //sidebar
    $('#all').click(function(){
      $('.puma').show('slow');
      $('.gucci').show('slow');
      $('.adidas').show('slow');
      $('#all').addClass('active');
      $('#puma').removeClass('active');
      $('#gucci').removeClass('active');
      $('#adidas').removeClass('active');
    })
    $('#puma').click(function(){
      $('.puma').show('slow');
      $('.gucci').hide('slow');
      $('.adidas').hide('slow');
      $('#all').removeClass('active');
      $('#puma').addClass('active');
      $('#gucci').removeClass('active');
      $('#adidas').removeClass('active');
    })
    $('#gucci').click(function(){
      $('.puma').hide('slow');
      $('.gucci').show('slow');
      $('.adidas').hide('slow');
      $('#all').removeClass('active');
      $('#puma').removeClass('active');
      $('#gucci').addClass('active');
      $('#adidas').removeClass('active');
    })
    $('#adidas').click(function(){
      $('.puma').hide('slow');
      $('.gucci').hide('slow');
      $('.adidas').show('slow');
      $('#all').removeClass('active');
      $('#puma').removeClass('active');
      $('#gucci').removeClass('active');
      $('#adidas').addClass('active');
    })


    //magnifer
    var $loupe = $(".loupe"),
    loupeWidth = $loupe.width(),
    loupeHeight = $loupe.height();

$(document).on("mouseenter", ".zoomin", function (e) {
    var $currImage = $(this),
        $img = $('<img/>')
        .attr('src', $('img', this).attr("src"))
        .css({ 'width': $currImage.width() * 2, 'height': $currImage.height() * 2 });

    $loupe.html($img).fadeIn(100);
    
    $(document).on("mousemove",moveHandler);
                   
    function moveHandler(e) {
        var imageOffset = $currImage.offset(),
            fx = imageOffset.left - loupeWidth / 2,
            fy = imageOffset.top - loupeHeight / 2,
            fh = imageOffset.top + $currImage.height() + loupeHeight / 2,
            fw = imageOffset.left + $currImage.width() + loupeWidth / 2;
        
        $loupe.css({
            'left': e.pageX - 75,
            'top': e.pageY - 75
        });

        var loupeOffset = $loupe.offset(),
            lx = loupeOffset.left,
            ly = loupeOffset.top,
            lw = lx + loupeWidth,
            lh = ly + loupeHeight,
            bigy = (ly - loupeHeight / 4 - fy) * 2,
            bigx = (lx - loupeWidth / 4 - fx) * 2;

        $img.css({ 'left': -bigx, 'top': -bigy });

        if (lx < fx || lh > fh || ly < fy || lw > fw) {
            $img.remove();
            $(document).off("mousemove",moveHandler);
            $loupe.fadeOut(100);
        }
    }
});

});

