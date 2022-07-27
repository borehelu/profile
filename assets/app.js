const optionsbtn = document.querySelectorAll(".options");
const optionsList = document.querySelectorAll(".options__container");

for(let i = 0; i < optionsbtn.length; i++){
    optionsbtn[i].addEventListener('click',function(){
        if(optionsList[i].classList.contains('close')){
            optionsList[i].classList.replace('close','open');
        }else{
            optionsList[i].classList.add('close');
        }
        
    })
}
