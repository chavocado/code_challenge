$(document).ready(function() {
// console.log('dom ready');
//global variables
var zip = null;

//monitoring click events on zip input
$('#submit').on('click', {zipCode:zip} , weather);
//monitoring changes to zip input
$('#zip').on('change', function(){
    zip = parseInt($("#zip").val(), 10);
    // console.log(zip);
});

});
// console.log('first');


//get weather function
function weather() {
    //api key
    var key = '&APPID=bafc05054926bcbddaf0ed250d7ef6d5';
    console.log(zip);
    //construct our URL
    var baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
    var query = zip.value + ',us';
    var request = baseURL + query + key;
    console.log(request);
    //weather image request url to be added after success, .then
    $.ajax({
        type: "GET",
        url: encodeURI(request),
        success: function(data) {
            console.log(data);
            //upon success calculate farenheit and append weather values to DOM goes here.
        }
    });
}



//check callback
function searchCallback(data) {
    console.log(data);
}




//Form validation for appointment

//conditional statement that runs through form input values in form object
//upon true clear form DOM and append Thank you template in it's place.
//else alert user fields are required to schedule an appointment.
