//mini map size change
$("#mini_map_board").click(function(){
	var min_size = 400;
	var max_size = document.body.clientHeight;

	//choose longer(Width or Height)
	if(document.body.clientHeight >= document.body.clientWidth)
		max_size = document.body.clientWidth;
	else
		max_size = document.body.clientHeight;

	//amplify
	if($("#mini_map_board").css("height") == (min_size+"px")){
		//board
		$("#mini_map_board").animate({width: max_size+"px"});
		$("#mini_map_board").animate({height: max_size+"px"});

		//point
		$("#mini_map_point").animate({width: max_size/2+"px"});
		$("#mini_map_point").animate({height: max_size/2+"px"});
	}
	//shrink
	else{
		//board	
		$("#mini_map_board").animate({width:min_size+"px"});	
		$("#mini_map_board").animate({height:min_size+"px"});

		//point
		$("#mini_map_point").animate({width: min_size/2+"px"});
		$("#mini_map_point").animate({height: min_size/2+"px"});		
	}
});



//mini map show or hide
$("#mini_map_button").click(function(){
	var min_degree = 0;
	var max_degree = 90;
	var text = ["收起","展開"]
	var r = document.getElementById("mini_map_board").style.transform;

	//change from initial
	if(r == "rotate("+max_degree+"deg)"){
		$('#mini_map_board').animate({  borderSpacing: min_degree }, {
			step: function(now,fx) {
			  $(this).css('transform','rotate('+now+'deg)');  
			},
			duration:'slow'
		},'linear');
		document.getElementById("mini_map_button_text").innerHTML = text[0];
	}
	//change to initial
	else{
		$('#mini_map_board').animate({  borderSpacing: max_degree }, {
			step: function(now,fx) {
			  $(this).css('transform','rotate('+now+'deg)');  
			},
			duration:'slow'
		},'linear');
		document.getElementById("mini_map_button_text").innerHTML = text[1];
	}		
});


