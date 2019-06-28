document.onkeydown = function(){
	var keycode = event.which || event.keyCode;
	if(keycode == 87 || keycode == 38){// W/↑
		if(background_exist(position_y-1,position_x) == true)
		{
			arrow_mouse_click("N");
		}
	}
	else if(keycode == 83|| keycode == 40){// S/↓
		if(background_exist(position_y+1,position_x) == true)
		{
			arrow_mouse_click("S");
		}          
	}
	else if(keycode == 65|| keycode == 37){// A/←
		if(background_exist(position_y,position_x-1) == true)
		{
			arrow_mouse_click("W");
		}          
	}
	else if(keycode == 68|| keycode == 39){// D/→
		if(background_exist(position_y,position_x+1) == true)
		{
			arrow_mouse_click("E");
		}  
	}
	else if(keycode == 81){// Q					
		console.log(camera.getAttribute('rotation'));
		console.log(sky.getAttribute('src'));
		console.log(position_x+","+position_y);
		console.log(sky.getAttribute('rotation'));
		console.log(document.body.clientWidth);
	}
}

document.onkeyup = function(){
	var keycode = event.which || event.keyCode;
	arrow_mouse_leave("N");
	arrow_mouse_leave("S");
	arrow_mouse_leave("W");
	arrow_mouse_leave("E");
}	