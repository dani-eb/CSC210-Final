    var images = ["https://i.insider.com/5c1bf5a3bde70f435846d474?width=1067&format=jpeg", 
            "https://ddfc4fe9cdc405be1bb0-b13d90b467bb429b71f0be9d3387d7a1.ssl.cf1.rackcdn.com/162000/162557/web_mer-3d-can-classic-thanksgiving-day.png",
            "https://i.dailymail.co.uk/i/pix/2013/08/09/article-2387608-1B3715B5000005DC-231_634x490.jpg"];
    var changeImages = setInterval(slideShow, 500);
    
    function slideShow(){
        var img = document.getElementById("image1").src = images[0] ? images[1] : images[0];
    }

