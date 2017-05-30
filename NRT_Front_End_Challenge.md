# Challenge: Create a functioning prototype
The goal of this challenge is to show that you can take a mock up given by our UX Designers and convert it into a working prototype.  In this prototype you should showcase what you know about HTML, CSS, and JavaScript.

 

## Sketch mock up
You can find the UX Designer's Sketch mock up [here](https://sketch.cloud/s/d3z9/all/page-1/test-page)

## Header and Footer
These are meant to be placeholders for future content.  The header should dock to the top of the page and not scroll with the content.

## Property Details
Property detail panels are meant to show responsive layout.

Use the following URLs for the photos

1. `https://cdn.cbhomes.com/s3/mediasvc-prd/properties/D3f26b84bb2d45C-4826692.jpg`
2. `https://cdn.cbhomes.com/s3/mediasvc-prd/properties/Dd488809d60a4d9-4813192.jpg`
3. `https://cdn.cbhomes.com/s3/mediasvc-prd/properties/f841597a433B479-4796453.jpg`

The CDN supports query string parameters to deliver the photo in preset sizes.  To access the present, append `?preset=lmain` to the query string, where `lmain` can be replaced with any of the following;

1. `trim` = full size with bordering white-space cropped.
2. `lmain` = ? x 343 - The photo is re-sized to a height of 343 and not cropped, so will be different widths depending on the original.
3. `lresult` = ? x 180 - The photo is re-sized to a height of 180 and not cropped, so will be different widths depending on the original.
4. `lcarouselcrop` = 270 x 180 - the photo is re-sized and center cropped to fit
5. `lcardcrop` = 122 x 90 - the photo is re-sized and center cropped to fit

Use these presets as you see fit.

## Weather
Weather section is to demonstrate calling an API.  

When the Submit button is clicked, the value of the zip code input should be used to query the OpenWeatherMap API for the current weather in that zip code.
`http://api.openweathermap.org/data/2.5/weather?zip={zipCode},us`

When the response is received from OpenWeatherMap, display the temperature in Fahrenheit followed by the weather description and icon below the input.  

To get the icon, use the URL `http://openweathermap.org/img/w/{data.weather[0].icon}.png`

OpenWeatherMap defaults to returning the temperature in Kelvin.  To convert it to Fahrenheit use formula `var F = ((K-273.15)*1.8)+32` 

## Schedule Appointment
The Schedule Appointment section is to show form validation skills.  Clicking the submit button should validate the input of each field and display user feedback for success or failure.  Only the last name is optional.  When the submit button is clicked, the code should simulate a wait of 3 seconds and display some user feedback that processing is happening.  If the form was valid, after the processing time, the form should be replaced with the words "Thank you!"

## Google Fonts
You can use `<link href="https://fonts.googleapis.com/css?family=Hind+Siliguri:300|Montserrat:500" rel="stylesheet">` to get the needed fonts (see notes in Sketch mock up).

## Extra Points
Using SCSS for your styles.  Demonstrating animations or transitions on the page, such as having the header shrink to 50% of its original size as you scroll down in a smooth effect or implementing float labels in the form.  If there are any tricks you think would show off what you can do, please feel free to embellish our mock up.

## Submitting your solution
Your solution can be submitted by hosting it on GitHub, or in an online editor like codepen.io and giving us a link. You may also email your files in a ZIP archive.

If you have any questions about the challenge, please email Dennis Allen at [dallen@nrtwebservices.com](mailto:Dennis%20D.%20Allen%20%3cdallen@nrtwebservices.com%3e?Subject=NRT%20Front-End%20Code%20Challenge) 
 