// Modified from the textbook example by Gregory M. Kapfhammer
// Please add all of the required source code at the TODO markers
//
// Please refer to the following GitHub repository for country flags:
// https://github.com/hjnilsson/country-flags
//
// From this directory you can download images that match the size of those in the book:
// https://github.com/hjnilsson/country-flags/tree/master/png100px
//
// define constructor function for Country objects
function Country(name, iso, capital, population) {
  "use strict";
  // TODO: Add the missing source code in the Country constructor
}
(function() {
  "use strict";
  // TODO: create an array of sample country objects
  var countries = [
  ];
  // TODO: you can also push each new country object onto the end of the array

  // now loop through all this array of country objects
  // note that many web developers do not consider it a best practice
  // to modify the DOM through the document.write method. Please talk
  // with the course instructor to learn more about this idea.
  for (var i = 0; i < countries.length; i++) {
    var c = countries[i];
    // TODO: Add in the source code to start the div marker
    document.write("<img src='img/flags/" + c.iso + ".png' class='boxImg'>");
    document.write("<p>");
    // now loop through all of the details about the country
    for (var propertyName in c) {
      document.write("<strong>");
      document.write(propertyName + ": ");
      document.write("</strong>");
      document.write(c[propertyName]);
      document.write("<br>");
    }
    // TODO: Add in the source code to conclude the div marker
  }
})();
