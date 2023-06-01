// pin generator
let generatorBtn = document.getElementById('generate');
let pinDisplay = document.getElementById('pinDisplay');
generatorBtn.addEventListener('click',()=>{
  pinDisplay.innerText = Math.floor(Math.random() * 9000 + 1000);
})

// pin verifications
let tryLeft = document.getElementById('tryCount').innerText;
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('buttons'));
buttons.map(button =>{
    button.addEventListener('click',(e)=>{
        // console.log(e.target.innerText);
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case'Enter ↵':
                if(display.innerText == pinDisplay.innerText){
                    display.innerText = '';
                    alert('Pin Matched... Secret door is opening for you');
                }else{
                    display.innerText = '';
                    alert('Pin didn\'t match. Please try again');
                    if(tryLeft > 1){
                        decries('tryCount');
                    }else{
                        decries('tryCount');
                        disabled('generate');
                        disabled('equal');
                    }
                    console.log(tryLeft);
                }
                break;
            default:
                display.innerText += e.target.innerText;
                break;
        }
    })
})


 //pin matcher
 function decries(id){
    let newCount = tryLeft -= 1;
    document.getElementById(id).innerText = newCount;
 }
 function disabled(id) {
    let button = document.getElementById(id);
    button.disabled = true;
    button.style.cursor = 'not-allowed';
    button.title = 'You have no more try left. Please try again later';
 }
