module('softTest Tests', {
    setup: function () {
        this.server = sinon.fakeServer.create();
    },
    teardown: function () {
        this.server.restore();
        delete this.server;
    }
});

test('Google Map API', function() {
    equal( mapi.init(), true, "Google map API works");
});
test('Wrong Answer should give Red color', function() {
    equal(mapi.wrong(), 'RED', "Wrong is RED");
});
test('Right Answer should give Green', function() {
    equal(mapi.right(), 'GREEN', "Right is Green ");
});
test('Control Flow Testing: double click- CASE-1', function(){
	var flag=1,e ={
		latLng:
			{
				lat: function(){
					return 33.239683085556464;
				},
				lng: function (){
					return -119.53002429008484;
				}
			}
	};
	var html = $("<h1 id='heading' class='ha'>Where is Oviatt Library?</h1><h4 id='heading1' class='hb'></h4><div id='map-canvas'></div><div id='ani'class='hid'></div>").hide();
	$("body").append( html);
	mapi.dblclk(e, flag);
	var str = "First is Right Answer";

	equal( $("body").find("h4").text(),str, "Control flow intact for case 1");
});
test('Control Flow Testing: double click- CASE 2', function(){
	var flag=2,e ={
		latLng:
			{
				lat: function(){
					return 33.239683085556464;
				},
				lng: function (){
					return -119.53002429008484;
				}
			}
	};
	mapi.dblclk(e, flag);
	var str = "Second is Wrong Answer";

	equal( $("body").find("h4").text(),str, "Control flow intact for case 2");
});
test('Control Flow Testing: double click- CASE 3', function(){
	var flag=3,e ={
		latLng:
			{
				lat: function(){
					return 33.239683085556464;
				},
				lng: function (){
					return -119.53002429008484;
				}
			}
	};
	mapi.dblclk(e, flag);
	var str = "Third is Wrong Answer";

	equal( $("body").find("h4").text(),str, "Control flow intact for case 3");
});
test('Control Flow Testing: double click- CASE 4', function(){
	var flag=4,e ={
		latLng:
			{
				lat: function(){
					return 33.239683085556464;
				},
				lng: function (){
					return -119.53002429008484;
				}
			}
	};
	mapi.dblclk(e, flag);
	var str = "Fourth is Wrong Answer";

	equal( $("body").find("h4").text(),str, "Control flow intact for case 4");
});
test('Control Flow Testing: double click- CASE 5', function(){
	var flag=5,e ={
		latLng:
			{
				lat: function(){
					return 33.239683085556464;
				},
				lng: function (){
					return -119.53002429008484;
				}
			}
	};
	mapi.dblclk(e, flag);
	var str = "Fifth is Wrong Answer";

	equal( $("body").find("h4").text(),str, "Control flow intact for case 5");
});