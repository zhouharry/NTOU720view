function arrow_show_check()//ensure not go out of boundary
{	
	var direction = "";
	for(var i = 0 ; i < 10;i++){		
		
		//every direction
		switch(i){
			case 0:
				direction = "E";break;
			case 1:
				direction = "S";break;
			case 2:
				direction = "W";break;
			case 3:
				direction = "N";break;
			case 4:
				direction = "NE";break;
			case 5:
				direction = "SE";break;
			case 6:
				direction = "SW";break;
			case 7:
				direction = "NW";break;
			case 8:
				direction = "U";break;
			case 9:
				direction = "D";break;
		}	
		
		arrow_announce(direction);
		//the position what we will go to
		var tmp_position_x = position_x;
		var tmp_position_y = position_y;
		switch(direction){
			case "N":
				tmp_position_y = tmp_position_y-1;break;
			case "S":
				tmp_position_y = tmp_position_y+1;break;
			case "W":
				tmp_position_x = tmp_position_x-1;break;
			case "E":
				tmp_position_x = tmp_position_x+1;break;
			case "NW":
				tmp_position_y = tmp_position_y-1;
				tmp_position_x = tmp_position_x-1;
				break;
			case "SE":
				tmp_position_y = tmp_position_y+1;
				tmp_position_x = tmp_position_x+1;
				break;
			case "NE":
				tmp_position_y = tmp_position_y-1;
				tmp_position_x = tmp_position_x+1;
				break;
			case "SW":
				tmp_position_y = tmp_position_y+1;
				tmp_position_x = tmp_position_x-1;
				break;				
		}
		
		//whether the position  is out of boundary
		if(background_exist(tmp_position_y,tmp_position_x) == false){
			arrow_up.setAttribute('visible', 'false');
			arrow_down.setAttribute('visible', 'false');
		}
		else{
			arrow_up.setAttribute('visible', 'true');
			arrow_down.setAttribute('visible', 'false');
		}
	}

	arrow_updown_show();
	arrow_special_show();

}

function arrow_updown_show()//check whether this position can go upstairs or downstairs
{
	var up_show = false;
	var down_show = false;
	//floor check
	switch(floor_texture[position_y][position_x]){
		case "2F_stairs":
			up_show = true;
			arrow_updown_set("U",3.5,300);
			break;

		case "3F_stairs":
			up_show = true;
			arrow_updown_set("U",5,5);
			down_show = true;
			arrow_updown_set("D",4,315);
			break;	

		case "4F_center":
			down_show = true;			
			arrow_updown_set("D",6,300);
			break;	
		case "4F_2":
			up_show = true;
			arrow_updown_set("U",4.2,50);
			break;
		case "4F_4":
			up_show = true;
			arrow_updown_set("U",4,225);
			break;

		case "5F_green72":	
			down_show = true;			
			arrow_updown_set("D",3,110);
			break;
		case "5F_green106":	
			down_show = true;			
			arrow_updown_set("D",3,170);
			break;

		case "t01":	
			down_show = true;			
			arrow_updown_set("D",3,5);
			break;
		case "t63":	
			up_show = true;			
			arrow_updown_set("U",4,300);
			break;
		case "O2F_con2":	
			up_show = true;			
			arrow_updown_set("U",3.5,120);
			break;
		case "t34":	
			down_show = true;			
			arrow_updown_set("D",5,0);
			break;			
	}
	
	//whether arrow show
	arrow_announce("U");
	if(up_show == true){
		arrow_up.setAttribute('visible', 'true');
		arrow_down.setAttribute('visible', 'false');
	}
	else{
		arrow_up.setAttribute('visible', 'false');	
		arrow_down.setAttribute('visible', 'false');	
	}
	arrow_announce("D");
	if(down_show == true){
		arrow_up.setAttribute('visible', 'true');
		arrow_down.setAttribute('visible', 'false');
	}
	else{
		arrow_up.setAttribute('visible', 'false');	
		arrow_down.setAttribute('visible', 'false');	
	}
}

function special_move(direction)//move to other zone
{
	//3F to annex
	if(direction == "E"){
		if(floor_texture[position_y][position_x] == "3F_con"){
			position_x = 1;
			position_y = 5;
			background_teleport('annex_3F',"O2F_con");
			return true;
		}
	}
	//annex to 3F
	if(direction == "W"){
		if(floor_texture[position_y][position_x] == "O2F_con"){
			position_x = 7;
			position_y = 2;
			background_teleport('3F',"3F_con");
			return true;
		}
	}
	return false;
}

