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


//alterando cor section
function mudaBackground1() {
  var opcao = document.getElementById('opcp');
  if(opcao.value=='a'){
  document.getElementById("primeira").style.backgroundColor = "red";
}
  else if (opcao.value=='b') {
    document.getElementById("primeira").style.backgroundColor = "green";
  }
    else if (opcao.value=='c') {
        document.getElementById("primeira").style.backgroundColor = "blue";

  }
};

function mudaBackground2() {
  var opcao2 = document.getElementById('opcp2');
  if(opcao2.value=='a'){
  document.getElementById("segunda").style.backgroundColor = "red";
}
  else if (opcao2.value=='b') {
    document.getElementById("segunda").style.backgroundColor = "green";
  }
    else if (opcao2.value=='c') {
        document.getElementById("segunda").style.backgroundColor = "blue";

  }
};

function mudaBackground3() {
  var opcao3 = document.getElementById('opcp3');
  if(opcao3.value=='a'){
  document.getElementById("terceira").style.backgroundColor = "red";
}
  else if (opcao3.value=='b') {
    document.getElementById("terceira").style.backgroundColor = "green";
  }
    else if (opcao3.value=='c') {
        document.getElementById("terceira").style.backgroundColor = "blue";

  }
};
