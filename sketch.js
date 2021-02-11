
let h=0;
let w =0;
console.log(h);
console.log(w);

var pos = 0;
var pos1 = 10;
var posXX = 0;
// setup config variables and start the program
function init() {
  canvas = document.getElementById('myCanvas');

/* Rresize the canvas to occupy the full page, 
   by getting the widow width and height and setting it to canvas*/
 
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  h=canvas.height;
  w = canvas.width;
 
  //canvas = document.getElementById('myCanvas')
 // var heightRatio = .7;
 //width="1024" height="1000"
  //canvas.height = canvas.width * heightRatio;
  
  ctx = canvas.getContext('2d')

  //var s0 = new Rectangle(0, 0, 50, 200, '#93BFBB');
  var s0 = new Rectangle(0, 0, (w* 0.048828125), (h*0.4), '#93BFBB');
  var s1 = new Rectangle(0, ((.44)*h), (w*(50/1025)), (h*0.4), '#93BFBB');
  //var s1 = new Rectangle(0, 220, 50, 200, '#93BFBB');
  var s2 = new Rectangle(0, .87*h, w*0.2, h*(.2), '#F1F2C4');
  //var s2 = new Rectangle(0, 440, 150, 60, '#F1F2C4');
  
  //big blue var s3 = new Rectangle(70, 120, 300, 300, '#2C4373');
  var s3 = new Rectangle(.07*w, h*.22, w*.4, h*.62, '#2C4373');
  
  //var s4 = new Rectangle(70, 0, 300, 100, '#A66963');red top
  var s4 = new Rectangle(.07*w, 0, w*.4, h*.19, '#A66963');

  //var s5 = new Rectangle(390, 0, 100, 300, '#A66963');red side
  var s5 = new Rectangle(.49*w, 0, w*.13, h*.45, '#A66963');

  //var s6 = new Rectangle(170, 440, 200, 60, '#A66963');
  var s6 = new Rectangle(.22*w, .87*h, w*.25, h*.2, '#A66963');
  var s7 = new Rectangle(.49*w, .48*h, w*.13, h*.2, '#93BFBB');//right green
  //var s7 = new Rectangle(390, 320, 140, 200, '#93BFBB');//right green

  //var s8 = new Rectangle(.64*w, 0, 140, 140, '#F1F2C4');//yellow
  var s8 = new Rectangle(.64*w, 0, w*0.15, h*.21, '#F1F2C4');//yellow
  //var s9 = new Rectangle(.64*w, 160*h, 140, 140, '#F1F2C4'); //yellow
  var s9 = new Rectangle(.64*w, .24*h, w*0.15, h*.21, '#F1F2C4'); //yellow

  s0.draw();
  s1.draw();
  s2.draw();
  s3.draw();
  s4.draw();
  s5.draw();
  s6.draw();
  s7.draw();
  s8.draw();
  s9.draw();

  let fontSize= w*(30/1024);
  ctx.font = (fontSize|0) + "px Verdana";
  ctx.fillStyle = "white";
  ctx.fillText("Hello, I am Kelly Henderson.", (w*.5), (h*.80));
  //ctx.fillText("Hello, I am Kelly Henderson.", 580, 380);
  ctx.fillText("I am a full stack developer.", (w*.5), h*.87);

}

// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init)

function move() {
  //text
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let fontSize= w*(30/1024);
  ctx.font = (fontSize|0) + 'px Verdana';
  
  ctx.fillStyle = "white";
  
  //ctx.fillText("Hello, I am Kelly Henderson.", 580, 380);
  //ctx.fillText("I am a full stack developer.", 580, 420);
  ctx.fillText("Hello, I am Kelly Henderson.", (w*.5), (h*.80));
  //ctx.fillText("Hello, I am Kelly Henderson.", 580, 380);
  ctx.fillText("I am a full stack developer.", (w*.5), h*.87);

  //var s0 = new Rectangle(0, pos, 50, 200, '#93BFBB');
  var s0 = new Rectangle(0, pos, (w*0.048828125), (h*0.4), '#93BFBB');
  //var s1 = new Rectangle(posXX, 220, 50, 200, '#93BFBB');
  var s1 = new Rectangle(posXX, ((0.44)*h), (w*(50/1025)), (h*0.4), '#93BFBB');
  //var s2 = new Rectangle(0, 440, 150, 60, '#F1F2C4');
  var s2 = new Rectangle(0, pos+.88*h, w*0.2, h*(.2), '#F1F2C4');
  //var s2 = new Rectangle(0, pos + 440, 150, 60, '#F1F2C4');
  var s3 = new Rectangle(.07*w, h*.22, w*.4, h*.62, '#2C4373');
  
  //var s4 = new Rectangle(70, pos * -1, 300, 100, '#A66963');
  var s4 = new Rectangle(.07*w, pos*-1, w*.4, h*.19, '#A66963');
  
  //var s5 = new Rectangle(390, pos, 100, 300, '#A66963');
  var s5 = new Rectangle(.49*w, pos, w*.13, h*.45, '#A66963');
  
  //var s6 = new Rectangle(.22*w, .87*h, w*.25, h*.2, '#A66963');
  var s6 = new Rectangle((posXX * -1)+(.22*w), .87*h, w*.25, h*.2, '#A66963');
  //var s6 = new Rectangle((posXX * -1) + 170, 440, 200, 60, '#A66963');
  var s7 = new Rectangle(.49*w, ((pos * -1)+.48*h), w*.13, h*.2, '#93BFBB');
  //var s8 = new Rectangle(510, 0, 140, 140, '#F1F2C4');
  var s8 = new Rectangle(.64*w, 0, w*0.15, h*.21, '#F1F2C4');//yellow
  //var s9 = new Rectangle(510 + posXX, 160, 140, 140, '#F1F2C4');
  var s9 = new Rectangle(posXX+(.64*w), .24*h, w*0.15, h*.21, '#F1F2C4'); //yellow

  
  

  s0.draw();
  s1.draw();
  s2.draw();
  s3.draw();
  s4.draw();
  s5.draw();
  s6.draw();
  s7.draw();
  s8.draw();
  s9.draw();
  pos += event.deltaY;
  posXX -= event.deltaY;


}


class Rectangle {
  // you create new Rectangles by calling this as a function
  // these are the arguments you pass in
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0, y = 0,
    width = 0, height = 0,
    fillColor = ''
  ) {
    // ensure the arguments passed in are numbers
    // a bit overkill for this tutorial
    this.x = Number(x)
    this.y = Number(y)
    this.width = Number(width)
    this.height = Number(height)
    this.fillColor = fillColor
  }


  // gets the X position of the left side
  get left() {
    // origin is at top left so just return x
    return this.x
  }

  // get X position of right side
  get right() {
    // x is left position + the width to get end point
    return this.x + this.width
  }

  // get the Y position of top side
  get top() {
    // origin is at top left so just return y
    return this.y
  }

  // get Y position at bottom
  get bottom() {
    return this.y + this.height
  }

  // draw rectangle to screen
  draw() {
    // destructuring
    const {
      x, y, width, height,
      fillColor
    } = this

    // saves the current styles set elsewhere
    // to avoid overwriting them
    ctx.save()

    // set the styles for this shape
    ctx.fillStyle = fillColor

    // create the *path*
    ctx.beginPath()
    ctx.rect(x, y, width, height)

    // draw the path to screen
    ctx.fill()
    //ctx.stroke()

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }
}


