var floor_number = " ";
var floor_texture;
var enterance_position_x = 7;
var enterance_position_y = 4;

function background_set()
{	
	//document.getElementById("infor_button_text").innerHTML = "移動中";
	announce_to_map();
	sky.setAttribute('src','#'+floor_texture[position_y][position_x]);//set background where this is	
	//arrow_show_check();//show arrow that we can move on
	mini_map_posiotion_set();//show now posiotion in mini map
	menu_effect_set();//show where we are in menu
	information_set();
	get_view_degree();
	//document.getElementById("infor_button_text").innerHTML = "資訊";
}

function background_teleport(floor,name)//move to specified location
{
	switch(floor){	
		/*case "2F":
		  Floor = Object.create(floor_2F);break;
		case "3F":
		  Floor = Object.create(floor_3F);break;			
		case "4F":
		  Floor = Object.create(floor_4F);break;
		case "5F":
		  Floor = Object.create(floor_5F);break;
		case "1F":
		  Floor = Object.create(floor_1F);break;
		case "B1F":
		  Floor = Object.create(floor_B1F);break;				  
		case "annex_3F":
		  Floor = Object.create(floor_annex_3F);break;			
		case "annex_4F":
		  Floor = Object.create(floor_annex_4F);break;*/
		case "Xiangfeng_school":
		  Floor = Object.create(floor_Xiangfeng_school);break;
		case "sea_school":
		  Floor = Object.create(floor_sea_school);break;
		case "engineering_school":
		  Floor = Object.create(floor_engineering_school);break;
	}
	console.log(floor);
	console.log(name);
	for(var i = 0 ; i< Floor.width ; i ++){
		for(var j = 0 ; j< Floor.height ; j ++){
		    /*原本:if(Floor.map[i][j] == name)*/
			if(Floor.map[j][i] == name){   /*周:修改檢查陣列變數使其正確對應'*/
				load_map_data(name);
				floor_set(floor);
			    /*原本:position_x = j;
			    position_y = i;*/
				position_x = i;
				position_y = j;
				background_set();				
				return true;
			}
		}
	}
	return false;
}

function background_exist(t_position_y,t_position_x)//check whether there is background
{	
	if(floor_texture[t_position_y][t_position_x])
		return true;
	else if(floor_texture[t_position_y][t_position_x] == "")
		return false;
	else
		return true;
}

/*function floor_change(direction)
{		
	switch(floor_texture[position_y][position_x]){
		//2F
		case "2F_stairs":
			if(direction == "U")
				floor_set("3F");
		break;
		case "t01":
			if(direction == "D")
				background_teleport("1F","t63");
		break;
		
		//3F
		case "3F_stairs":
			if(direction == "D")
				floor_set("2F");
			else if(direction == "U")
				floor_set("4F");
		break;
	
		//4F
		case "4F_center":
			if(direction == "D")
				floor_set("3F");
		break;
		case "4F_2":
			if(direction == "U")
				floor_set("5F");
		break;
		case "4F_4":
		if(direction == "U")
			background_teleport("5F","5F_green106");
		break;
	
		//5F
		case "5F_green72":
			if(direction == "D")
				background_teleport("4F","4F_2");
		break;
		case "5F_green106":
			if(direction == "D")
				background_teleport("4F","4F_4");
		break;

		//1F
		case "t63":
			if(direction == "U")
				background_teleport("2F","t01");
		break;
	
		//annex_3F
		case "O2F_con2":
			if(direction == "U")
				floor_set("annex_4F");
		break;
	
		//annex_4F
		case "t34":
			if(direction == "D")
				floor_set("annex_3F");
		break;
	}
}*/

function floor_set(floor)
{
	announce_to_map();
	var Floor;
	var mini_map_texture;
	
	switch(floor){
		case "enterance":break;	
		/*case "2F":
		  Floor = Object.create(floor_2F);break;
		case "3F":
		  Floor = Object.create(floor_3F);break;			
		case "4F":
		  Floor = Object.create(floor_4F);break;
		case "5F":
		  Floor = Object.create(floor_5F);break;
		case "1F":
		  Floor = Object.create(floor_1F);break;
		case "B1F":
		  Floor = Object.create(floor_B1F);break;				  
		case "annex_3F":
		  Floor = Object.create(floor_annex_3F);break;			
		case "annex_4F":
		  Floor = Object.create(floor_annex_4F);break;*/
		case "Xiangfeng_school":
		  Floor = Object.create(floor_Xiangfeng_school);break;
		case "sea_school":
		  Floor = Object.create(floor_sea_school);break;
		case "engineering_school":
		  Floor = Object.create(floor_engineering_school);break;
	}

	if(floor == "enterance"){
		mini_map_texture = document.getElementById("compass");
		position_x = enterance_position_x;
		position_y = enterance_position_y;
		//console.log(position_x)
		//console.log(position_y)
	}
	else{
		mini_map_texture = document.getElementById("compass");
		position_x = Floor.stairs_position_x;
		position_y = Floor.stairs_position_y;		
	}

	floor_number = Floor.floor_number;
	floor_texture = Floor.map;
	$("#mini_map_board").css('background-image','url('+mini_map_texture.getAttribute('src')+')'); 	
	background_set();	
}

