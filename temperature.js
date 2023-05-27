var input_2=document.getElementById('input_2');
var result_2=document.getElementById('result_2');
var inputType_2=document.getElementById('inputType_2');
var resultType_2=document.getElementById('resultType_2');
var inputTypeValue_2 , resultTypeValue_2;
input_2.addEventListener("keyup",myResult);
inputType_2.addEventListener("change",myResult);
resultType_2.addEventListener("change",myResult);
inputTypeValue_2=inputType_2.value;
resultTypeValue_2=resultType_2.value;
function myResult(){
    inputTypeValue_2=inputType_2.value;
    resultTypeValue_2=resultType_2.value;
    if(inputTypeValue_2==="Celsius" && resultTypeValue_2==="Celsius")
    {
        result_2.value=(input_2.value);
    }
    else if(inputTypeValue_2=="Celsius" && resultTypeValue_2=="Kelvin")
    { result_2.value=Number(input_2.value)*274.15;

    }
    else if(inputTypeValue_2=="Celsius" && resultTypeValue_2=="Fahrenheit")
    { result_2.value=Number(input_2.value)*33.8;

    }
    if(inputTypeValue_2==="Kelvin" && resultTypeValue_2==="Celsius")
    {
        result_2.value=Number(input_2.value)*(-272.15);
    }
    else if(inputTypeValue_2=="Kelvin" && resultTypeValue_2=="Kelvin")
    { result_2.value=(input_2.value);

    }
    else if(inputTypeValue_2=="Kelvin" && resultTypeValue_2=="Fahrenheit")
    { result_2.value=Number(input_2.value)*(-457.87);

    }
    if(inputTypeValue_2==="Fahrenheit" && resultTypeValue_2==="Celsius")
    {
        result_2.value=Number(input_2.value)*(-17.222222222);
    }
    else if(inputTypeValue_2=="Fahrenheit" && resultTypeValue_2=="Kelvin")
    { result_2.value=Number(input_2.value)*255.92777778;

    }
    else if(inputTypeValue_2=="Fahrenheit" && resultTypeValue_2=="Fahrenheit")
    { result_2.value=(input_2.value);

    }
    
}