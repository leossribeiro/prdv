function botao(){
    alert("Este é um call-to-action");
  };
function ppgn(){
  if (confirm("Ir para Google.com?"))
    window.location.replace("https://www.google.com.br/");
};

//formulario

var form = document.getElementById('formulario');
var opcao = document.getElementById('opc');

var optionList = document.getElementById('opc').options;
var options = [
  {
    text: 'Opção 1',
    value: 'Value 1'
  },
  {
    text: 'Opção 2',
    value: 'Value 2',
    selected: true
  },
  {
    text: 'Opção 3',
    value: 'Value 3'
  }

];

function myFunction() {
  var node = document.createElement("option");
  var adc = document.createTextNode(document.getElementById('adc').value);
  node.appendChild(adc);
  document.getElementById("opc").appendChild(node);
}

options.forEach(option =>
  optionList.add(new Option(option.text, option.value, option.selected))
);



form.addEventListener('submit', function(e) {

    // impede o envio do form
    e.preventDefault();
});
