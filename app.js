var buttonTranslator = document.querySelector("#btn-click");
var textInputValue = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslatedUrl(text) {
  return url + "?" + "text=" + text;
}

function catchEventHandler(error) {
  console.log("Oops! Error occured..." + error);
  alert("Oops! Some error occured. Please, try again after some time");
}

function clickHandler() {
  console.log("Clicked");
  var textInput = textInputValue.value;
  fetch(getTranslatedUrl(textInput))
    .then((reponse) => reponse.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerHTML = translatedText;
    })
    .catch(catchEventHandler);
}

buttonTranslator.addEventListener("click", clickHandler);

// var button = document.querySelector("#btn-click");
// var input = document.querySelector("#text-input");
// var translatedOutput = document.querySelector("#output");

// var url = "https://api.funtranslations.com/translate/minion.json";

// function getTranslatedUrl(text) {
//   return url + "?" + "text=" + text;
// }

// button.addEventListener("click", clickHandler);

// function clickHandler() {
//   console.log("Clicked");
//   var inputText = input.value;
//   fetch(getTranslatedUrl(inputText))
//     .then((response) => response.json())
//     .then((json) => {
//       var translatedOutputAnswer = json.contents.translated;
//       translatedOutput.innerHTML = translatedOutputAnswer;
//     });
// }
