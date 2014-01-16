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
 		$("#carga").hide();
		$(".zoom").click(function(){	
			$("#carga").find("img").attr("src",$(this).find("img").attr("src"));		
			$("#carga").toggle();			
			$( "#carga" ).animate({
								    width: "100%",
								    opacity: 1,
								    marginLeft: "0.6in",
								    fontSize: "3em",
								    borderWidth: "10px"
								  }, 1500 );
		});

		$("#carga").click(function(){			
			$("#carga").toggle("slow");
		});

	}



/*-----------------------------------------------------------------------------
 *
 *							TRABAJA A PARTIR DE AQUÍ
 *
 *-----------------------------------------------------------------------------
 */