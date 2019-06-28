class Data {
	constructor() {
		this.id = new Array(); 
		this.src = new Array(); 
		this.count = 0;	
	}
	set(id,src){
		this.id[this.count] = id;
		this.src[this.count] = src;
		this.count++;
	}
	get_id(i){
		return this.id[i];
	}
	get_src(i){
		return this.src[i];
	}
	get_count(i){
		return this.count;
	}
}
function load_map_data(name)
{
		//announce and set data
	var date = new Data();	
	data_set(date, name);	
	//input data into html
	for(var i = 0; i< date.get_count(); i++){
		sceneEl = document.querySelector('a-assets');
		var assets = document.createElement('img');
		sceneEl.appendChild(assets);
		assets.setAttribute('crossorigin', 'anonymous');
		assets.setAttribute('id', date.get_id(i));
		assets.setAttribute('src', date.get_src(i));
	}
	
	//print_progress_rate(0);
	//sceneEl.removeChild(assets);//delete data from html
	
}
function data_set(date, name){
	switch(name){
		//祥豐校區
		case "g02" :
		    date.set("g02", "Panorama_Figures/school/g02.jpg");break;
		case "g03" :
		    date.set("g03", "Panorama_Figures/school/g03.jpg");break;
		case "g04" :
		    date.set("g04", "Panorama_Figures/school/g04.jpg");break;
		case "g05" :
		    date.set("g05", "Panorama_Figures/school/g05.jpg");break;
		case "g06" :
		    date.set("g06", "Panorama_Figures/school/g06.jpg");break;
		case "p15" :
		    date.set("p15", "Panorama_Figures/school/p15.jpg");break;
		case "p16" :
		    date.set("p16", "Panorama_Figures/school/p16.jpg");break;
		case "p17" :
		    date.set("p17", "Panorama_Figures/school/p17.jpg");break;
		case "p18" :
		    date.set("p18", "Panorama_Figures/school/p18.jpg");break;
		case "p19" :
		    date.set("p19", "Panorama_Figures/school/p19.jpg");break;
		//case "p20" :
		//    date.set("p20", "Panorama_Figures/school/p20.jpg");break;
		case "p21" :
		    date.set("p21", "Panorama_Figures/school/p21.jpg");break;
		case "p22" :
		    date.set("p22", "Panorama_Figures/school/p22.jpg");break;
		case "p24" :
		    date.set("p24", "Panorama_Figures/school/p24.jpg");break;
		case "p25" :
		    date.set("p25", "Panorama_Figures/school/p25.jpg");break;
		case "p28" :
		    date.set("p28", "Panorama_Figures/school/p28.jpg");break;
		//濱海校區
		case "p07" :
		    date.set("p07", "Panorama_Figures/school/p07.jpg");break;
		case "p08" :
		    date.set("p08", "Panorama_Figures/school/p08.jpg");break;
		case "p09" :
		    date.set("p09", "Panorama_Figures/school/p09.jpg");break;
		case "p11_2" :
		    date.set("p11_2", "Panorama_Figures/school/p11_2.jpg");break;
		case "p12" :
		    date.set("p12", "Panorama_Figures/school/p12.jpg");break;
		case "p13" :
		    date.set("p13", "Panorama_Figures/school/p13.jpg");break;
		case "p14" :
		    date.set("p14", "Panorama_Figures/school/p14.jpg");break;
		case "p10" :
		    date.set("p10", "Panorama_Figures/school/p10.jpg");break;
		case "g09" :
		    date.set("g09", "Panorama_Figures/school/g09.jpg");break;
		case "g08" :
		    date.set("g08", "Panorama_Figures/school/g08.jpg");break;
		case "g07" :
		    date.set("g07", "Panorama_Figures/school/g07.jpg");break;
		case "g10" :
		    date.set("g10", "Panorama_Figures/school/g10.jpg");break;
		case "p23_2" :
		    date.set("p23_2", "Panorama_Figures/school/p23_2.jpg");break;
		//工學院
		/*case "p26" :
		    date.set("p26", "Panorama_Figures/school/p26.jpg");break;*/
		case "p27" :
		    date.set("p27", "Panorama_Figures/school/p27.jpg");break;
        //B1F
        /*case "t79":
            date.set("t79","Panorama_Figures/B1/t79.jpg");break;
        case "t80":
	        date.set("t80","Panorama_Figures/B1/t80.jpg"); break;
		//1F
		case "t55":
		    date.set("t55","Panorama_Figures/1F/t55.jpg");break;
		case "t59":
            date.set("t59","Panorama_Figures/1F/t59.jpg");break;
        case "t62":
            date.set("t62","Panorama_Figures/1F/t62.jpg");break;
        case "t63":
	        date.set("t63","Panorama_Figures/1F/t63.jpg");break;
		//2F
		case "2F_inf":
		    date.set("2F_inf","Panorama_Figures/2F/2F_inf.jpg");break;
		case "2F_ref2":
		    date.set("2F_ref2","Panorama_Figures/2F/2F_ref2.jpg");break;
		case "2F_ref7":
		    date.set("2F_ref7","Panorama_Figures/2F/2F_ref7.jpg");break;
		case "2F_GVR":
		    date.set("2F_GVR","Panorama_Figures/2F/2F_groupViewingRoom.jpg");break;//2F_groupViewingRoom 
		case "2F_AVM2":
		    date.set("2F_AVM2","Panorama_Figures/2F/2F_audioVisualMaterials2.jpg");break;//2F_audioVisualMaterials2
		case "2F_ITS":
		    date.set("2F_ITS","Panorama_Figures/2F/2F_interactiveTouchSystem.jpg");break;//2F_interactiveTouchSystem
		case "t02":
		    date.set("t02","Panorama_Figures/2F/t02.jpg");	break;
		case "t05":
		    date.set("t05","Panorama_Figures/2F/t05.jpg");break;
		case "t09_2":
		    date.set("t09_2","Panorama_Figures/2F/t09_2.jpg");break;
		case "2F_CDR":
		    date.set("2F_CDR","Panorama_Figures/2F/2F_cornerDiscussionRoom.jpg");break;//2F_cornerDiscussionRoom
		//3F
		case "3F_center4":
		    date.set("3F_center4","Panorama_Figures/3F/3F_center4.jpg");break;
		case "3F_center8":
		    date.set("3F_center8","Panorama_Figures/3F/3F_center8.jpg");break;
		case "3F_VRexpe2":
	        date.set("3F_VRexpe2","Panorama_Figures/3F/3F_VRexperienceShowroom2.jpg");break;
        case "t12":
            date.set("t12","Panorama_Figures/3F/t12.jpg");break;
        case "t13":
	        date.set("t13","Panorama_Figures/3F/t13.jpg");break;
	    case "t20":
            date.set("t20","Panorama_Figures/3F/t20.jpg");break;
        case "t29":
            date.set("t29","Panorama_Figures/3F/t29.jpg");break;
        //4F
        case "4F_4":
            date.set("4F_4","Panorama_Figures/4F/4F_4.jpg");break;
        case "4F_yellow80":
            date.set("4F_yellow80","Panorama_Figures/4F/4F_yellow80.jpg");break;
        case "4F_OR2":
            date.set("4F_OR2","Panorama_Figures/4F/4F_outsideRes2.jpg");break;//4F_outsideReserve2
        case "t85":
            date.set("t85","Panorama_Figures/4F/t85.jpg");break;
        //5F
        case "5F_1":
            date.set("5F_1","Panorama_Figures/5F/5F_1.jpg");break;
        case "5F_green01":
            date.set("5F_green01","Panorama_Figures/5F/5F_green1.jpg");break;
        //annex
        case "t31_2":
            date.set("t31_2","Panorama_Figures/annex/t31_2.jpg");break;
        case "t33_2":
            date.set("t33_2","Panorama_Figures/annex/t33_2.jpg");break;

        case "O2F_6":
            date.set("O2F_6","Panorama_Figures/annex/O2F_6.jpg");break;
        case "t35":
            date.set("t35","Panorama_Figures/annex/t35.jpg");break;
        case "t37":
            date.set("t37","Panorama_Figures/annex/t37.jpg");break;*/
        
	}
	//2F
	/*date.set("2F_2","Panorama_Figures/2F/2F_2.jpg");
	date.set("2F_inf","Panorama_Figures/2F/2F_inf.jpg");
	date.set("2F_inf2","Panorama_Figures/2F/2F_inf2.jpg");
	date.set("2F_inf3","Panorama_Figures/2F/2F_inf3.jpg");
	date.set("2F_inf4","Panorama_Figures/2F/2F_inf4.jpg");
	date.set("2F_ref1","Panorama_Figures/2F/2F_ref.jpg");
	date.set("2F_ref2","Panorama_Figures/2F/2F_ref2.jpg");
	date.set("2F_ref3","Panorama_Figures/2F/2F_ref3.jpg");
	date.set("2F_ref7","Panorama_Figures/2F/2F_ref7.jpg");
	date.set("2F_stairs","Panorama_Figures/2F/2F_stairs.jpg");
	date.set("2F_GVR","Panorama_Figures/2F/2F_groupViewingRoom.jpg");//2F_groupViewingRoom 
	date.set("2F_AVM2","Panorama_Figures/2F/2F_audioVisualMaterials2.jpg");//2F_audioVisualMaterials2
	date.set("2F_ITS","Panorama_Figures/2F/2F_interactiveTouchSystem.jpg");//2F_interactiveTouchSystem
	date.set("t01","Panorama_Figures/2F/t01.jpg");
	date.set("t02","Panorama_Figures/2F/t02.jpg");	  
	date.set("t03","Panorama_Figures/2F/t03.jpg");
	date.set("t04","Panorama_Figures/2F/t04.jpg"); 
	date.set("t05","Panorama_Figures/2F/t05.jpg");
	date.set("t06","Panorama_Figures/2F/t06.jpg");
	date.set("t07","Panorama_Figures/2F/t07.jpg");	  
	date.set("t08","Panorama_Figures/2F/t08.jpg");
	date.set("t09_2","Panorama_Figures/2F/t09_2.jpg");
	date.set("2F_CDR","Panorama_Figures/2F/2F_cornerDiscussionRoom.jpg");//2F_cornerDiscussionRoom

	//3F
	date.set("3F_1","Panorama_Figures/3F/3F_1.jpg");
	date.set("3F_con","Panorama_Figures/3F/3F_con.jpg");
	date.set("3F_study01","Panorama_Figures/3F/3F_study1.jpg");
	date.set("3F_study04","Panorama_Figures/3F/3F_study4.jpg");
	date.set("3F_study05","Panorama_Figures/3F/3F_study5.jpg");
	date.set("3F_study06","Panorama_Figures/3F/3F_study6.jpg");
	date.set("3F_study07","Panorama_Figures/3F/3F_study7.jpg");
	date.set("3F_study09","Panorama_Figures/3F/3F_study9.jpg");
	date.set("3F_study10","Panorama_Figures/3F/3F_study10.jpg");
	date.set("3F_study11","Panorama_Figures/3F/3F_study11.jpg");
	date.set("3F_center1","Panorama_Figures/3F/3F_center.jpg");
	date.set("3F_center2","Panorama_Figures/3F/3F_center2.jpg");
	date.set("3F_center3","Panorama_Figures/3F/3F_center3.jpg");
	date.set("3F_center4","Panorama_Figures/3F/3F_center4.jpg");
	date.set("3F_center5","Panorama_Figures/3F/3F_center5.jpg");
	date.set("3F_center6","Panorama_Figures/3F/3F_center6.jpg");
	date.set("3F_center7","Panorama_Figures/3F/3F_center7.jpg");
	date.set("3F_center8","Panorama_Figures/3F/3F_center8.jpg");
	date.set("3F_VRexpe2","Panorama_Figures/3F/3F_VRexperienceShowroom2.jpg");
	date.set("t11","Panorama_Figures/3F/t11.jpg");
	date.set("t12","Panorama_Figures/3F/t12.jpg");	  
	date.set("t13","Panorama_Figures/3F/t13.jpg");
	date.set("t14","Panorama_Figures/3F/t14.jpg");
	date.set("t15","Panorama_Figures/3F/t15.jpg");	  
	date.set("t16","Panorama_Figures/3F/t16.jpg");
	date.set("t17","Panorama_Figures/3F/t17.jpg");
	date.set("t18","Panorama_Figures/3F/t18.jpg");
	date.set("t19","Panorama_Figures/3F/t19.jpg");
	date.set("t20","Panorama_Figures/3F/t20.jpg");
	date.set("t21","Panorama_Figures/3F/t21.jpg");	  
	date.set("t22","Panorama_Figures/3F/t22.jpg");	  
	date.set("t23","Panorama_Figures/3F/t23.jpg");
	date.set("t24","Panorama_Figures/3F/t24.jpg");
	date.set("t25","Panorama_Figures/3F/t25.jpg");		  
	date.set("t27","Panorama_Figures/3F/t27.jpg");
	date.set("t29","Panorama_Figures/3F/t29.jpg");
	date.set("t82","Panorama_Figures/3F/t82.jpg");
	date.set("t83","Panorama_Figures/3F/t83.jpg");
	print_progress_rate(1);
	//4F
	date.set("4F_1","Panorama_Figures/4F/4F_1.jpg");
	date.set("4F_2","Panorama_Figures/4F/4F_2.jpg");
	date.set("4F_4","Panorama_Figures/4F/4F_4.jpg");
	date.set("4F_red07","Panorama_Figures/4F/4F_red7.jpg");
	date.set("4F_red10","Panorama_Figures/4F/4F_red10.jpg");
	date.set("4F_red13","Panorama_Figures/4F/4F_red13.jpg");
	date.set("4F_red16","Panorama_Figures/4F/4F_red16.jpg");
	date.set("4F_yellow04","Panorama_Figures/4F/4F_yellow4.jpg");
	date.set("4F_yellow08","Panorama_Figures/4F/4F_yellow8.jpg");
	date.set("4F_yellow12","Panorama_Figures/4F/4F_yellow12.jpg");
	date.set("4F_yellow16","Panorama_Figures/4F/4F_yellow16.jpg");
	date.set("4F_yellow20","Panorama_Figures/4F/4F_yellow20.jpg");
	date.set("4F_yellow40","Panorama_Figures/4F/4F_yellow40.jpg");
	date.set("4F_yellow44","Panorama_Figures/4F/4F_yellow44.jpg");
	date.set("4F_yellow48","Panorama_Figures/4F/4F_yellow48.jpg");
	date.set("4F_yellow52","Panorama_Figures/4F/4F_yellow52.jpg");
	date.set("4F_yellow56","Panorama_Figures/4F/4F_yellow56.jpg");
	date.set("4F_yellow60","Panorama_Figures/4F/4F_yellow60.jpg");
	date.set("4F_yellow64","Panorama_Figures/4F/4F_yellow64.jpg");
	date.set("4F_yellow68","Panorama_Figures/4F/4F_yellow68.jpg");
	date.set("4F_yellow72","Panorama_Figures/4F/4F_yellow72.jpg");
	date.set("4F_yellow76","Panorama_Figures/4F/4F_yellow76.jpg");
	date.set("4F_yellow80","Panorama_Figures/4F/4F_yellow80.jpg");
	date.set("4F_OR","Panorama_Figures/4F/4F_outsideRes.jpg");//4F_outsideReserve
	date.set("4F_OR2","Panorama_Figures/4F/4F_outsideRes2.jpg");//4F_outsideReserve2
	date.set("t40","Panorama_Figures/4F/t40.jpg");
	date.set("t41","Panorama_Figures/4F/t41.jpg");
	date.set("t42","Panorama_Figures/4F/t42.jpg");
	date.set("t43","Panorama_Figures/4F/t43.jpg");
	date.set("t44","Panorama_Figures/4F/t44.jpg");
	date.set("t45","Panorama_Figures/4F/t45.jpg");
	date.set("t47","Panorama_Figures/4F/t47.jpg");
	date.set("t84","Panorama_Figures/4F/t84.jpg");
	date.set("t85","Panorama_Figures/4F/t85.jpg");
	date.set("4F_study2","Panorama_Figures/4F/4F_study2.jpg");
	date.set("4F_study3","Panorama_Figures/4F/4F_study3.jpg");
	date.set("4F_study4","Panorama_Figures/4F/4F_study4.jpg");
	date.set("4F_study5","Panorama_Figures/4F/4F_study5.jpg");
	date.set("4F_study6","Panorama_Figures/4F/4F_study6.jpg");
	date.set("4F_study7","Panorama_Figures/4F/4F_study7.jpg");
	date.set("4F_study8","Panorama_Figures/4F/4F_study8.jpg");
	date.set("4F_study9","Panorama_Figures/4F/4F_study9.jpg");
	date.set("4F_study10","Panorama_Figures/4F/4F_study10.jpg");
	print_progress_rate(2);
	
	//5F
	date.set("5F_1","Panorama_Figures/5F/5F_1.jpg");
	date.set("5F_2","Panorama_Figures/5F/5F_2.jpg");
	date.set("5F_study4","Panorama_Figures/5F/5F_study4.jpg");
	date.set("5F_blue34","Panorama_Figures/5F/5F_blue34.jpg");
	date.set("5F_blue42","Panorama_Figures/5F/5F_blue42.jpg");
	date.set("5F_blue50","Panorama_Figures/5F/5F_blue50.jpg");
	date.set("5F_blue56","Panorama_Figures/5F/5F_blue56.jpg");
	date.set("5F_blue62","Panorama_Figures/5F/5F_blue62.jpg");
	date.set("5F_green01","Panorama_Figures/5F/5F_green1.jpg");
	date.set("5F_green04","Panorama_Figures/5F/5F_green4.jpg");
	date.set("5F_green08","Panorama_Figures/5F/5F_green8.jpg");
	date.set("5F_green12","Panorama_Figures/5F/5F_green12.jpg");
	date.set("5F_green16","Panorama_Figures/5F/5F_green16.jpg");
	date.set("5F_green64","Panorama_Figures/5F/5F_green64.jpg");
	date.set("5F_green68","Panorama_Figures/5F/5F_green68.jpg");
	date.set("5F_green76","Panorama_Figures/5F/5F_green76.jpg");
	date.set("5F_green80","Panorama_Figures/5F/5F_green80.jpg");
	date.set("5F_green84","Panorama_Figures/5F/5F_green84.jpg");
	date.set("5F_green94","Panorama_Figures/5F/5F_green94.jpg");
	date.set("5F_green98","Panorama_Figures/5F/5F_green98.jpg");
	date.set("5F_green102","Panorama_Figures/5F/5F_green102.jpg");
	date.set("5F_green106","Panorama_Figures/5F/5F_green106.jpg");
	date.set("5F_green110","Panorama_Figures/5F/5F_green110.jpg");
	date.set("5F_green114","Panorama_Figures/5F/5F_green114.jpg");
	date.set("t48","Panorama_Figures/5F/t48.jpg");
	date.set("t51","Panorama_Figures/5F/t51.jpg");
	date.set("t52","Panorama_Figures/5F/t52.jpg");
	date.set("t53","Panorama_Figures/5F/t53.jpg");
	date.set("t49","Panorama_Figures/5F/t49.jpg"); 
	date.set("5F_study1","Panorama_Figures/5F/5F_study.jpg");
	date.set("5F_study2","Panorama_Figures/5F/5F_study2.jpg");	  
	date.set("5F_study3","Panorama_Figures/5F/5F_study3.jpg");
	date.set("5F_study5","Panorama_Figures/5F/5F_study5.jpg");
	date.set("5F_study6","Panorama_Figures/5F/5F_study6.jpg");	  
	date.set("5F_study7","Panorama_Figures/5F/5F_study7.jpg");
	date.set("5F_study8","Panorama_Figures/5F/5F_study8.jpg");
	date.set("5F_study9","Panorama_Figures/5F/5F_study9.jpg");
	date.set("5F_study10","Panorama_Figures/5F/5F_study10.jpg");	  
	date.set("5F_study11","Panorama_Figures/5F/5F_study11.jpg");
	print_progress_rate(3);
	//Annex		
	date.set("O2F_con","Panorama_Figures/annex/O2F_con.jpg");
	date.set("t30_2","Panorama_Figures/annex/t30_2.jpg");
	date.set("t31_2","Panorama_Figures/annex/t31_2.jpg");
	date.set("t32_2","Panorama_Figures/annex/t32_2.jpg");
	date.set("t33_2","Panorama_Figures/annex/t33_2.jpg");

	date.set("O2F_1","Panorama_Figures/annex/O2F_1.jpg");
	date.set("O2F_2","Panorama_Figures/annex/O2F_2.jpg");
	date.set("O2F_3","Panorama_Figures/annex/O2F_3.jpg");
	date.set("O2F_4","Panorama_Figures/annex/O2F_4.jpg");
	date.set("O2F_5","Panorama_Figures/annex/O2F_5.jpg");
	date.set("O2F_6","Panorama_Figures/annex/O2F_6.jpg");
	date.set("O2F_7","Panorama_Figures/annex/O2F_7.jpg");
	date.set("O2F_8","Panorama_Figures/annex/O2F_8.jpg");
	date.set("O2F_9","Panorama_Figures/annex/O2F_9.jpg");
	date.set("t35","Panorama_Figures/annex/t35.jpg");
	date.set("t36","Panorama_Figures/annex/t36.jpg");
	date.set("t37","Panorama_Figures/annex/t37.jpg");
	date.set("t38","Panorama_Figures/annex/t38.jpg");

	//1F		
	date.set("t55","Panorama_Figures/1F/t55.jpg");  
	date.set("t56","Panorama_Figures/1F/t56.jpg"); 
	date.set("t57","Panorama_Figures/1F/t57.jpg");
	date.set("t58","Panorama_Figures/1F/t58.jpg");	  
	date.set("t59","Panorama_Figures/1F/t59.jpg");

	date.set("t61","Panorama_Figures/1F/t61.jpg");
	date.set("t62","Panorama_Figures/1F/t62.jpg");
	date.set("t63","Panorama_Figures/1F/t63.jpg");
	date.set("t64","Panorama_Figures/1F/t64.jpg");
	date.set("t67","Panorama_Figures/1F/t67.jpg");
	date.set("t68","Panorama_Figures/1F/t68.jpg");
	date.set("t69","Panorama_Figures/1F/t69.jpg");

	//B1F
	date.set("t72","Panorama_Figures/B1/t72.jpg");
	date.set("t73","Panorama_Figures/B1/t73.jpg");	  
	date.set("t75","Panorama_Figures/B1/t75.jpg");
	date.set("t76","Panorama_Figures/B1/t76.jpg");
	date.set("t77","Panorama_Figures/B1/t77.jpg");
	date.set("t78","Panorama_Figures/B1/t78.jpg");
	date.set("t79","Panorama_Figures/B1/t79.jpg");
	date.set("t80","Panorama_Figures/B1/t80.jpg");  
	date.set("t81","Panorama_Figures/B1/t81.jpg"); 	*/  
}
function print_progress_rate(persent){
	if(persent != 0){
		console.log(persent*25+"%");
	}
	else{
		console.log("data loading complete!");
	}	
}