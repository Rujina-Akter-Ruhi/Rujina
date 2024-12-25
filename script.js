


// scrollify

$(function() {
    $.scrollify({
      section : ".scrollify",
      setHeights: false,
      updateHash: false,
    });
  });


  //Hamburger menu///   


  function openMenu(){
    document.getElementById('navber').style.height = "100%";

  }

  function closeMenu(){
    document.getElementById('navber').style.height = "0%";

  }

  //smooth scroll///
  $(function(){
    $('.menu-item a, .scroll-dwon a').on('click', function(){
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
      return false;
    });
  });