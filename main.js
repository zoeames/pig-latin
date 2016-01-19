var button = document.getElementById("clickMe");
var response = document.getElementById("response");
var langDirection;
var words;

button.addEventListener("click", function(e) {
    var inputField = document.getElementById("keypressInput");
    words = inputField.value;
    var languages = document.getElementsByName('conversion_type');

	for (var i = 0, length = languages.length; i < length; i++) {
	    if (languages[i].checked) {
	        langDirection = languages[i].value;
	        break;
	    }
	}
	response.innerHTML = langDirection + ' ' + words;
});



