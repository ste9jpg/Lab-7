function init(){
  var entrybuttonDiv = document.getElementById('entrybutton');
  
  function showMeText(){
    var textbox = document.getElementById('entryinput');
	
	alert('Stephanie H: ' + textbox);

    document.getElementById('textoutput').innerHTML = textbox;
	
  });
}  

window.addEventListener('load', init);