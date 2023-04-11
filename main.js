const display = document.querySelector('#input');
const buttons = document.querySelector('.buttons');
const specicalChars =['%','*','/','-','+','='];
let output = '';


function calculator(value){
    if(!value){
        return;
    }
    else{
        switch(value){
            case '=':
                output = eval(output.replace('%','/100'));
                 break;
            case 'AC':
                output='';
                break;
            case 'DEL':
                output =  output.toString().slice(0,-1);
                break; 
            default: 
            output+=value;
        }
    display.value = output;
}
}

buttons.addEventListener('click',(event)=>{
    event.preventDefault;
    calculator(event.target.dataset.value)
})