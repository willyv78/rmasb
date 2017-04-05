$(document).ready(function(){
	$("#section0").waypoint(function() {
	},
	{
		offset: '100%',
		triggerOnce: true
	});
	//========================================
	$("#section1").waypoint(function() {
	},
	{
		offset: '99%',
		triggerOnce: true
	});
	//========================================
	// $("#section2").waypoint(function() {
	// 	$("#section2").load("section2.html");
	// },
	// {
	// 	offset: '100%',
	// 	triggerOnce: true
	// });
	// $("#icono_arquitectura").on("click",function(){
	// 	//alert("aca");
	// 	$("#section2").load("section2.html");
	// });
	// $(".icono_arquitectura").on("click",function(){
	// 	//alert("aca");
	// 	$("#section2").load("section2.html");
	// });
	//=========================================
	$("#link_diseno").on("click",cargaStage);
	$("#icono_diseno").on("click",cargaStage);
	function cargaStage(){
		$("#prueba_animacion").load("disenografico.html");
	}
});