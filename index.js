// pin verifications
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('buttons'));
buttons.map(button =>{
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
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
                display.innerText = "submitted";
            default:
                display.innerText += e.target.innerText;
                break;
        }
    })
})

// pin generator
 let generatorBtn = document.getElementById('generate');
 let pinDisplay = document.getElementById('pinDisplay');
 generatorBtn.addEventListener('click',()=>{
   pinDisplay.innerText = Math.floor(Math.random() * 9000 + 1000);
 })