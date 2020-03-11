var images = ["https://i.insider.com/5c1bf5a3bde70f435846d474?width=1067&format=jpeg",
    "https://img1.mashed.com/img/gallery/things-you-should-never-order-from-a-chinese-restaurant/-1481303133.jpg",
    "https://i.dailymail.co.uk/i/pix/2013/08/09/article-2387608-1B3715B5000005DC-231_634x490.jpg",
    "https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg"];
var changeImages = setInterval(slideShow, 5000);
var i = 0;
var url = "http://quotes.rest/qod.json";

function slideShow() {
    var img = document.getElementById("image1").src = images[i];
    i += 1;
    if (i == 4) {
        i = 0;
    }
}
