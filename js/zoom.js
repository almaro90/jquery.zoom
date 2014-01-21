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
 // variables con las posiciones iniciales del div
 // las usaremos tanto para mostrar la primera vez el div de carga y empezar su animación
 // como para que cuando esté recogiendo el div termine en esa posición.
 var iniTop = 0;
 var iniLeft = 0; 

 // variables con las posiciones finales del div
 var finTop = 0;
 var finLeft = 0;


$.fn.getTopCenter = function(){
  var obj           = $(this);  
  var obj_height    = $(this).outerHeight(true);
    var window_height = window.innerHeight ? window.innerHeight : $(window).height();
  return ((window_height / 2) - (obj_height / 2));
}


$.fn.getLeftCenter = function(){
  var obj           = $(this);
  var obj_width     = $(this).outerWidth(true); 
  var window_width  = window.innerWidth ? window.innerWidth : $(window).width(); 
  return ((window_width / 2) - (obj_width / 2));
}


jQuery.fn.zoom = function(options) {
	content = $(this);
	content.append('<div id="carga"><img src="" /></div>');	
  $("body").prepend('<div id="zoom-background-black" style="display:none"></div>');
  $("body").prepend('<div id="zoom-foreground-event" style="display:none"></div>');


	content.find('img').click(function(){
	$("#zoom-background-black").fadeToggle();
	$("#zoom-foreground-event").toggle();
	$("#zoom-foreground-event").unbind();	
	$("body").css({ overflow: "hidden" });
	 iniTop = $(this).parent().offset().top;
	 iniLeft = $(this).parent().offset().left;	
	

  $("#zoom-foreground-event").click(function(){	
  		$("#carga img").animate({
							 width: "300px",
							 minHeight: "150px"
							},400)	;	

		$( "#carga" ).animate({						    					   
						     visibility: "hidden",
						     top: iniTop,
						     left: iniLeft
						  }, 400, function(){
						  	$("#carga").css({ visibility: "hidden" });
						  	$("#zoom-foreground-event").toggle();
							$("#zoom-background-black").fadeToggle();							
						  });	
		$("body").css({ overflow: "auto" });		
	});

	$("#carga").find("img").attr("src",$(this).attr("src"));

	// Volvemos a poner el div carga a su estado original para situarlo encima de la imagen
	// ahora colocamos el div con el tamaño y posición encima del div pinchado
	// luego lo animaremos para colocarlo en medio de la pantalla
	$("#carga").css({ width: "0px" });
	$("#carga").css({ top: iniTop+"px" });
	$("#carga").css({ left: iniLeft+"px" });	

	$("#carga").css({ width: "100%" });
	$("#carga img").css({ width: "100%" });

	finTop =  ((($("#zoom-background-black").outerHeight() - $("#carga").find('img').outerHeight()) / 2) + $(window).scrollTop());
	finLeft =  $(this).parent().getLeftCenter();
	
	/* obtener este valor al principio y parametrizarlo */
	$("#carga").css({ width: "300px" });
	$("#carga img").css({ width: $(this).width() });
	$("#carga img").css({ minHeight: $(this).height() });
	$("#carga img").css({ height: $(this).height() });
	

	$("#carga").css({ visibility: "visible" });
	$("#zoom-background-black").css({ top: $(document).scrollTop() });
	$("#zoom-foreground-event").css({ top: $(document).scrollTop() });
	$("#zoom-background-black").css({left: 0});

	// Animáción del Div CARGA y de la IMAGEN
	
	$("#carga img").animate({
							 width: "50%",
							 minHeight: "400px"
							},900)	;	
	$( "#carga" ).animate({	
							position: "absolute",
						    width: "100%",	    
						    top:  finTop,
						    left: 0						   
						  }, 900, function(){
						  	$("#zoom-background-black").css({ width: "120%"});						  	
						  });
	});
}