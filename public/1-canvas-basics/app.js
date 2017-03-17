//Part 1: Append a <canvas> element under <div id='plot1'> with the same width and height as the container element
//Store drawing context as a variable
//Hint: use canvas.getContext('2d');

var width = d3.select('.plot').node().clientWidth,
	height = d3.select('.plot').node().clientHeight;

var canvas = d3.select('#plot1').append('canvas')
	.attr('width', width)
	.attr('height', height)
	.node();

var ctx = canvas.getContext('2d');


//Part 2: Draw a gray background, with fillStyle = 'rgb(250,250,250)'
ctx.fillStyle = 'rgb(250,250,250)';
ctx.fillRect(0, 0, width, height);

//Part 3: Draw a x and y grid, spaced 50px apart, with strokeStyle = 'rgb(180,180,180)'
//Hint: use context2D.beginPath and context2D path commands within two for... loops
function grid(){
	ctx.strokeStyle = 'rgb(180, 180, 180)';
	ctx.lineWidth = 0.25;

	for (var i = 50; i <= width; i += 50){ // vertical lines
		ctx.beginPath();
		ctx.moveTo(i,0);
		ctx.lineTo(i,height);
		ctx.stroke();
	}
	for (var i = 50; i <= width; i += 50){ // horizontal lines
		ctx.beginPath();
		ctx.moveTo(0,i);
		ctx.lineTo(width,i);
		ctx.stroke();
	}
}

grid();

//Part 4: Draw a filled red rectangle at (50,50), with width = 50 and height = 50
//Draw a rectangle with red border at (150,50), with width = 50 and height = 50
//Hint: use context2D.fillRect and context2D.strokeRect

// red filled rect
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillRect(50, 50, 50, 50);

// red outlined rect
ctx.strokeStyle = 'rgb(255, 0, 0)';
ctx.strokeRect(150, 50, 50, 50);


// Part 5: Draw a series of circles and lines using the context2D path commands, as shown

ctx.beginPath();
ctx.arc(100,200,50,0,Math.PI*2);

ctx.save();

ctx.globalAlpha = .5;
ctx.fill();

ctx.restore();

ctx.beginPath();
ctx.arc(400,200,50,0,Math.PI*2);
ctx.moveTo(700+50,200);
ctx.arc(700,200,50,0,Math.PI*2);

ctx.strokeStyle = 'rgb(255, 0, 0)';
ctx.stroke();

// the quadratic curves
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.quadraticCurveTo(250, 100, 400, 200); //quadraticCurveTo(cpx,cpy,x,y)
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 200);
ctx.quadraticCurveTo(550, 300, 700, 200); //quadraticCurveTo(cpx,cpy,x,y)
ctx.stroke();


// Part 6: Label each circle with coordinates
// Hint: context2D.fillText

ctx.fillStyle = 'rgba(0, 0, 0, .5)';
ctx.fillText("(100,200)",100,200);
ctx.fillText("(400,200)",400,200);
ctx.fillText("(700,200)",700,200);


// Part 7: append a new <canvas> element under <div id='plot2'>, and copy the content of the first canvas onto it

var canvas2 = d3.select('#plot2').append('canvas')
	.attr('width', width)
	.attr('height', height)
	.node();

var ctx2 = canvas2.getContext('2d');
ctx2.globalAlpha = 1;
ctx2.drawImage(canvas, 0, 0);
