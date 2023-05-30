let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('buttons'));
buttons.map(button =>{
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
        
    })
})
