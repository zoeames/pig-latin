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
	//response.innerHTML = langDirection + ' ' + words;
            toPigLatin(words);
});


var checkFirst = function(first){
      if (first === "a" || first === "e" || first === "i" || first === "o" || first === "u") {
        return true
      }else{
        return false
      }

}

var toPigLatin =function(word){
//check to see if word starts with vowel
    if(checkFirst(word[0]) === true){
        return response.innerHTML = word+'-yay';
    } else {
        //return response.innerHTML ='nope'
        var wordLength = word.length
        var back = word.split("");
        
        console.log(back)
        var front = [];
        for (var i =0; i<wordLength; i++   ){
            if(back[0] == "a" || back[0] == "e" || back[0] == "i" || back[0] == "o" || back[0] == "u" ) {
                return response.innerHTML =back.join("") + '-' +front.join("")+'ay'
                break;
            }else{
                //adds item to array
                front.push(back[0]);
                //remove first item of array
                back.shift();
            }
        }
    }
}

//toPigLatin('hello');
//toPigLatin('cat');
//toPigLatin('fshi');

