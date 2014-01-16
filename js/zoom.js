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
 	function cargarEventos(){
 		//$("#carga").hide();
		$(".zoom").click(function(){	
			//$("#carga").find("img").attr("src",$(this).find("img").attr("src"));		
			$("#carga").toggle();
			$("#galeria").toggle();			
			$( "#galeria" ).animate({
								    width: "100%",
								    opacity: 0.5			  
								  }, 800 );
			$( "#carga" ).animate({
								    width: "100%",
								    opacity: 1			  
								  }, 800);
		});

		$("#carga").click(function(){	
			$( "#carga" ).animate({
								    width: "0%",
								    opacity: 0								   
								  }, 800 );		
			$( "#galeria" ).animate({
								    width: "0%",
								    opacity: 0								   
								  }, 800 );					
			$("#carga").toggle("slow");
			$("#galeria").toggle("slow");
			
		});

		$("#galeria").click(function(){	
			$( "#carga" ).animate({
								    width: "0%",
								    opacity: 0								   
								  }, 800 );			
			$( "#galeria" ).animate({
								    width: "0%",
								    opacity: 0								   
								  }, 800 );					
			$("#carga").toggle("slow");
			$("#galeria").toggle("slow");
			
		});
	}



/*-----------------------------------------------------------------------------
 *
 *							TRABAJA A PARTIR DE AQUÍ
 *
 *-----------------------------------------------------------------------------
 */