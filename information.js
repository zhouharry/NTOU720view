$("#infor_button").click(function(){//information text board show or hidden
	var statue = $("#infor_text").css("visibility");
	if(statue == "hidden")
		$("#infor_text").css("visibility","visible");
	else
		$("#infor_text").css("visibility","hidden");
});

function information_set()
{
	var itext;
	switch(floor_number){
		case "sea_school":
		    switch(floor_texture[position_y][position_x]){
		    	case "g01":
		    	    itext="濱海校門";break;
		    	case "p07":
		    	    itext="海空大樓";break;
		    	case "p08":
		    	    itext="航管大樓";break;
		    	case "p09":
		    	    itext="沛華大樓";break;
		    	case "p11_2":
		    	    itext="商船大樓";break;
		    	case "p12":
		    	    itext="機械B館";break;
		    	case "p13":
		    	    itext="機械A館";break;
		    	case "p14":
		    	    itext="綜合研究中心";break;
		    	case "p10":
		    	    itext="延平技術大樓";break;
		    	case "p23_2":
		    	    itext="圖書館";break;
		    }
		break;
		case "Xiangfeng_school":
		    switch(floor_texture[position_y][position_x]){
		    	case "p15":
		    	    itext="人社院大樓";break;
		    	case "p16":
		    	    itext="海事大樓";break;
		    	case "p17":
		    	    itext="環資系館";break;
		    	case "p18":
		    	    itext="食品科學系館";break;
		    	case "p19":
		    	    itext="食品工程館";break;
		    	case "p20":
		    	    itext="生命科學系館";break;
		    	case "p21":
		    	    itext="環漁系館";break;
		    	case "p22":
		    	    itext="環態所";break;
		    	case "p24":
		    	    itext="海洋科學與資源學院";break;
		    	case "p25":
		    	    itext="學生第一餐廳";break;
		    	case "p28":
		    	    itext="女生第一宿舍";break;
		    }
		break;
		case "enginering_school":
		    switch(floor_texture[position_y][position_x]){
		    	case "p26":
		    	    itext="體育館";break;
		    	case "p27":
		    	    itext="學生活動中心";break;
		    }
		break;
		case "2F":
			switch(floor_texture[position_y][position_x]){
				case "2F_4":
					itext="入口大廳、服務台、借書/還書櫃台";break;
				case "2F_ITS":
					itext="SMART空間";break;
				case "2F_2":
					itext="SMART空間";break;
				case "2F_stairs":
					itext="SMART空間";break;
				case "2F_ref1":
					itext="參考資料區、多媒體區個人視聽座";break;
				case "2F_ref2":
				    itext="多媒體區個人視聽座";break;
				case "2F_ref3":
					itext="參考資料區、地圖區、205大討論室";break;
				case "2F_ref7":
					itext="參考資料區、地圖區";break;
				case "2F_CDR":
					itext="205大討論室";break;
				case "2F_inf":
					itext="資訊檢索服務區、互動觸控系統";break;
				case "2F_inf2":
					itext="資訊檢索服務區、203小討論室、204小討論室";break;
				case "2F_inf3":
					itext="201團體視聽室、202團體視聽室";break;
				case "2F_inf4":
					itext="雲端體驗/資訊檢索區";break;
				case "2F_GVR":
					itext="202團體視聽室";break;
				case "2F_AVM2":
					itext="視聽資料區";break;				
				case "t01":
					itext="入口大廳樓梯間、電子佈告欄、無障礙電梯";break;
				case "t03":
					itext="連通走廊、藝文展示櫥窗";break;
				case "t04":
					itext="藝文展示櫥窗、愛樂廳入口、往山海迴廊通道";break;
				case "t05":
					itext="參考諮詢/館際合作櫃台";break;
				case "t06":
					itext="SMART空間";break;
				case "t07":
					itext="資訊檢索服務區、SMART空間";break;
				case "t08":
					itext="202團體視聽室、資訊檢索服務區";break;
				case "t09_2":
					itext="新書展示區";break;
			}
		break;
		case "3F":
			switch(floor_texture[position_y][position_x]){
				case "3F_1":
					itext="女廁前走道，旁為罕用合訂本區";break;
				case "3F_center3":
					itext="大學學報區與中文期刊合訂區轉角";break;
				case "3F_center4":
					itext="矮櫃為過期報紙合訂區，矮櫃對面高櫃為西文期刊區第169-240架";break;
				case "3F_center5":
					itext="中文期刊合訂區第75-86架及西文期刊合訂區第241-252架間轉角";break;					
				case "3F_center6":
					itext="3樓樓梯口";break;
				case "3F_center7":
					itext="夢幻海洋門口";break;
				case "3F_center8":
					itext="個人研究小間旁";break;
				case "3F_con":
					itext="圖書館二館通道口，旁有影印機";break;						
				case "3F_stairs":
					itext="這裡是3樓樓梯";break;
				case "3F_study01":
					itext="角落閱讀區，對面為行政大樓";break;
				case "3F_study04":
					itext="靠窗閱讀區，旁為西文期刊合訂本第85-96架前後";break;
				case "3F_study05":
					itext="角落閱讀區，對面為育樂館及人文大樓";break;					
				case "3F_study07":
					itext="靠窗閱讀區，旁為西文期刊合訂本第217-228架前後";break;
				case "3F_study09":
					itext="角落閱讀區，窗外為綜合二館";break;
				case "3F_study10":
					itext="角落閱讀區，窗外為綜合二館及綜合研究中心";break;
				case "3F_study11":
					itext="靠窗閱讀區，旁為西文期刊合訂本第393-404架前後";break;
				case "3F_VRexpe2":
					itext="夢幻海洋視聽資料區及雲端體驗/資訊檢索區";break;
				case "t11":
					itext="矮櫃為學報區，高櫃為西文期刊區第61-108架";break;
				case "t12":
					itext="大學學報區與西文期刊合訂區第85-96架間走道";break;
				case "t13":
					itext="矮櫃為過期報紙合訂區，矮櫃對面高櫃為西文期刊區第169-240架";break;					
				case "t14":
					itext="中文期刊合訂區第81-86架前方走道";break;
				case "t15":
					itext="靠窗閱讀區，旁為西文期刊合訂本第121-132架前後";break;
				case "t16":
					itext="靠窗閱讀區，對面為山海迴廊及人文大樓";break;
				case "t17":
					itext="靠窗閱讀區，對面為育樂館";break;	
				case "t18":
					itext="靠窗閱讀區，旁為西文期刊合訂本第217-228架前後";break;
				case "t19":
					itext="夢幻海洋入口前方走道";break;					
				case "t20":
					itext="期刊辦公室前方走道，矮櫃為中文期刊合訂區第21-26架";break;
				case "t21":
					itext="矮櫃為中文期刊合訂區第15-20架，高櫃為西文期刊合訂區第345-404架";break;
				case "t22":
					itext="矮櫃為中文期刊合訂區第8-14架，高櫃為中文期刊合訂區第87-146架";break;
				case "t23":
					itext="中文期刊合訂區第99-110架及西文期刊合訂區第441-452架間走道";break;
				case "t24":
					itext="大陸期刊合訂區及西文期刊合訂區第441-452架間走道";break;
				case "t25":
					itext="角落閱讀區，旁為西文期刊合訂本第441-452架前後";break;	
				case "t27":
					itext="夢幻海洋前走道";break;
				case "t29":
					itext="淺色櫃為中文期刊合訂區第27-86架，深色櫃為西文期刊合訂區第241-296架";break;
				case "t82":
					itext="靠窗閱讀區，旁為西文期刊合訂本第2563-264架前後";break;
				case "t83":
					itext="靠窗閱讀區，旁為西文期刊合訂本第381-392架前後";break;	
			}					
		break;
		case "4F":
			switch(floor_texture[position_y][position_x]){
				case "4F_center":
					itext="4樓樓梯口";break;				
				case "4F_1":
					itext="養殖所論文放置區旁往男廁走道";break;	
				case "4F_2":
					itext="4樓電梯口（梯廳），電梯旁為女廁及飲水機";break;
				case "4F_4":
					itext="養殖所論文放置區";break;
				case "4F_OR":
					itext="航技所及通訊所論文放置區，旁有資訊檢索區";break;	
				case "4F_OR2":
					itext="指定參考書、童書室前";break;					
				case "4F_red10":
					itext="西文書第37架前後與光電所論文放置區前走道";break;				
				case "4F_red13":
					itext="西文書第32架前後與光電所論文放置區前走道";break;	
				case "4F_study10":
					itext="角落閱讀區，窗外為綜合二館";break;
				case "4F_study2":
					itext="靠窗閱讀區，旁為西文書第7-8架";break;
				case "4F_study3":
					itext="角落閱讀區，窗外可見山海迴廊";break;	
				case "4F_study4":
					itext="靠窗閱讀區，旁為西文書第72-73架";break;					
				case "4F_study5":
					itext="角落閱讀區，旁為西文書第61-62架";break;	
				case "4F_study6":
					itext="角落閱讀區，旁為生科所論文放置區";break;					
				case "4F_study7":	
					itext="靠窗閱讀區，旁為西文書第44-45架";break;				
				case "4F_study8":
					itext="角落閱讀區，窗外為綜合研究中心";break;	
				case "4F_study9":
					itext="靠窗閱讀區，窗外為綜合二館";break;
				case "4F_yellow04":
					itext="西文書第4架前後";break;
				case "4F_yellow08":
					itext="西文書第8架前後";break;	
				case "4F_yellow12":
					itext="西文書第12架前後";break;
				case "4F_yellow16":
					itext="西文書第16架前後";break;
				case "4F_yellow20":
					itext="西文書第20架前後";break;	
				case "4F_yellow40":
					itext="西文書第40架前後，旁密集書庫為工學院所論文放置區";break;
				case "4F_yellow44":
					itext="西文書第44架前後，旁矮櫃為電機所論文放置區";break;					
				case "4F_yellow48":
					itext="西文書第48架前後，旁矮櫃為電機所論文放置區";break;
				case "4F_yellow52":
					itext="西文書第52架前後，旁有閱覽座位";break;	
				case "4F_yellow56":
					itext="西文書第56架前後，旁有閱覽座位";break;
				case "4F_yellow60":
					itext="西文書第60架前後，旁有往5樓的樓梯";break;
				case "4F_yellow64":
					itext="西文書第64架前後";break;	
				case "4F_yellow68":
					itext="西文書第68架前後";break;
				case "4F_yellow72":
					itext="西文書第72架前後，旁有閱覽座位";break;
				case "4F_yellow76":
					itext="西文書第76架前後，旁有閱覽座位";break;	
				case "4F_yellow80":
					itext="西文書第80架前後，旁有閱覽座位";break;
				case "t40":
					itext="運輸所、輪機所及航管所論文放置區";break;
				case "t41":
					itext="4樓男廁端通往5樓樓梯";break;
				case "t42":
					itext="商船所及航管所論文放置區";break;
				case "t43":
					itext="角落閱讀區，旁為西文書第21-22架";break;	
				case "t44":
					itext="靠窗閱讀區，旁為西文書第1架";break;
				case "t45":
					itext="靠窗閱讀區，旁為西文書第80-81架";break;
				case "t47":
					itext="靠窗閱讀區，窗外為綜合研究中心";break;	
				case "t84":
					itext="4樓電梯前（女廁端）通往5樓樓梯";break;
				case "t85":
					itext="日文期刊合訂本放置區";break;			
			}
		case "5F":
			switch(floor_texture[position_y][position_x]){
				case "5F_blue34":
					itext="密集書庫區第34架前後走道，旁矮櫃為中文書第117-118架轉角";break;
				case "5F_blue42":
					itext="密集書庫區第42架前後走道，旁矮櫃為中文書第118架";break;
				case "5F_blue50":
					itext="密集書庫區第50架前後走道，旁矮櫃為中文書第119架";break;
				case "5F_blue56":
					itext="密集書庫區第56架前後走道，旁矮櫃為中文書第119架";break;	
				case "5F_blue62":
					itext="中文密集書庫區走道，旁矮櫃為中文書第119架";break;
				case "5F_green01":
					itext="中文書第1架前後";break;
				case "5F_green04":
					itext="中文書第4架前後，旁矮櫃為中文書第116架";break;
				case "5F_green08":
					itext="中文書第8架前後，旁矮櫃為中文書第116架";break;
				case "5F_green12":
					itext="中文書第12架前後，旁矮櫃為中文書第117架";break;
				case "5F_green16":
					itext="中文書第16架前後，旁矮櫃為中文書第117架";break;
				case "5F_green64":
					itext="中文書第64架前後，旁為飲水機";break;
				case "5F_green68":
					itext="中文書第68架前後";break;
				case "5F_green72":
					itext="中文書第72架前後，5樓電梯前樓梯口";break;
				case "5F_green76":
					itext="中文書第76架前後";break;					
				case "5F_green80":
					itext="中文書第80架前後";break;	
				case "5F_green94":
					itext="中文書第94架前後";break;					
				case "5F_green98":
					itext="中文書第98架前後";break;	
				case "5F_green102":
					itext="中文書第102架前後";break;					
				case "5F_green106":
					itext="中文書第106架前後，靠男廁附近樓梯口";break;	
				case "5F_green110":
					itext="中文書第110架前後";break;					
				case "5F_green114":
					itext="中文書第114架前後";break;						
				case "5F_study2":
					itext="靠窗閱讀區，窗外為綜合二館及綜合研究中心";break;
				case "5F_study3":
					itext="角落閱讀區，旁為中文書第22架";break;
				case "5F_study4":
					itext="靠窗閱讀區，旁為中文書第21-22架";break;					
				case "5F_study5":
					itext="靠窗閱讀區，旁為中文書第14架";break;	
				case "5F_study6":
					itext="角落閱讀區，旁為中文書第2架";break;
				case "5F_study7":
					itext="角落閱讀區，旁為中文書第115架";break;
				case "5F_study8":
					itext="靠窗閱讀區，旁為中文書第98架，窗外可見山海迴廊";break;					
				case "5F_study9":
					itext="角落閱讀區，對面為育樂館";break;
				case "t48":
					itext="5樓電梯口，電梯旁為9類圖書區及女廁";break;
				case "t49":
					itext="靠窗閱讀區，旁為中文書第85架";break;
				case "t51":
					itext="靠窗閱讀區，旁為中文書第72架";break;	
				case "t52":
					itext="靠窗閱讀區，旁為中文書第93架";break;
				case "t53":
					itext="靠窗閱讀區，對面為行政大樓";break;							
			}
		case "1F":
			switch(floor_texture[position_y][position_x]){
				case "t55":
					itext="行政區入口(往採編組、圖書系統組)";break;
				case "t56":
					itext="臨時閱讀區";break;
				case "t57":
					itext="臨時閱讀區";break;	
				case "t58":
					itext="臨時閱讀區";break;
				case "t59":
					itext="臨時閱讀區";break;
				case "t60":
					itext="圖書館入口、展示空間";break;
				case "t61":
					itext="圖書館入口、展示空間";break;
				case "t62":
					itext="圖書館入口、展示空間";break;	
				case "t63":
					itext="藝文中心辦公室入口、往男女廁通道";break;
				case "t64":
					itext="樓梯間、無障礙電梯";break;
				case "t67":
					itext="往男女化粧室通道";break;						
			}
		case "B1F":
			switch(floor_texture[position_y][position_x]){
				case "t71":
					itext="全興書苑入口";break;
				case "t73":
					itext="全興書苑、吧台式閱覽區、戶外草坪區";break;
				case "t75":
					itext="全興書苑閱覽區";break;	
				case "t76":
					itext="全興書苑鄭愁予新詩「我們航行，所以航行－我們是海洋的寵兒」";break;
				case "t77":
					itext="全興書苑閱覽區(附插座區域)";break;
				case "t78":
					itext="全興書苑閱覽區";break;
				case "t79":
					itext="全興書苑閱覽區";break;
				case "t80":
					itext="全興書苑閱覽區";break;					
				case "t81":
					itext="全興書院、往男廁";break;						
			}			
		case "annex_3F":
			switch(floor_texture[position_y][position_x]){
				case "O2F_con":
					itext="圖書二館通道";break;				
				case "O2F_con2":
					itext="這裡是二館入口，前方樓梯往現刊區，左手邊往資訊素養教室";break;
				case "t30_2":
					itext="前方通往資訊素養教室，左手邊為木地板休憩區";break;
				case "t31_2":
					itext="資訊素養教室前方走廊";break;	
				case "t32_2":
					itext="資訊素養教室前方走廊";break;
				case "t33_2":
					itext="副處長室前方";break;					
			}
		case "annex_4F":
			switch(floor_texture[position_y][position_x]){
				case "O2F_1":
					itext="矮櫃為大陸現刊區，高櫃為西文現刊區";break;
				case "O2F_2":
					itext="矮櫃為日文現刊區，高櫃為中文現刊區";break;
				case "O2F_4":
					itext="資訊素養教室前方走廊";break;	
				case "O2F_5":
					itext="中文現刊區";break;
				case "O2F_6":
					itext="現刊區由西文現刊開始陳列";break;
				case "O2F_7":
					itext="電腦教室前方閱覽區";break;
				case "O2F_9":
					itext="資訊檢索服務區及影印機放置區";break;
				case "t34":
					itext="二館4樓的樓梯出口處";break;
				case "t35":
					itext="資訊檢索服務區";break;
				case "t36":
					itext="閱覽區";break;	
				case "t37":
					itext="閱覽區";break;					
				case "t38":
					itext="閱覽區";break;	
			}
	}
	//set text
	if(itext)
		document.getElementById("infor_text").innerHTML = itext;
	else
		document.getElementById("infor_text").innerHTML = "無";
}