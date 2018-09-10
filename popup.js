chrome.browserAction.onClicked.addListener(function(){
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    var request = "https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20180909T220155Z.87ac4f1b8d1a72e2.22505d83d95f0580847866bfefe1d0c7f5bd1087&lang=en-ru&text=egg"+text;

    tt = request.concat(text);

    alert(range);   
 });

 document.addEventListener('DOMContentLoaded', function () {
    window.onload=document.getElementById("button").addEventListener("click",function GetSelectedText () {
        if (window.getSelection) {  
            var range = window.getSelection ();

            var url = "https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20180909T220155Z.87ac4f1b8d1a72e2.22505d83d95f0580847866bfefe1d0c7f5bd1087&lang=en-en&text=book";
           // var word = "book";
           // var total = url + word;
            $.getJSON(url, function( data ) {
                var x=JSON.stringify(data);
                var parsedData = JSON.parse(x);
                var cities = parsedData.def[0];
                var city = JSON.stringify(cities);


                alert (city);
            //   document.getElementById("button").innerHTML = JSON.stringify(data);

            });

            alert (range.toString ());
     } 
    });
});
