//(function() {
	var map, flag=1, questions=["Where is Oviatt Library?","Where is Bayramian Hall?",
	               "Where is University Hall?","Where is Jacaranda Hall?","Where is Sequoia Hall?"," "];
	                //storing the questions in an array
	var rectangles = [], a,b,c,d, corans=0;
	mapi = {
		init: function(){
			return true;
		},
		right: function(){
			return 'GREEN';
		},
		wrong: function(){
			return 'RED';
		},
		dblclk: function(eve, flg){
			flag = flg;
			doubleClicked( eve );
		}
	};
	  function wrong(a,b,c,d,i)
	   {
	     var rectangle = new google.maps.Rectangle({
			strokeColor: 'red',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FF0000',
			fillOpacity: 0,
			map: map,
			bounds: new google.maps.LatLngBounds(
			new google.maps.LatLng(c,d),
			new google.maps.LatLng(a,b))
	     });
		  rectangles[i] = rectangle;
	  }//end of wrong..that means it draws a rectangle with red color outside the specified building
	//source:https://developers.google.com/maps/documentation/javascript/examples/rectangle-simple
	  function right(a,b,c,d,i)
	    {
	      var rectangle = new google.maps.Rectangle({
          strokeColor: '#00FF00',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0,
          map: map,
          bounds: new google.maps.LatLngBounds(
          new google.maps.LatLng(c,d),
          new google.maps.LatLng(a,b))
	     });

		rectangles[i] = rectangle;
		return true;
	  }//end of right..that means it draws a rectangle with green color outside the specified building
	////source:https://developers.google.com/maps/documentation/javascript/examples/rectangle-simple

	function remove(i)
	  {
		 rectangles[i].setMap(null);
	  }//end of remove..it removes the highlighted portion of the rectangle for the previous question


	function doubleClicked(e)
	 {


	  switch(flag)
	   {
	      case 1: //this part will ask the first question
		          var x=e.latLng.lat();
	              var y=e.latLng.lng();

       			  a=34.239683085556464;
	              b=-118.52864563465118;
	              c=34.240536023764534;
                  d=-118.53002429008484;
                  //setting the coordinates

	              if(x>c || y<d || x<a || y>b)
	               {
		              wrong(a,b,c,d,flag-1);//if it is outside the boundary
	                  document.getElementById("heading1").innerHTML="First is Wrong Answer";
	               }//end of if

	              else
	               {
	                  right(a,b,c,d,flag-1);//if it is inside the boundary
	                  document.getElementById("heading1").innerHTML="First is Right Answer";
					  ++corans;//increase the number of correct answer
	               }//end of else

					window.setTimeout("displayNextQuestion()", 2000);//halt the display for about 2 seconds
				    flag++;
		          break;

          case 2: //this part will ask the second question
		          var x=e.latLng.lat();
	              var y=e.latLng.lng()
	              a=34.24007736151109;
	              b=-118.53020668029785;
	              c=34.24074214921431;
				  d=-118.53145122528076;

	              if(x>c || y<d || x<a || y>b)
	               {
		              wrong(a,b,c,d,flag-1);
	                  document.getElementById("heading1").innerHTML="Second is Wrong Answer";
	               }//end of if

	              else
	               {
	                  right(a,b,c,d,flag-1);
	                  document.getElementById("heading1").innerHTML=" Second is Right Answer";
					  ++corans;
	               }//end of else

					window.setTimeout("displayNextQuestion()", 2000);
					flag++;
                  break;

          case 3: //this part will ask the third question
		          var x=e.latLng.lat();
	              var y=e.latLng.lng()
	              a=34.24033449700002;
	              b=-118.53184819221497;
	              c=34.239406296901315;
				  d=-118.53238463401794;

	              if(x>a || y>b || x<c || y<d)
	               {
		              wrong(a,b,c,d,flag-1);
	                  document.getElementById("heading1").innerHTML="Third is Wrong Answer";
	               }//end of if

	              else
	               {
	                  right(a,b,c,d,flag-1);
	                  document.getElementById("heading1").innerHTML="Third is Right Answer";
					  ++corans;
	               }//end of else

					window.setTimeout("displayNextQuestion()", 2000);
					flag++;
                   break;

	      case 4: //this part will ask the fourth question
		          var x=e.latLng.lat();
	              var y=e.latLng.lng()
	              a=34.24098673959531;
	              b=-118.52783024311066;
	              c=34.242153237789005;
				  d=-118.52950930595398;

	              if(x>c || y<d || x<a || y>b)
	               {
		              wrong(a,b,c,d,flag-1);
	                  document.getElementById("heading1").innerHTML="Fourth is Wrong Answer";
	               }//end of if

	              else
	               {
	                  right(a,b,c,d,flag-1);
	                  document.getElementById("heading1").innerHTML="Fourth is Right Answer";
					  ++corans;
	               }//end of else

					window.setTimeout("displayNextQuestion()", 2000);
					flag++;
		          break;

          case 5: //this part will ask the fifth question
		          var x=e.latLng.lat();
	              var y=e.latLng.lng()
	               a=34.24091775263671;
	               b=-118.5284686088562 ;
	               c=34.24022787994141;
	               d=-118.52757811546326;

	              if(x>a || y<b || x<c || y>d)
	               {
		              wrong(c,d,a,b,flag-1);
	                  document.getElementById("heading1").innerHTML="Fifth is Wrong Answer";
	               }//end of if

	              else
	               {
	                  right(c,d,a,b,flag-1);
	                  document.getElementById("heading1").innerHTML="Fifth is Right Answer";
					  ++corans;
	               }//end of else

					window.setTimeout("displayNextQuestion()", 2000);
					flag++;
                  break;
	    }//end of switch

	    if(flag==6)
		 {
		   window.setTimeout("showResult()", 2000);//that means show the number of correct answers
		 }//end of if

	}//function doubleClicked

	function displayNextQuestion()
	 {
		document.getElementById("heading").innerHTML=questions[flag-1];//this line will display the next quesiton
        document.getElementById("heading1").innerHTML="";//this will clear the previous result of the question asked
		if (flag > 1)
		{
			remove(flag-2);//this will call the remove function
		}
     }//this function displays the next question

	function showResult()
	 {
		document.getElementById("ani").setAttribute("class","hid1");//it will show the div now that was previously hidden
		$("#ani").html("You scored "+corans+" out of a possible 5 correct");//it will give the correct score for the quiz
		$("#ani").animate({bottom:'400px'});//it will float the div
	 }//end of ShowResult()

    function init()
     {
	    //the following lines initializes the google map for the Csun campus
    	var mapOptions = {
		    zoom: 18,
		    center: new google.maps.LatLng(34.240496, -118.529518),
		    mapTypeId: google.maps.MapTypeId.SATELLITE,
			disableDoubleClickZoom: true,
			disableDefaultUI: true,
			zoomControl: false,
			draggable: false,
			scrollwheel: false
	    }
	  	map = new google.maps.Map(document.getElementById("map-canvas"),
	  							mapOptions);

    	google.maps.event.addListener(map, 'dblclick', doubleClicked);//if the user double clicks it will go to the doubleClicked function

     }//end of init

	 window.addEventListener("load", init, false);//load the DOM

//}());