var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var blue = "#0000FF";
var red = "#FF0000";
var green = "#00FF00";
var black = "#FFFFFF";
var white = "#000000";
var random;


function color(){
for (var i = 0; i < 1; i++) {
	if(Math.round(Math.random()*4) === 0){
		return blue;
	}else if(Math.round(Math.random()*4) === 1){
		return red;
	}else if(Math.round(Math.random()*4) === 2){
		return green;
	}else if(Math.round(Math.random()*4) === 3){
		return black;
	}else if(Math.round(Math.random()*4) === 4){
		return white;
	}
  }
}

for (var i = 0; i < 501; i+=50){
 	for(var j = 50; j < 801; j+=50) {
		ctx.fillStyle = color();
		ctx.fillRect(j, i, 50, 50);
		ctx.fillStyle = color();
		ctx.fillRect(i, j, 50, 50);
	};
};



