var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");
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
drawBar(context, 75, 75, 75, 375, "#05668D");
drawBar(context, 175, 300, 75, 150, "#028090");
drawBar(context, 275, 200, 75, 250, "#00A896");
drawBar(context, 375, 150, 75, 300, "#02C39A");
writeWords(context, "Thing1", 110, 70);
writeWords(context, "Thing2", 210, 295);
writeWords(context, "Thing3", 310, 195);
writeWords(context, "Thing4", 410, 145);
writeWords(context, "X Axis", 262.5, 495);
writeWords(context, "Y Axis", 25, 250);