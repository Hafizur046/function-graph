let o = [250, 250];
let X = 10;
let Y = 10;
function yValue(x) {
  // return 3*pow((x + 0.5) , 2) + 1/4;
  //return sin(x)
  return cos(x);
}

function setup() {
  scale(100);
  createCanvas(500, 500);
  background(0);
  function wave(Ygetter) {
    let points = new Array();
    for (i = 0; i < 500; i++) {
      let x = i - o[0];
      points[i] = new Array();
      points[i][0] = x * X + 250;
      points[i][1] = o[1] - Ygetter(x) * Y;
    }
    //console.log(points)
    function paint() {
      stroke(255, 255, 255);
      strokeWeight(1);
      noFill();
      beginShape();
      for (i = 0; i < points.length; i++) {
        vertex(points[i][0], points[i][1]);
        //console.log(points[i][0] , points[i][1])
      }
      endShape();
    }
    paint();
  }
  wave(yValue);
}
function draw() {}
