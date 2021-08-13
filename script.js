/* .js files add interaction to your website */

//Fact Array 
var FactList = [
  "Protesters had to resort to gathering around the base of Mauna Kea, a sacred volcano, to try and prevent scheduled construction of a telescope there",

  "Hawaii is the most expensive state to live in, according to the 2018 Annual Average Cost of Living Index by the Council for Community and Economic Research. Groceries, for example, cost 60 percent more than the national average.",

  "In a 2019 Hawaii Tourism Authority survey, two-thirds of the residents polled believed that the state government was running the islands for tourists at the expense of locals.",

  "The number of tourists visiting Hawai'i keeps growing, hitting a record high of 10.4 million in 2019.",

  "Because of little rain in August 2021, the government has imposed fines of up to $500 for residents using water for non-essential activities like car washing in Maui, but hotels and the tourism industry goes unchecked.",

];

var factButton = document.getElementById("factButton");
var fact = document.getElementById("fact");
var count = 0;

/*Conditional to account for if the browser doesn't load the button*/
if(factButton) {
factButton.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = FactList[count];
  count++;
  if(count == FactList.length) {
    count = 0;
  }
}
