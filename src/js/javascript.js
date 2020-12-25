var equation = document.getElementById('Equation');

function reload(){
    var answer = eval(equation.value);
    equation.value = answer;
}

function add_txt(text){
    equation.value += text;
}

function txt_0(){
    equation.value = '0';
}

function remove_txt(){
  var sliceStr = equation.value.slice(0,-1);
  equation.value  = sliceStr;
}
