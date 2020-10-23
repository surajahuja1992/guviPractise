let rndNum = document.createElement('input');
rndNum.setAttribute('id', 'rndNumId');
rndNum.innerText = '';

let rndBtn = document.createElement('button');

rndBtn.innerHTML = 'Generate Random Number';
rndBtn.setAttribute('onclick', "generateRndNum('')");
document.body.append(rndNum, rndBtn);

var dateCl = document.createElement("input");
dateCl.classList.add('dateCls');
dateCl.setAttribute("type", "date");

let dateDiff = document.createElement('input');
dateDiff.setAttribute('id', 'dateDiff');
dateDiff.innerText = '';

function generateRndNum(){
    var rndNum=[];
    rndNum = Math.floor(10000000 + Math.random() * 90000000);
    document.getElementById('rndNumId').innerText = rndNum;
}
function readyFn(jQuery) {

    $("body").on("focus", ".dateCls", function(){
        $(this).bootstrapMaterialDatePicker({
        switchOnClick: true,
        clearButton:true,
        time: false,
        format : 'DD-MM-YYYY',
        placeholder : 'DD-MM-YYYY',
        weekStart : 0,
        maxDate : new Date() 
        });
    });

    $(".dateCls").datepicker({
        onSelect: getAge=()=>{
            alert("Inside get age");
            var today = new Date();
            var birthDate = new Date(guardian_dob.split("-").reverse().join("-"));
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age = age - 1;
            }
        }
    });
}
