var position_x;
var position_y;
var sceneEl;
var sky;
var arrow_up;
var arrow_down;
var floor_name;
var pos_name;
function start()
{
	//get param
	floor_name = UrlParam.param("floor");
	pos_name = UrlParam.param("pos");
	/*arrow_set();*/
	//floor_set("enterance");
    background_teleport(floor_name, pos_name);
	//arrow_2D_set();
	window.setInterval(get_view_degree, 50); 
}


function showalert() 
{ 
	console.log("???"); 
} 

/*function arrow_2D_set()
{
	$("#arrow2D_button").click(function(){
		var show = "block";
		var text =["關閉2D箭頭","開啟2D箭頭"];
		var html_text = document.getElementById("arrow2D_button_text").innerText;
		
		if(html_text == text[0]){
			document.getElementById("arrow2D_button_text").innerHTML = text[1];
			show = "none";			
		}
		else{
			document.getElementById("arrow2D_button_text").innerHTML = text[0];
			show = "block";
		}
		
		for(var i = 0;i < 12;i ++){
			$("#arrow"+i).css('display',show);
		}
	});
}*/
function get_view_degree()
{	
	if(floor_number == "sea_school" ||floor_number == "annex_4F")	{
		$("#mini_map_point").css('transform','rotate(-'+get_degree(camera.getAttribute('rotation').y+225)+'deg)');
	}
	else{
		$("#mini_map_point").css('transform','rotate(-'+get_degree(camera.getAttribute('rotation').y)+'deg)');
	}

	$("#arrow0").css('transform','rotate(-'+get_degree(camera.getAttribute('rotation').y)+'deg)');
}
function get_degree(degree)//ensure degree is in range(0~360)
{
	//keep 0~360
	while(degree < 0)
		degree += 360;
	while(degree > 360)
		degree -= 360;
	return degree;
}

window.addEventListener( "load", start, false );