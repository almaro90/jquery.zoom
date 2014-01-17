/**
 * https://github.com/almaro90/jquery.zoom
 * Version : 1.00.A
 * By Almaro90 & Queque 
 * License : GPL v3 
 */

/*-----------------------------------------------------------------------------
 *
 *				MI ZONA DE TRABAJO, BÚSCATE LA TUYA
 *
 *-----------------------------------------------------------------------------
 */
 var posTop = 0;
 var posLeft = 0;
 var popTop = 0;

 $.fn.centerToWindow = function()
{
  var obj           = $(this);
  var obj_width     = $(this).outerWidth(true);
  var obj_height    = $(this).outerHeight(true);
  var window_width  = window.innerWidth ? window.innerWidth : $(window).width();
  var window_height = window.innerHeight ? window.innerHeight : $(window).height();

  obj.css({
    "position" : "fixed",
    "top"      : ((window_height / 2) - (obj_height / 2))+"px",
    "left"     : ((window_width / 2) - (obj_width / 2))+"px"
  });
}

 	function cargarEventos(){
 		//$("#carga").hide();
		$(".zoom").click(function(){	
			$("body").css({ overflow: "hidden" });
			fotoHeight = $(this).find("img").width();		
			posTop  = $(this).offset().top;
			posLeft = $(this).offset().left;
			
			tope =  ($(window).height()/2) - ($("#carga").height()/2);			
			
			



		    $("body").prepend('<div id="zoom-background-black"></div>');

		    $("#zoom-background-black").click(function(){	
			$( "#carga" ).animate({
								    width: "0%",
								    opacity: 0,
								     top: "+="+posTop-fotoHeight,
								     left: "+="+posLeft
								  }, 300, function(){
								  	$("#carga").toggle();
									$("#zoom-background-black").remove();
								  });	
				$("body").css({ overflow: "auto" });		
			});

			$("#carga").find("img").attr("src",$(this).find("img").attr("src"));

			
			//$("#zoom-background-black").css({top: tope+"px"});
			//$("#carga").css({ top: tope+"px" });
			$("#carga").css({ left: posLeft+"px" });

			
			$("#carga").toggle();
			$("#carga").centerToWindow();
			$("#zoom-background-black").centerToWindow();
			$("#zoom-background-black").css({left: 0});
			$( "#carga" ).animate({
								    width: "100%",
								    opacity: 1,
								    top: "-="+posTop-fotoHeight,
								    left: "-="+posLeft	  
								  }, 1, function(){
								  	$("#zoom-background-black").css({ width: "120%"});
								  	$("#carga").centerToWindow();
								  });

		});

		$("#carga").click(function(){	
			$( "#carga" ).animate({
								    width: "0%",
								    opacity: 0,
								     top: "+="+posTop-fotoHeight,
								     left: "+="+posLeft
								  }, 300, function(){
								  	$("#carga").toggle();
									$("#zoom-background-black").remove();
								  });
			$("body").css({ overflow: "auto" });
		});
		
	}



/*-----------------------------------------------------------------------------
 *
 *							TRABAJA A PARTIR DE AQUÍ
 *
 *-----------------------------------------------------------------------------
 */