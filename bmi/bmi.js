let $=document
weightInput=$.querySelector('#weight')
heightInput=$.querySelector('#height')
resultBmi=$.querySelector('#result')
categoryBmi=$.querySelector('#category')
weightVal=$.querySelector('#weight-val')
heightVal=$.querySelector('#height-val')

function bmiCalculator(){
    console.log('bmi');
    let weightInputValue=weightInput.value
    let heightInputValue=heightInput.value
    weightVal.innerHTML=weightInputValue+' kg'
    heightVal.innerHTML=heightInputValue+' cm'

    let Bmivalue=(weightInputValue/(Math.pow(heightInputValue/100,2))).toFixed(1)
    resultBmi.innerHTML=Bmivalue
    if(Bmivalue<18.5){
        categoryBmi.innerHTML='under Weight'
        categoryBmi.style.color='red'
    }else if(Bmivalue>=18.5 && Bmivalue<24.9){
        categoryBmi.innerHTML='normal Weight'
        categoryBmi.style.color='green'
    }

else if(Bmivalue>=24.9 && Bmivalue<29.9){
        categoryBmi.innerHTML='Over Weight'
        categoryBmi.style.color='orange'
    }
    else{
        categoryBmi.innerHTML='obese'
        categoryBmi.style.color='yellow'
    }

}
weightInput.addEventListener('input',bmiCalculator)
heightInput.addEventListener('input',bmiCalculator)
