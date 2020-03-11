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

function writeWordsSmall(context, content, X, Y){
    context.save();
    context.textAlign="center";
    context.fillStyle = "#000000";
    context.font = "bold 10px Arial";
    context.fillText(content, X, Y);
    context.restore();  
}

drawLine(context, 50, 0, 50, 450);
drawLine(context, 50, 450, 500, 450);
drawLine(context, 50, 350, 500, 350);
drawLine(context, 50, 250, 500, 250);
drawLine(context, 50, 150, 500, 150);
drawLine(context, 50, 50, 500, 50);
drawBar(context, 75, 75, 75, 375, "#05668D");
drawBar(context, 175, 300, 75, 150, "#028090");
drawBar(context, 275, 200, 75, 250, "#00A896");
drawBar(context, 375, 150, 75, 300, "#02C39A");
writeWords(context, "2016", 110, 70);
writeWords(context, "2017", 210, 295);
writeWords(context, "2018", 310, 195);
writeWords(context, "2019", 410, 145);
writeWords(context, "Years", 262.5, 495);
writeWords(context, "Sales", 25, 25);
writeWordsSmall(context, "1 Bil", 25, 350);
writeWordsSmall(context, "2 Bil", 25, 250);
writeWordsSmall(context, "3 Bil", 25, 150);
writeWordsSmall(context, "4 Bil", 25, 50);