function mini_map_posiotion_set(){//position in mini map
	var p_x,p_y;
	if(floor_number == "B1F"){		
		switch(position_x)
		{
			case 1:
			  p_x = 22;break;
			case 2:
			  p_x = 35;break;
			case 3:
			  p_x = 50;break;
		}
		switch(position_y)
		{
			case 1:
			  p_y = 27;break;			
			case 2:
			  p_y = 50;break;
			case 3:
			  p_y = 70;break; 
			case 4:
			  p_y = 82;break;				  
		}
	}	
	
	if(floor_number == "1F"){		
		switch(position_x)
		{
			case 1:
			  p_x = 35;break;
			case 2:
			  p_x = 42;break;
			case 3:
			  p_x = 48;break;
			case 4:
			  p_x = 53;break;
			case 5:
			  p_x = 58;break;
			case 6:
			  p_x = 63;break;
			case 7:
			  p_x = 68;break;
			case 8:
			  p_x = 73;break;
		}
		switch(position_y)
		{
			case 1:
			  p_y = 30;break;			
			case 2:
			  p_y = 35;break;
			case 3:
			  p_y = 40;break; 
			case 4:
			  p_y = 45;break;	
			case 5:
			  p_y = 53;break;
			case 6:
			  p_y = 58;break;			  
		}
	}	
	
	if(floor_number == "2F"){
		switch(position_x)
		{
			case 1:
			  p_x = 20;break;
			case 2:
			  p_x = 34;break;
			case 3:
			  p_x = 52;break;
			case 4:
			  p_x = 58;break;
			case 5:
			  p_x = 70;break;
			case 6:
			  p_x = 78;break;
		}
		switch(position_y)
		{
			case 1:
			  p_y = 10;break;			
			case 2:
			  p_y = 15;break;
			case 3:
			  p_y = 30;break; 
			case 4:
			  p_y = 45;break;	
			case 5:
			  p_y = 55;break;
			case 6:
			  p_y = 68;break;
		}
	}
	
	if(floor_number == "3F"){

		switch(position_x)
		{
			case 1:
			  p_x = 15;break;
			case 2:
			  p_x = 28;break;
			case 3:
			  p_x = 40;break;
			case 4:
			  p_x = 48;break;
			case 5:
			  p_x = 58;break;
			case 6:
			  p_x = 70;break;
			case 7:
			  p_x = 85;break;			  
		}
		switch(position_y)
		{
			case 1:
			  p_y = 9;break;
			case 2:
			  p_y = 20;break;
			case 3:
			  p_y = 35;break; 
			case 4:
			  p_y = 45;break;	
			case 5:
			  p_y = 54;break;
			case 6:
			  p_y = 67;break;
			case 7:
			  p_y = 78;break;			  
		}
	}
	
	if(floor_number == "4F"){
		switch(position_x)
		{
			case 1:
			  p_x = 11;break;
			case 2:
			  p_x = 23;break;
			case 3:
			  p_x = 34;break;
			case 4:
			  p_x = 40;break;
			case 5:
			  p_x = 48;break;
			case 6:
			  p_x = 56;break;
			case 7:
			  p_x = 63;break;
			case 8:
			  p_x = 70;break;
			case 9:
			  p_x = 82;break;
			  
		}
		switch(position_y)
		{
			case 1:
			  p_y = 8;break;
			case 2:
			  p_y = 20;break;
			case 3:
			  p_y = 28;break; 
			case 4:
			  p_y = 34;break;	
			case 5:
			  p_y = 42;break;
			case 6:
			  p_y = 50;break;
			case 7:
			  p_y = 59;break;
			case 8:
			  p_y = 68;break;
			case 9:
			  p_y = 80;break;			  
		}
	}
	
	if(floor_number == "5F"){		
		switch(position_x)
		{
			case 1:
			  p_x = 11;break;
			case 2:
			  p_x = 23;break;
			case 3:
			  p_x = 34;break;
			case 4:
			  p_x = 40;break;
			case 5:
			  p_x = 48;break;
			case 6:
			  p_x = 56;break;
			case 7:
			  p_x = 63;break;
			case 8:
			  p_x = 70;break;
			case 9:
			  p_x = 82;break;
			  
		}
		switch(position_y)
		{
			case 1:
			  p_y = 8;break;
			case 2:
			  p_y = 20;break;
			case 3:
			  p_y = 28;break; 
			case 4:
			  p_y = 34;break;	
			case 5:
			  p_y = 42;break;
			case 6:
			  p_y = 50;break;
			case 7:
			  p_y = 59;break;
			case 8:
			  p_y = 68;break;
			case 9:
			  p_y = 80;break;
		}
	}
	
	if(floor_number == "annex_3F"){
		switch(floor_texture[position_y][position_x]){
			case "O2F_con":
				p_x = 45;p_y = 85;break;
			case "O2F_con2":
				p_x = 45;p_y = 75;break;
			case  "t30_2":
				p_x = 42;p_y = 72;break;
			case  "t31_2":
				p_x = 35;p_y = 75;break;
			case  "t32_2":
				p_x = 28;p_y = 80;break;
			case  "t33_2":
				p_x = 20;p_y = 85;break;
		}
	}

	if(floor_number == "annex_4F"){
		switch(floor_texture[position_y][position_x]){
			case  "t34":
				p_x = 40;p_y = 25;break;	
			case  "O2F_9":
				p_x = 42;p_y = 28;break;
			case  "O2F_8":
				p_x = 39;p_y = 22;break;
			case  "t35":
				p_x = 51;p_y = 28;break;
			case  "t36":
				p_x = 51;p_y = 23;break;
			case  "O2F_7":
				p_x = 48;p_y = 19;break;
			case  "t37":
				p_x = 45;p_y = 12;break;
			case  "t38":
				p_x = 36;p_y = 15;break;
			case  "O2F_6":
				p_x = 32;p_y = 25;break;
			case  "O2F_1":
				p_x = 29;p_y = 19;break;
			case  "O2F_5":
				p_x = 25;p_y = 30;break;
			case  "O2F_2":
				p_x = 20;p_y = 24;break;
			case  "O2F_4":
				p_x = 15;p_y = 37;break;
			case  "O2F_3":
				p_x = 10;p_y = 30;break;
		}
	}
	var revise = 24;
	/*小地圖的現在位置的座標點，是以現在位置的圖片左上角為準，而非中心，因此用revise修正，將圖片中心移為座標點
	  現在位置的圖片的長寬，預設各為小地圖的1/2，如果有更動，請修改revise值*/
	if(p_x){
		$(mini_map_point).css('top',(p_y-revise)+"%");
		$(mini_map_point).css('left',(p_x-revise)+"%");
	}
}