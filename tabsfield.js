(function ($) {
  $(document).ready(function(){



    $('.tabsfield-nav li').click(function(){

      target = $(this).attr('toggle');

      console.log(target);

      $('.toggle-page').hide();

      //$('nav').add('#search-section-form').add('#user-menu').hide();
      $(target).show();
      $(this).siblings('li').removeClass('active');
      $(this).addClass('active');


    });    



  });
})(jQuery);