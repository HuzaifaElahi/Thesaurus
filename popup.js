 document.addEventListener('DOMContentLoaded', function () {
    window.onload=document.getElementById("button").addEventListener("click",function GetSelectedText () {

        //URL template for API to get info
        var url1 = "https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20180909T220155Z.87ac4f1b8d1a72e2.22505d83d95f0580847866bfefe1d0c7f5bd1087&lang=en-en&text=";
        
        //Retrieve word input from user
        var url2 = document.forms["input"]["wordTyped"].value;
        var url = url1+url2;

        //Call API to retrieve info and alert user
        $.getJSON(url, function( data ) {
            var x=JSON.stringify(data);
            var parsedData = JSON.parse(x);
            var cities = parsedData.def[0];
            var city = JSON.stringify(cities);
            if (city != undefined){
            alert (city);
            }
            else{
                alert("Invalid Input!");
            }
        });
    });
}) 
