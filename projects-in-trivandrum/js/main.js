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
       $('.open-form').click(function(){
          var ftype = $(this).attr('data-ftype');
          var proj = $(this).attr('data-project');
          if(ftype == 1){
             $('#enqModal .modal-header h3').text('Enquire Now');
             $('#form-type').val(1);
             $('#prj-name').val(proj);
          }else if(ftype == 2){
             $('#enqModal .modal-header h3').text('Download Brochure');
             $('#form-type').val(2);
             $('#prj-name').val(proj);
          }
          $('#enqModal').modal("show");
          return false;
       });
       $( "#popup-form" ).validate({
       rules: {
         name: {
           required: true
         },
         phone: {
           required: true,
           number: true,
           maxlength: 12,
           minlength: 10
         },
         email: {
           required: true,
           email: true
         }
       },
     submitHandler: function() {
      jQuery.ajax({
          url: "submit.php",
          data:jQuery("#popup-form").serialize(),
          type: "POST",
          success:function(response){
            data = $.parseJSON(response);
            //alert(data.url);
            //return false;
            if(data.output == 1){
                if(data.form_type == 1){
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                     'event': 'thrissurenquirenow'
                  });
                        jQuery('.error-popup').html('THANK YOU FOR REGISTERING.<br>Our Customer Support Team will be calling you shortly').show();
                }else if(data.form_type == '2'){
                    var project = data.project;
                     window.dataLayer = window.dataLayer || [];
                     window.dataLayer.push({
                        'event': 'thrissurbrochuredownload'
                     });
                    //alert(project);
                    if(project == 1){
                        window.location.href = data.url+'/ebony.pdf';
                    }else if(project == 2){
                        window.location.href = data.url+'/lotus.pdf';
                    }else if(project == 3){
                        window.location.href = data.url+'/mapple.pdf';
                    }
                }
                }else{
                    jQuery('.error-popup').html('Something went wrong please try again..').show();
                }
                jQuery('#popup-form')[0].reset();
                setTimeout(function() {
                  $('.error-popup').hide();
                }, 5000);
            },
            error:function (){
              
            }
        });
       return false;
   }
   });
       $( "#footer-form" ).validate({
       rules: {
         name: {
           required: true
         },
         phone: {
           required: true,
           number: true,
           maxlength: 12,
           minlength: 10
         },
         email: {
           required: true,
           email: true
         }
       },
     submitHandler: function() {
      jQuery.ajax({
          url: "submit.php",
          data:jQuery("#footer-form").serialize(),
          type: "POST",
          success:function(response){
            data = $.parseJSON(response);
            if(data.form_type == 3){
               window.dataLayer = window.dataLayer || [];
                     window.dataLayer.push({
                        'event': 'thrissurfooterform'
                     });
                jQuery('.error-footer').html('THANK YOU FOR REGISTERING.<br>Our Customer Support Team will be calling you shortly').show();
             }else{
                jQuery('.error-footer').html('Something went wrong please try again..');
             }
             jQuery('#footer-form')[0].reset();
           setTimeout(function() {
             $('.error-footer').hide();
           }, 5000);
          },
          error:function (){
            
          }
      });
       return false;
   }
   });
    
});