var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

<<<<<<< HEAD
function drawLine(context, beignX, beginY, endX, endY){
    context.save();
    context.beginPath();
    context.moveTo(beignX, beginY);
    context.lineTo(endX, endY);
    context.stroke();
}

function drawBar(context, upperLeftCornerX, upperLeftCornerY, width, height,color){
    context.save();
    context.fillStyle=color;
    context.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    context.restore();
}

function writeWords(context, content, X, Y){
    context.save();
    context.textAlign="center";
    context.fillStyle = "#000000";
    context.font = "bold 14px Arial";
    context.fillText(content, X, Y);
    context.restore();  
}

drawLine(context, 50, 0, 50, 450);
drawLine(context, 50, 450, 500, 450);
drawBar(context, 75, 75, 75, 375, "#000000");
drawBar(context, 175, 300, 75, 150, "#000000");
drawBar(context, 275, 200, 75, 250, "#000000");
drawBar(context, 375, 150, 75, 300, "#000000");
writeWords(context, "Thing1", 110, 70);
writeWords(context, "Thing2", 210, 295);
writeWords(context, "Thing3", 310, 195);
writeWords(context, "Thing4", 410, 145);
writeWords(context, "X Axis", 262.5, 495);
writeWords(context, "Y Axis", 25, 250);
=======
function drawline(context, start){

}


var barChart = function(){

}
>>>>>>> 7b568fa382dbbe42e20eeca8a31675f73a968d2e
