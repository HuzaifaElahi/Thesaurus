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

            var url = "https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20180909T220155Z.87ac4f1b8d1a72e2.22505d83d95f0580847866bfefe1d0c7f5bd1087&lang=en-en&text=";
            var word = "laid";
            var total = url + word;
            $.getJSON(total, function( data ) {
                x=data;
                print(x);
                alert (x);
            });

            alert (range.toString ());
     } 
    });
});
