function init(){
	
  document.getElementByID('entrybutton').addEventListener('click', function(){
	  
    var textbox = document.getElementById('entryinput').value;
	
	alert('Stephanie H: ' + textbox);

    document.getElementById('textoutput').innerHTML = textbox.value;
	
  });
}  
  button.addEventListener('click', showMeText);
  }

window.addEventListener('load', init);
