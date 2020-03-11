var data;

fetch("http://quotes.rest/qod.json")
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
        document.getElementById("dailyQuote").innerHTML = data.contents.quotes[0].quote;
        document.getElementById("quoteImg").src = data.contents.quotes[0].background;
    });