function arrow_special_show()//allow go out of boundary to move to other zone
{
	//3F side with annex
	if(floor_texture[position_y][position_x] == "3F_con"){
		arrow_announce("E");
		arrow_up.setAttribute('visible', 'true');
	}
	//annex side with 3F
	if(floor_texture[position_y][position_x] == "O2F_con"){
		arrow_announce("W");
		arrow_up.setAttribute('visible', 'true');
	}	
}

function arrow_mouse_click(direction)//mouse click function
{	
	arrow_announce(direction);
	
	//avoid check invisible arrow
	if(arrow_up.getAttribute('visible') == true){
		//show arrow is checked
		arrow_up.setAttribute('color', 'red');
		arrow_down.setAttribute('color', 'red');
		
		//move to next background
		if(special_move(direction)== false){//do special_move or do it
			switch(direction){
				case "N":
					position_y-=1;				
					break;
				case "S":
					position_y+=1;
					break;
				case "W":
					position_x-=1;
					break;
				case "E":
					position_x+=1;
					break;
				case "NW":
					position_x-=1;
					position_y-=1;break;
				case "SE":
					position_x+=1;
					position_y+=1;break;
				case "NE":
					position_x+=1;
					position_y-=1;break;
				case "SW":
					position_x-=1;
					position_y+=1;break;
				case "U":
					floor_change("U");break;
				case "D":
					floor_change("D");break;
			}
		}
		background_set();
	}
	arrow_mouse_leave(direction);
}
function arrow_mouse_enter(direction)//mouse enter function
{
	arrow_announce(direction);
	arrow_up.setAttribute('color', '#026fc9');
	arrow_down.setAttribute('color', '#026fc9');
}
function arrow_mouse_leave(direction)//mouse leave function
{
	arrow_announce(direction);
	arrow_up.setAttribute('color', get_color(direction));
	arrow_down.setAttribute('color', get_color(direction));
}

function arrow_announce(direction)//announce assigned direction with function
{
	sceneEl = document.querySelector('a-scene');
	arrow_up = sceneEl.querySelector('#arrow_up_' + direction);
	arrow_down = sceneEl.querySelector('#arrow_down_' + direction);	
}

