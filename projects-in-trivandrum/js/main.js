jQuery(document).ready(function($){
    $('.yplay').click(function(){
       var src = $(this).attr('href');
       var content = '<iframe src="' + src + '" width="700" height="500" frameborder="0" allowfullscreen></iframe>';
       //alert(content);
       $('#videoModal .embed-responsive-wrap').html(content);
       $('#videoModal').modal("show");
       return false;
    });
    
       $('.banner-items').slick({
           infinite: true,
           dots:true,
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows:false,
           autoplay:true,
       });
       $('.video-items').slick({
           infinite: true,
           dots:false,
           slidesToShow: 3,
           slidesToScroll: 1,
           arrows:true,
           autoplay:false,
           responsive: [
               {
                 breakpoint: 1024,
                 settings: {
                   slidesToShow: 3,
                 }
               },
               {
                 breakpoint: 600,
                 settings: {
                   slidesToShow: 2,
                   centerMode: false
                 }
               },
               {
                 breakpoint: 480,
                 settings: {
                   slidesToShow: 1,
                   centerMode: false
                 }
               }],
           prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa-solid fa-chevron-left fa'></i></button>",
           nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa-solid fa-chevron-right fa'></i></button>"
       });
      
    
});