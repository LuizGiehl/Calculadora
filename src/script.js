function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    
    document.getElementById('resultado').innerHTML = numero + num;
    const conta = document.getElementById('resultado').innerHTML;
    const ultNum = conta.slice(-1);
    
    var menos = document.getElementById('menos');
    var mais = document.getElementById('mais');
    var vezes = document.getElementById('vezes');
    var divi = document.getElementById('divi');
    var ponto = document.getElementById('ponto');
    
    if(ultNum === '/' || ultNum === '*' || ultNum === '-' || ultNum === '+' || ultNum === '.') {

        divi.removeAttribute('onclick');
        mais.removeAttribute('onclick');
        menos.removeAttribute('onclick');
        vezes.removeAttribute('onclick');
        ponto.removeAttribute('onclick');
    }
    else if(ultNum != '/' && ultNum != '*' && ultNum != '-' && ultNum != '+' && ultNum != '.'){
        divi.setAttribute('onclick', "insert('/')");
        mais.setAttribute('onclick', "insert('+')");
        menos.setAttribute('onclick', "insert('-')");
        vezes.setAttribute('onclick', "insert('*')");
        ponto.setAttribute('onclick', "insert('.')")
        
    };
    
    console.log(divi);
    console.log(vezes);
    console.log(mais);
    console.log(menos);
    console.log(ultNum)
    
};

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
    divi.setAttribute('onclick', "insert('/')");
    mais.setAttribute('onclick', "insert('+')");
    menos.setAttribute('onclick', "insert('-')");
    vezes.setAttribute('onclick', "insert('*')");
    ponto.setAttribute('onclick', "insert('.')")
    
};

function clean() {
    document.getElementById('resultado').innerHTML = '';
};


function calc() {
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    if(resultado  === '') {
        window.alert("VERIFIQUE SE SEUS NUMEROS ESTÃO CORRETOS");
    }
};