function init(){
  document.getElementById('entrybutton').addEventListener('click', function(){
    var textbox = document.getElementById('entryinput').value;
    alert('Stephanie H: ' + textbox);
    document.getElementById('textoutput').innerHTML = textbox;
    });
  }

window.addEventListener('load', init);