function arrow_set()//set 3D arrow
{	
	var distance = 4;					//distance to center(cylinder part)
	var direction = "";
	var d_revise = distance-0.2;		//distance to center(box part)
	var d_x,d_y,d_z;					//x-distance,y-distance,z-distance
	var d_x_revise,d_z_revise;			//revise x-distance,z-distance
	var degree;
	var color = "4CC3D9";
	for(var i = 0 ; i < 10;i++){
	
		//every direction
		switch(i){
			case 0:
				direction = "E";
				d_x = distance;
				d_z = 0;
				d_x_revise = d_revise;
				d_z_revise = 0;
				degree = 90;						
				break;
			case 1:
				direction = "S";
				d_x = 0;
				d_z = distance;
				d_x_revise = 0;
				d_z_revise = d_revise;
				degree = 0;
				break;
			case 2:
				direction = "W";
				d_x = -distance;
				d_z = 0;
				d_x_revise = -d_revise;
				d_z_revise = 0;
				degree = 270;				
				break;				
			case 3:
				direction = "N";				
				d_x = 0;
				d_z = -distance;
				d_x_revise = 0;
				d_z_revise = -d_revise;
				degree = 180;
				break;
			case 4:
				direction = "NE";
				d_x = distance/1.4;
				d_z = -distance/1.4;
				d_x_revise = d_revise/1.4;
				d_z_revise = -d_revise/1.4;
				degree = 135;	
				break;
			case 5:
				direction = "SE";
				d_x = distance/1.4;
				d_z = distance/1.4;
				d_x_revise = d_revise/1.4;
				d_z_revise = d_revise/1.4;
				degree = 45;					
				break;
			case 6:
				direction = "SW";
				d_x = -distance/1.4;
				d_z = distance/1.4;
				d_x_revise = -d_revise/1.4;
				d_z_revise = d_revise/1.4;
				degree = 315;
				break;
			case 7:
				direction = "NW";			
				d_x = -distance/1.4;
				d_z = -distance/1.4;
				d_x_revise = -d_revise/1.4;
				d_z_revise = -d_revise/1.4;
				degree = 225;				
				break;
			case 8:
				direction = "U";
				degree = 330;
				break;
			case 9:
				direction = "D";
				degree = 300;			
				break;
		}
		color = get_color(direction);
		d_y = -1;
		
		sceneEl = document.querySelector('a-scene');
		//arrow up part
		var new_arrow_up = document.createElement('a-cylinder');//柱體
		new_arrow_up.setAttribute('segments-radial', '3');//三角柱

		new_arrow_up.setAttribute('material', 'color', color);//顏色
		new_arrow_up.setAttribute('visible', 'true');//顯示
		new_arrow_up.setAttribute('id', 'arrow_up_' + direction);//id
		new_arrow_up.setAttribute('onclick','arrow_mouse_click("'+direction+'")');//mouse click
		new_arrow_up.setAttribute('onmouseenter','arrow_mouse_enter("'+direction+'")');//mouse enter
		new_arrow_up.setAttribute('onmouseleave','arrow_mouse_leave("'+direction+'")');//mouse leave
		sceneEl.appendChild(new_arrow_up);//設置		
		
		
		//arrow down part
		var new_arrow_down = document.createElement('a-box');//立方體

		new_arrow_down.setAttribute('material', 'color', color);//顏色
		new_arrow_down.setAttribute('visible', 'false');//顯示
		new_arrow_down.setAttribute('id', 'arrow_down_' + direction);//id
		new_arrow_down.setAttribute('onclick','arrow_mouse_click("'+direction+'")');//mouse click
		new_arrow_down.setAttribute('onmouseenter','arrow_mouse_enter("'+direction+'")');//mouse enter
		new_arrow_down.setAttribute('onmouseleave','arrow_mouse_leave("'+direction+'")');//mouse leave	
		sceneEl.appendChild(new_arrow_down);//設置			
			
		if(direction == "U")
			arrow_updown_set("U",distance,degree);
		else if(direction == "D")
			arrow_updown_set("D",distance,degree);
		else{		
			//up
			new_arrow_up.setAttribute('scale', '0.4 0.1 1');//放大
			new_arrow_up.setAttribute('position', d_x+' '+d_y+' '+d_z);//位置
			new_arrow_up.setAttribute('rotation', '0 '+degree+' 0');//旋轉
			//down
			new_arrow_down.setAttribute('scale', '0.5 0.3 0.5');//放大
			new_arrow_down.setAttribute('position', d_x_revise+' '+d_y+' '+d_z_revise);//位置
			new_arrow_down.setAttribute('rotation', '0 '+degree+' 0');//旋轉
		}

	}
	
	//compass
		var compass = document.createElement('a-cylinder');//柱體
		sceneEl.appendChild(compass);//設置
		compass.setAttribute('segments-radial', '3');//三角柱
		compass.setAttribute('material', 'color', '#4CC3D9');//顏色
		compass.setAttribute('position', '0 -1 0');//位置
		compass.setAttribute('rotation', '0 180 0');//旋轉
		compass.setAttribute('scale', '0.2 0.2 0.2');//放大
}

function get_color(direction){
	switch(direction){
		case "N":
			return "#99BBFF";
		case "S":
			return "#7744FF";
		case "W":
		case "E":
			return "#0066FF";
		case "NW":
		case "SE":
		case "NE":
		case "SW":
		case "U":
		case "D":
			return "#4CC3D9";	
	}
} 


function arrow_updown_set(direction,distance,degree)//announce up and down arrow
{
	arrow_announce(direction);
	var d_x = distance*Math.sin(2*Math.PI/360*degree)*1.4;
	var d_z = distance*Math.cos(2*Math.PI/360*degree)*1.4;
	var d_y ,d_y_revise ,x_rotate;	
	if(direction == "U"){
		d_y =0.5; d_y_revise = 0 ; x_rotate = -90;
	}
	else{
		d_y = -1; d_y_revise=-0.5; x_rotate =  90;		
	}
		
	//up
	arrow_up.setAttribute('scale', '0.5 0.2 0.7');//放大
	arrow_up.setAttribute('position', d_x+' '+d_y+' '+d_z);
	arrow_up.setAttribute('rotation', x_rotate+' '+degree+' 0');		
	//down
	arrow_down.setAttribute('scale', '0.5 0.3 0.5');//放大
	arrow_down.setAttribute('position', d_x+' '+d_y_revise+' '+d_z);
	arrow_down.setAttribute('rotation', '0 '+degree+' 0');
}