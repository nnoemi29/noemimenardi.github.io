//Immagini hover home
  $(document).ready(function(){
      $("#Lentezza").mouseover(function(){  //Al ponerme encima de la ID fotoseventos aparece la clase descripción
          $(".img1 ").css("display", "block");
      });
      $("#Lentezza").mouseout(function(){
          $(".img1").css("display", "none"); //cuando el raton sale de la imagen desaparece la descripción
        });
  });


  $(document).ready(function(){
      $("#Kioo").mouseover(function(){
          $(".img2 ").css("display", "block");
      });
      $("#Kioo").mouseout(function(){
          $(".img2").css("display", "none");
        });
  });


  $(document).ready(function(){
      $("#Kioo_Online").mouseover(function(){
          $(".img3").css("display", "block");
      });
      $("#Kioo_Online").mouseout(function(){
          $(".img3").css("display", "none");
        });
  });

  $(document).ready(function(){
      $("#Memoria").mouseover(function(){
          $(".img4").css("display", "block");
      });
      $("#Memoria").mouseout(function(){
          $(".img4").css("display", "none");
        });
  });


  $(document).ready(function(){
      $("#Chocolate").mouseover(function(){
          $(".img5").css("display", "block");
      });
      $("#Chocolate").mouseout(function(){
          $(".img5").css("display", "none");
        });
  });

  $(document).ready(function(){
      $("#Mercato").mouseover(function(){
          $(".img6").css("display", "block");
      });
      $("#Mercato").mouseout(function(){
          $(".img6").css("display", "none");
        });
  });


  $(document).ready(function(){
      $("#Citybuddy").mouseover(function(){
          $(".img7").css("display", "block");
      });
      $("#Citybuddy").mouseout(function(){
          $(".img7").css("display", "none");
        });
  });


  $(document).ready(function(){
      $("#Mag").mouseover(function(){
          $(".img8").css("display", "block");
      });
      $("#Mag").mouseout(function(){
          $(".img8").css("display", "none");
        });
  });

  $(document).ready(function(){
      $("#Moodmoritz").mouseover(function(){
          $(".img9").css("display", "block");
      });
      $("#Moodmoritz").mouseout(function(){
          $(".img9").css("display", "none");
        });
  });

//Circular cursor
  $(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX,
        top: e.pageY
      });
    })
  });
