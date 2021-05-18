onload = function(){
	if ('speechSynthesis' in window) with(speechSynthesis) {
		let speaker = new SpeechSynthesisUtterance();
		speaker.text = document.querySelector('article').textContent;
		window.speechSynthesis.speak(speaker);
	}else{
		alert("well it works on my machine :[")
	}

}