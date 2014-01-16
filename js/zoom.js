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

 	function cargarEventos(){
 		//$("#carga").hide();
		$(".zoom").click(function(){
			posTop = $(this).offset().top;
			posLeft = $(this).offset().left;
			console.log(posLeft);
		    $("body").prepend('<div id="zoom-background-black"></div>');
			$("#carga").find("img").attr("src",$(this).find("img").attr("src"));

			
			
			$("#carga").css({ top: posTop+"px" });
			$("#carga").css({ left: posLeft+"px" });
			
			$("#carga").toggle();
			
			$( "#carga" ).animate({
								    width: "100%",
								    opacity: 1,
								    top: "-="+posTop,
								    left: "-="+posLeft	  
								  }, 500);
		});

		$("#carga").click(function(){	
			$( "#carga" ).animate({
								    width: "0%",
								    opacity: 0,
								     top: "+="+posTop,
								     left: "+="+posLeft
								  }, 300, function(){
								  	$("#carga").toggle();
									$("#zoom-background-black").remove();
								  });
		});

		$("#zoom-background-black").click(function(){	
			$( "#carga" ).animate({
								    width: "0%",
								    opacity: 0,
								     top: "+="+posTop,
								     left: "+="+posLeft
								  }, 300, function(){
								  	$("#carga").toggle();
									$("#zoom-background-black").remove();
								  });			
		});

		
	}



/*-----------------------------------------------------------------------------
 *
 *							TRABAJA A PARTIR DE AQUÍ
 *
 *-----------------------------------------------------------------------------
 */