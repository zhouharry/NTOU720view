//邱：修正dropdown menu在螢幕大小改變時會消失的問題----------------
/*$(document).ready(function(){
	$(window).resize(function(){
		var w=$(window).width();
		console.log("w"+w);
		if(w>800){
			$("ul.drop-down-menu li").css('display','inline-block');
			document.getElementById("menu_head").innerHTML = "收起目錄";		
		}
		else{
			$("ul.drop-down-menu li").css('display','none');
			document.getElementById("menu_head").innerHTML = "展開目錄";		
		}
	});
})*/
//邱-----------------end----------------------------------
function menu_show()//whether show menu in mobile
{
	if($("ul.drop-down-menu li").css('display') == "none"){
		$(".menu").animate({width:"15%"});
		$("ul.drop-down-menu li").css('display','block');
		$("ul.drop-down-menu li ul li").css('display','block');
		$(".listbutton").attr('src','Panorama_Figures/school/left-arrow.png');
		//document.getElementById("menu_head").innerHTML = "收起目錄";			
	}
	else{
		$(".menu").animate({width:"0%"});
		$("ul.drop-down-menu li").css('display','none');
		$(".listbutton").attr('src','Panorama_Figures/school/list.png');
		//document.getElementById("menu_head").innerHTML = "展開目錄";
	}
}
function menu_effect_set()//show where we are at zone in menu
{
	$("ul.drop-down-menu a").removeAttr("style");//clear previous effect
	$("#menu_"+floor_number).css("background-color","deepskyblue");//effect on floor
	
	if(floor_number == "sea_school"){
		switch(floor_texture[position_y][position_x]){
			case "g01":
				menu_effect(1);	break;
		}
	}
	
	if(floor_number == "1F"){
		switch(floor_texture[position_y][position_x]){
			case "t62":
				menu_effect(1);	break;
			case "t59":
				menu_effect(2);	break;
		}
	}
	
	if(floor_number == "2F"){
		switch(floor_texture[position_y][position_x]){
			case "2F_4":
				menu_effect(1);	break;
			case "2F_ITS":
				menu_effect(2);	break;
			case "2F_inf":
				menu_effect(3);	break;
			case "2F_ref7":
				menu_effect(4);	break;
			case "2F_AVM2":
				menu_effect(5);	break;
			case "2F_GVR":
				menu_effect(6);	break;
			case "2F_CDR":
				menu_effect(7);	break;
		}
	}
	
	if(floor_number == "3F"){
		switch(floor_texture[position_y][position_x]){
			case "t12":
				menu_effect(1);	break;
			case "3F_center4":
				menu_effect(2);	break;
			case "t29":
				menu_effect(3);	break;
			case "t13":
				menu_effect(4);	break;
			case "3F_VRexpe2":
				menu_effect(5);	break;
		}	
	}
	
	if(floor_number == "4F"){
		switch(floor_texture[position_y][position_x]){
			case "4F_yellow80":
				menu_effect(1);	break;
			case "t85":
				menu_effect(2);	break;
			case "4F_red10":
				menu_effect(3);	break;
		}
	}	
	
	if(floor_number == "5F"){
		switch(floor_texture[position_y][position_x]){
			case "5F_green94":
				menu_effect(1);	break;
		}	
	}		
	
	if(floor_number == "annex_3F"){
		switch(floor_texture[position_y][position_x]){
			case "t31_2":
				menu_effect(1);	break;
		}	
	}

	if(floor_number == "annex_4F"){
		switch(floor_texture[position_y][position_x]){
			case "t37":
				menu_effect(1);	break;
			case "O2F_6":
				menu_effect(2);	break;
			case "t35":
				menu_effect(3);	break;
		}		
	}
}

function menu_effect(number)//show effect with number
{
	$("#menu_"+floor_number+"_"+number).css("background-color","deepskyblue");
}