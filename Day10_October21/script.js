let row = document.querySelector('.row');
let result = document.createElement('div');
result.classList.add('result');
result.innerHTML = `
    <div class="sec-1 num" id="inputs">0 =</div>
    <div class="sec-1 res" id="output">0</div>
`;
let keys = document.createElement('div');
keys.classList.add('keys');
keys.innerHTML = `
    <button class="bold" onclick="calculate('%')" id="btn-4">%</button>
    <button class="bold" onclick="clearFun('cls')" id="btn-8">CE</button>
    <button class="bold" onclick="clearFun('all')" id="btn-7">C</button>
    <button class="bold" onclick="calculate('BS')" id="btn-9">&#9224;</button>
    <button onclick='calculate(9)'>9</button>
    <button onclick='calculate(8)'>8</button>
    <button onclick='calculate(7)'>7</button>
    <button class="bold" onclick="calculate('/')" id="btn-5">&#xF7;</button>
    <button onclick='calculate(6)'>6</button>
    <button onclick='calculate(5)'>5</button>
    <button onclick='calculate(4)'>4</button>
    <button class="bold" onclick="calculate('*')" id="btn-6">&#215;</button>
    <button onclick='calculate(3)'>3</button>
    <button onclick='calculate(2)'>2</button>
    <button onclick='calculate(1)'>1</button>
    <button class="bold" onclick="calculate('-')" id="btn-2">-</button>
    <button onclick='calculate(0)'>0</button>
    <button class="bold" onclick="calculate('.')" id="btn-1">.</button>
    <button class="equal" onclick="calculate('=')" id="btn-10">=</button>
    <button class="bold" onclick="calculate('+')" id="btn-3">+</button>
`;
row.append(result, keys);

let exp = '';
calculate = (key) => {
    // console.log(key,exp);
    if (key == '=') {
        try {
            document.getElementById('output').innerText = eval(exp);
        } catch (error) {
            alert(`${exp}  is Invalid Expression`);
        }
    } else if (key == 'BS') {
        if (exp != '') {
            exp = exp.slice(0, (exp.length) - 1);
            if (exp == '') {
                clearFun('cls');
            }
        }
    } else {
        exp += key;
    }

    if (exp != '')
        document.getElementById('inputs').innerText = exp;
}

clearFun = (event) => {
    if (event == 'cls') {
        exp = '';
        document.getElementById('inputs').innerText = '0 =';
        document.getElementById('output').innerText = '0';
    }
}

window.onkeydown = (keyPress) => {

    if (keyPress.keyCode == 13){
        calculate('=');
    }

    else if(keyPress.keyCode == 8){
        calculate('BS');
    }

    else if ((keyPress.key >= 0 && keyPress.key <= 9) ||
        keyPress.key <= '%' || keyPress.key <= '/' ||
        keyPress.key <= '*' || keyPress.key <= '-' ||
        keyPress.key <= '+') {

        calculate(keyPress.key);
    }

}