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
 var top= 0;
 var left= 0;

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

function recargarPosiciones(objeto){
	var pos_obj           = objeto;
  var pos_obj_width     = objeto.outerWidth(true);
  var pos_obj_height    = objeto.outerHeight(true);
  var pos_window_width  = window.innerWidth ? window.innerWidth : $(window).width();
  var pos_window_height = window.innerHeight ? window.innerHeight : $(window).height();
 
  top = ((pos_window_height / 2) - (pos_obj_height / 2))+"px";
  left = ((pos_window_width / 2) - (pos_obj_width / 2))+"px";
}


/*-----------------------------------------------------------------------------
 *
 *							TRABAJA A PARTIR DE AQUÍ
 *
 *-----------------------------------------------------------------------------
 */

jQuery.fn.zoom = function(options) {
	content = $(this);
	content.append('<div id="carga" style="width:0%"><img src="" /></div>');	
  $("body").prepend('<div id="zoom-background-black" style="display:none"></div>');
  $("body").prepend('<div id="zoom-foreground-event" style="display:none"></div>');

		//$("#carga").hide();
	content.find('img').click(function(){
	$("#zoom-background-black").fadeToggle();
	$("#zoom-foreground-event").toggle();
	$("#zoom-foreground-event").unbind();	
	$("body").css({ overflow: "hidden" });
	fotoHeight = $(this).find("img").width();		
	posTop  = $(this).offset().top;
	posLeft = $(this).offset().left;
		
	tope =  ($(window).height()/2) - ($("#carga").height()/2);			

  $("#zoom-foreground-event").click(function(){	
		$( "#carga" ).animate({
						    width: "0%",
						    opacity: 0,
						     top: "+="+top,
						     left: "+="+left
						  }, 300, function(){
						  	$("#carga").toggle();
						  	$("#zoom-foreground-event").toggle();
								$("#zoom-background-black").fadeToggle();							
						  });	
		$("body").css({ overflow: "auto" });		
	});

	$("#carga").find("img").attr("src",$(this).attr("src"));

	//$("#zoom-background-black").css({top: tope+"px"});
	//$("#carga").css({ top: tope+"px" });
	$("#carga").css({ left: posLeft+"px" });
	$("#carga").css({ top: posTop+"px" });
	
	$("#carga").toggle();
	//$("#carga").centerToWindow();(
		recargarPosiciones($(this).find('img'));
	$("#zoom-background-black").centerToWindow();
	$("#zoom-foreground-event").centerToWindow();
	$("#zoom-background-black").css({left: 0});
	$( "#carga" ).animate({
						    width: "100%",
						    opacity: 1,
						    top: "-="+top,
						    left: "-="+left	  
						  }, 900, function(){
						  	$("#zoom-background-black").css({ width: "120%"});
						  	$("#carga").centerToWindow();
						  });

	});
}