function announce_to_map()//announce with function
{
	sceneEl = document.querySelector('a-scene');
	sky = sceneEl.querySelector('#sky');
}


var floor_Xiangfeng_school = {
	floor_number:"Xiangfeng_school",
	stairs_position_x: 4,
	stairs_position_y: 3,
	width: 5,
	height: 5,
	map:[
	    [   "",    "", "p22",    "", "p21"],
	    [   "",    "",    "",    "",    ""],
	    ["p25",    "", "p17",    "",    ""],
	    [   "",    "",    "", "p19", "p20"],
	    ["p15", "p16", "p18",    "",    ""]
	    ],
};

var floor_sea_school = {
    floor_number:"sea_school",
    stairs_position_x: 7,
    stairs_position_y: 4,
    width: 10,
    height: 5,
    map:[
        [   "",    "", "g08", "", "",      "",    "" , "g07", "",   "g02"],
        [   "",    "", "p10", "", "",      "",    "" ,    "", "", "p23_2"],
        [   "",    "", "g09", "", "", "p11_2", "p12" , "p13", "",      ""],
        ["p07", "p08", "p09", "", "",      "",    "" , "p14", "",      ""],
        [   "", "g10",    "", "", "",      "",    "" , "g01", "",      ""]
        ],
};

var floor_engineering_school = {
	floor_number:"enginering_school",
	stairs_position_x: 3,
	stairs_position_y: 1,
	width: 8,
	height: 3,
	map:[
	    ["", "",    "",    "", "", "", "", ""],
	    ["", "", "p27", "p26", "", "", "", ""],
	    ["", "",    "",    "", "", "", "", ""]
	    ],
};
/*var floor_2F = {
	floor_number: "2F",
	stairs_position_x: 4,
	stairs_position_y: 5,
	width: 8,
	height: 8,
	map:[
		["",       "",       "",         "",       "",       "",       "",""],
		["",       "", "2F_GVR",         "",       "",       "", "2F_CDR",""],
		["",       "","2F_inf3",      "t08","2F_inf2","2F_ref3","2F_ref1",""],
		["","2F_AVM2","2F_inf4",      "t07", "2F_inf","2F_ref7","2F_ref2",""],
		["",       "",   "2F_2",      "t06", "2F_ITS",    "t05",       "",""],
		["",       "",  "t09_2","2F_stairs",   "2F_4",       "",       "",""],	
		["",    "t04",    "t03",      "t02",    "t01",       "",       "",""],
		["",       "",       "",         "",       "",       "",       "",""]
		],
};
var floor_3F = {
	floor_number: "3F",
	stairs_position_x: 4,
	stairs_position_y: 4,
	width: 9,
	height: 9,
	map:[
		["",          "",          "",          "",          "",          "",          "",          "",""],
		["",      "3F_1",          "",          "","3F_VRexpe2",          "","3F_study09","3F_study10",""],
		["",          "","3F_center6",       "t27","3F_center7",       "t20","3F_center1",    "3F_con",""],
		["",       "t82",       "t29",          "",       "t19",          "",       "t21",       "t83",""],
		["",       "t18","3F_center5",       "t14", "3F_stairs",       "t22","3F_center2","3F_study11",""],
		["","3F_study07",       "t13",          "",       "t11",          "",       "t24",       "t25",""],
		["",       "t16","3F_center4",       "t12","3F_center3",       "t23","3F_center8",          "",""],
		["","3F_study05",       "t17","3F_study04",       "t15","3F_study01",          "",          "",""],
		["",          "",          "",          "",          "",          "",          "",          "",""]
		],
};

var floor_4F = {
	floor_number: "4F",
	stairs_position_x: 5,
	stairs_position_y: 5,
	width: 11,
	height: 11,
	map:[
		["",         "",           "",           "",           "",           "",           "",           "",           "",         "",""],
		["",         "",           "",           "",           "",           "", "4F_study10",  "4F_study9",           "","4F_study8",""],
		["",         "",       "4F_2",     "4F_OR2",      "4F_OR",   "4F_red13",   "4F_red10",   "4F_red07",        "t85",      "t47",""],
		["",      "t43","4F_yellow20",        "t84",           "",           "",           "",           "","4F_yellow40",         "",""],
		["",         "","4F_yellow16",           "",        "t42",           "",           "",           "","4F_yellow44",         "",""],
		["",         "","4F_yellow12",           "",           "",  "4F_center",           "",           "","4F_yellow48","4F_study7",""],
		["","4F_study2","4F_yellow08",           "",           "",           "",        "t40",           "","4F_yellow52",         "",""],
		["",         "","4F_yellow04",           "",           "",           "",           "",        "t41","4F_yellow56","4F_study6",""],
		["",      "t44","4F_yellow80","4F_yellow76","4F_yellow72","4F_yellow68","4F_yellow64","4F_yellow60",       "4F_4",         "",""],
		["","4F_study3",        "t45",           "",  "4F_study4",           "",  "4F_study5",           "",           "",     "4F_1",""],
		["",         "",           "",           "",           "",           "",           "",           "",           "",         "",""]
		],
};

var floor_5F = {
	floor_number: "5F",
	stairs_position_x: 2,
	stairs_position_y: 5,
	width: 10,
	height: 11,
	map:[
		["",          "",          "",             "",           "",           "",           "",           "",          "",         "",""],
		["",          "",          "",             "",  "5F_study1",           "",           "",  "5F_study2",          "","5F_study3",""],
		["",          "",       "t48",         "5F_1",  "5F_blue62",  "5F_blue56",  "5F_blue50",  "5F_blue42", "5F_blue34","5F_study4",""],
		["","5F_study11","5F_green64",             "",           "",           "",           "",           "","5F_green16",         "",""],
		["",       "t49","5F_green68",             "",           "",           "",           "",           "","5F_green12","5F_study5",""],
		["",          "","5F_green72",             "",           "",           "",           "",           "","5F_green08",         "",""],
		["","5F_study10","5F_green76",             "",           "",           "",           "",           "","5F_green04","5F_study6",""],
		["",          "","5F_green80",             "",           "",           "",           "",           "","5F_green01",         "",""],
		["",       "t51","5F_green94",   "5F_green98","5F_green102","5F_green106","5F_green110","5F_green114",      "5F_2",         "",""],
		["", "5F_study9",       "t52",             "",  "5F_study8",        "t53",           "",  "5F_study7",          "",         "",""],
		["",          "",          "",             "",           "",           "",           "",           "",          "",         "",""]
		],
};

var floor_1F = {
	floor_number: "1F",
	stairs_position_x: 2,
	stairs_position_y: 5,
	width: 10,
	height: 8,
	map:[
		["",   "",   "",   "",   "",   "",   "",   "",   "",   ""],
		["","t55",   "",   "",   "",   "",   "",   "",   "",   ""],
		["","t56",   "",   "",   "",   "",   "",   "",   "",   ""],
		["","t57",   "",   "",   "",   "",   "",   "",   "",   ""],
		["","t58",   "",   "",   "",   "",   "",   "",   "",   ""],
		["","t59","t60","t61","t62","t63",   "",   "",   "",   ""],
		["",   "",   "",   "",   "","t64","t67","t68","t69",   ""],
		["",   "",   "",   "",   "",   "",   "",   "",   "",   ""]
		],
};

var floor_B1F = {
	floor_number: "B1F",
	stairs_position_x: 3,
	stairs_position_y: 4,
	width: 5,
	height: 6,
	map:[
		["",   "",   "",   "",   ""],
		["","t75","t76","t77",   ""],
		["","t73","t72","t78",   ""],
		["","t81","t80","t79",   ""],
		["",   "",   "","t71",   ""],
		["",   "",   "",   "",   ""]
		],
};
var floor_annex_3F = {
	floor_number: "annex_3F",
	stairs_position_x: 2,
	stairs_position_y: 5,
	width: 4,
	height: 7,
	map:[
		["",       "",        "",""],
		["",       "",   "t33_2",""],
		["",       "",   "t32_2",""],
		["",       "",   "t31_2",""],
		["",       "",   "t30_2",""],
		["","O2F_con","O2F_con2",""],
		["",       "",        "",""]
		],
};

var floor_annex_4F = {
	floor_number: "annex_4F",
	stairs_position_x: 2,
	stairs_position_y: 4,
	width: 6,
	height: 7,
	map:[
		["",     "",   "",     "",     "",""],
		["",     "",   "","O2F_4","O2F_3",""],
		["",     "",   "","O2F_5","O2F_2",""],
		["",     "",   "","O2F_6","O2F_1",""],
		["","O2F_9","t34","O2F_8",  "t38",""],
		["",  "t35","t36","O2F_7",  "t37",""],
		["",     "",   "",     "",     "",""]
		],
};*/
