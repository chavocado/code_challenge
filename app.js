$(document).ready(function() {

});

//get weather function
function weather() {
    //construct our URL
    var baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
    var query = zipCode + ',us';
    var request = baseURL + query;
    console.log(request);

    $.ajax({
        type: "GET",
        url: encodeURI(request),
        dataType: "jsonp",
        crossDomain: true,
        jsonp: 'json_callback',
        success: function(data) {
            console.log(data);
        }
    });
}


//check callback
function searchCallback(data) {
    console.log(data);
}
