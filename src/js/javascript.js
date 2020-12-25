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