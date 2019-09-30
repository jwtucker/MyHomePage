$(function(){

	onResize();

	$('.window').hide();
	$('.workWindow').hide();
	$('.me').show();

	$('.workWindow>a').hover(function(){
		$(this).parent().find('p:nth-child(' + $(this).attr('data-tooltip') + ')').fadeIn(400);
	}, function(){
		$(this).parent().find('p:nth-child(' + $(this).attr('data-tooltip') + ')').hide();
	})

	$('.meLink').click(function(){
		$('.window').hide();
		$('.workWindow').hide();
		$('.me').show();
	});

	$('.contactLink').click(function(){
		$('.window').hide();
		$('.workWindow').hide();
		$('.contact').show();
	});

	$('.mathLink').click(function(){
		$('svg').remove();
		$('.window').hide();
		$('.workWindow').hide();
		$('.math').show();
		$('.mathWork').fadeIn(600);
		graph('.math',[
			{'name':'Linear Alg.', 'val' : '10', 'dx':10,'dy':4},
			{'name':'Calculus','val' : '7','dx':12,'dy':-1},
			{'name':'Statistics', 'val': '6','dx':12,'dy':0},
			{'name':'Game Theory', 'val' : '5','dx':8,'dy':8}
		]);
	});

	$('.webLink').click(function(){
		$('svg').remove();
		$('.window').hide();
		$('.workWindow').hide();
		$('.web').show();
		$('.webWork').fadeIn(600);
		graph('.web',[
			{'name':'HTML', 'val' : '9','dx':0,'dy':-10},
			{'name':'Javascript','val' : '8','dx':-10,'dy':3},
			{'name':'CSS', 'val' : '6','dx':3,'dy':-12},
			{'name': 'node.js', 'val' : '5','dx':-3,'dy':-6},
			{'name':'Django', 'val' : '4','dx':-2,'dy':-8},
			{'name':'PHP', 'val' : '2','dx':3,'dy':-14}
		]);
	});

	$('.dataLink').click(function(){
		$('svg').remove();
		$('.window').hide();
		$('.workWindow').hide();
		$('.data').show();
		$('.dataWork').fadeIn(600);
		graph('.data',[
			{'name':'Pandas', 'val':'8','dx':4,'dy':-3},
			{'name':'d3.js','val':'7','dx':9,'dy':-12},
			{'name':'Matplotlib','val':'6','dx':0,'dy':1},
			{'name':'Scraping', 'val':'5','dx':0,'dy':0},
			{'name':'Prediction','val':'3','dx':0,'dy':1}
		]);
	});

	$('.miscLink').click(function(){
		$('svg').remove();
		$('.window').hide();
		$('.workWindow').hide();
		$('.misc').show();
		$('.miscWork').fadeIn(600);
		graph('.misc',[
			{'name':'Python','val':'8','dx':5,'dy':-4},
			{'name':'C++','val':'5','dx':10,'dy':-15},
			{'name':'Linux admin','val':'5','dx':-2,'dy':8},
			{'name':'FORTRAN','val':'3','dx':0,'dy':1},
			{'name':'AWS','val':'2','dx':10,'dy':-11}
		]);
	});

	$(window).resize(function(){
		onResize();
	});

	graph('.math');

});


function onResize(){

	var sidebarTopOffset = $(window).height()/2 - $('.sidebar').height()/2;
	$('.sidebar').css('top',sidebarTopOffset);
	var sidebarLeftOffset = $(window).width()/2 - $('.main').width()/2 - 250;
	$('.sidebar').css('left',sidebarLeftOffset);

	var mainOffset = $(window).height()/2 - $('.main').height()/2;
	$('.main').css('top',mainOffset);

	var workTopOffset = $(window).height()/2 - $('.sidebar').height()/2 - 25;
	$('.work').css('top',workTopOffset);
	var workLeftOffset = $(window).width()/2 + $('.main').width()/2+150;
	$('.work').css('left', workLeftOffset);

}

function graph(selector,dataset){
	var w = 500;
	var h = 300;

	var svg = d3.select(selector)
	.append("svg")
	.attr("width", w)
	.attr("height", h);

	var bars = svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("fill", "#00B16A")
	.attr("x", function(d, i) {
		return (i + .5) * (w / dataset.length) - 15;
	})
	.attr("y", h - 50)
	.attr("width", 30)
	.attr("height", 0);

	bars.transition()
	.duration(1000)
	.delay(100)
	.attr("y", function(d) {
		return h - 50 - (d.val * 25);  
	})
	.attr("height", function(d) {
		return d.val * 25;
	})

	var xLabels = svg.selectAll('text.label')
	.data(dataset)
	.enter()
	.append('text')
	// .attr('x',function(d,i){return i * (w/dataset.length)}
	.attr('y', h-25)
	.attr('transform',function(d,i){return 'translate(' + (i * (w/dataset.length) - 160 + (d.dx ? d.dx : 0)) + ',' + (100 + (d.dy ? d.dy : 0)) + ') rotate(-45)'})
	.attr('fill','white')
	.attr('class','label')
	.text(function(d){ return d.name })

}