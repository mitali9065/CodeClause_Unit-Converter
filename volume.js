var input_4=document.getElementById('input_4');
var result_4=document.getElementById('result_4');
var inputType_4=document.getElementById('inputType_4');
var resultType_4=document.getElementById('resultType_4');
var inputTypeValue_4 , resultTypeValue_4;
input_4.addEventListener("keyup",myResult);
inputType_4.addEventListener("change",myResult);
resultType_4.addEventListener("change",myResult);
inputTypeValue_4=inputType_4.value;
resultTypeValue_4=resultType_4.value;
function myResult(){
    inputTypeValue_4=inputType_4.value;
    resultTypeValue_4=resultType_4.value;
    if(inputTypeValue_4=="Cubic Meter" && resultTypeValue_4=="Cubic Meter")
    {
        result_4.value=(input_4.value);
    }
    else if(inputTypeValue_4=="Cubic Meter" && resultTypeValue_4=="Cubic Kilometer")
    { result_4.value=Number(input_4.value)*1.E-9;

    }
    else if(inputTypeValue_4=="Cubic Meter" && resultTypeValue_4=="Cubic Centimeter")
    { result_4.value=Number(input_4.value)*1000000;

    }
    else if(inputTypeValue_4=="Cubic Meter" && resultTypeValue_4=="Cubic Milimeter")
    { result_4.value=Number(input_4.value)*1000000000;

    }
    else if(inputTypeValue_4=="Cubic Meter" && resultTypeValue_4=="Liter")
    { result_4.value=Number(input_4.value)*1000;

    }
    else if(inputTypeValue_4=="Cubic Meter" && resultTypeValue_4=="Milliliter")
    { result_4.value=Number(input_4.value)*1000000;

    }
    else if(inputTypeValue_4=="Cubic Meter" && resultTypeValue_4=="US Gallon")
    { result_4.value=Number(input_4.value)*264.17217686;

    }
    else if(inputTypeValue_4=="Cubic Meter" && resultTypeValue_4=="US Quart")
    { result_4.value=Number(input_4.value)*1056.6887074;

    }
    else if(inputTypeValue_4=="Cubic Meter" && resultTypeValue_4=="US Pint")
    { result_4.value=Number(input_4.value)*2113.3774149;

    }





    if(inputTypeValue_4=="Cubic Kilometer" && resultTypeValue_4=="Cubic Meter")
    {
        result_4.value=Number(input_4.value)*1000000000;
    }
    else if(inputTypeValue_4=="Cubic Kilometer" && resultTypeValue_4=="Cubic Kilometer")
    { result_4.value=(input_4.value);

    }
    else if(inputTypeValue_4=="Cubic Kilometer" && resultTypeValue_4=="Cubic Centimeter")
    { result_4.value=Number(input_4.value)*1000000000000000;

    }
    else if(inputTypeValue_4=="Cubic Kilometer" && resultTypeValue_4=="Cubic Milimeter")
    { result_4.value=Number(input_4.value)*1000000000000000000;

    }
    else if(inputTypeValue_4=="Cubic Kilometer" && resultTypeValue_4=="Liter")
    { result_4.value=Number(input_4.value)*1000000000000;

    }
    else if(inputTypeValue_4=="Cubic Kilometer" && resultTypeValue_4=="Milliliter")
    { result_4.value=Number(input_4.value)*1000000000000000;

    }
    else if(inputTypeValue_4=="Cubic Kilometer" && resultTypeValue_4=="US Gallon")
    { result_4.value=Number(input_4.value)*264172176858;

    }
    else if(inputTypeValue_4=="Cubic Kilometer" && resultTypeValue_4=="US Quart")
    { result_4.value=Number(input_4.value)*1056688707432;

    }
    else if(inputTypeValue_4=="Cubic Kilometer" && resultTypeValue_4=="US Pint")
    { result_4.value=Number(input_4.value)*2113377414864;

    }





    if(inputTypeValue_4=="Cubic Centimeter" && resultTypeValue_4=="Cubic Meter")
    {
        result_4.value=Number(input_4.value)*0.000001;
    }
    else if(inputTypeValue_4=="Cubic Centimeter" && resultTypeValue_4=="Cubic Kilometer")
    { result_4.value=Number(input_4.value)*9.999999999E-16;

    }
    else if(inputTypeValue_4=="Cubic Centimeter" && resultTypeValue_4=="Cubic Centimeter")
    { result_4.value=(input_4.value);

    }
    else if(inputTypeValue_4=="Cubic Centimeter" && resultTypeValue_4=="Cubic Milimeter")
    { result_4.value=Number(input_4.value)*1000;

    }
    else if(inputTypeValue_4=="Cubic Centimeter" && resultTypeValue_4=="Liter")
    { result_4.value=Number(input_4.value)*.001;

    }
    else if(inputTypeValue_4=="Cubic Centimeter" && resultTypeValue_4=="Milliliter")
    { result_4.value=Number(input_4.value)*1;

    }
    else if(inputTypeValue_4=="Cubic Centimeter" && resultTypeValue_4=="US Gallon")
    { result_4.value=Number(input_4.value)*0.0002641722;

    }
    else if(inputTypeValue_4=="Cubic Centimeter" && resultTypeValue_4=="US Quart")
    { result_4.value=Number(input_4.value)*0.0010566887;

    }
    else if(inputTypeValue_4=="Cubic Centimeter" && resultTypeValue_4=="US Pint")
    { result_4.value=Number(input_4.value)*0.0021133774;

    }





    if(inputTypeValue_4=="Cubic Milimeter" && resultTypeValue_4=="Cubic Meter")
    {
        result_4.value=Number(input_4.value)*1.E-9;
    }
    else if(inputTypeValue_4=="Cubic Milimeter" && resultTypeValue_4=="Cubic Kilometer")
    { result_4.value=Number(input_4.value)*1.E-18;

    }
    else if(inputTypeValue_4=="Cubic Milimeter" && resultTypeValue_4=="Cubic Centimeter")
    { result_4.value=Number(input_4.value)*0.001;

    }
    else if(inputTypeValue_4=="Cubic Milimeter" && resultTypeValue_4=="Cubic Milimeter")
    { result_4.value=(input_4.value);

    }
    else if(inputTypeValue_4=="Cubic Milimeter" && resultTypeValue_4=="Liter")
    { result_4.value=Number(input_4.value)*.000001;

    }
    else if(inputTypeValue_4=="Cubic Milimeter" && resultTypeValue_4=="Milliliter")
    { result_4.value=Number(input_4.value)*0.001;

    }
    else if(inputTypeValue_4=="Cubic Milimeter" && resultTypeValue_4=="US Gallon")
    { result_4.value=Number(input_4.value)*2.641721768E-7;

    }
    else if(inputTypeValue_4=="Cubic Milimeter" && resultTypeValue_4=="US Quart")
    { result_4.value=Number(input_4.value)*0.0000010567;

    }
    else if(inputTypeValue_4=="Cubic Milimeter" && resultTypeValue_4=="US Pint")
    { result_4.value=Number(input_4.value)*0.0000021134;

    }





    if(inputTypeValue_4=="Liter" && resultTypeValue_4=="Cubic Meter")
    {
        result_4.value=Number(input_4.value)*0.001;
    }
    else if(inputTypeValue_4=="Liter" && resultTypeValue_4=="Cubic Kilometer")
    { result_4.value=Number(input_4.value)*1.E-12;

    }
    else if(inputTypeValue_4=="Liter" && resultTypeValue_4=="Cubic Centimeter")
    { result_4.value=Number(input_4.value)*1000;

    }
    else if(inputTypeValue_4=="Liter" && resultTypeValue_4=="Cubic Milimeter")
    { result_4.value=Number(input_4.value)*1000000;

    }
    else if(inputTypeValue_4=="Liter" && resultTypeValue_4=="Liter")
    { result_4.value=(input_4.value);

    }
    else if(inputTypeValue_4=="Liter" && resultTypeValue_4=="Milliliter")
    { result_4.value=Number(input_4.value)*1000;

    }
    else if(inputTypeValue_4=="Liter" && resultTypeValue_4=="US Gallon")
    { result_4.value=Number(input_4.value)*0.2641721769;

    }
    else if(inputTypeValue_4=="Liter" && resultTypeValue_4=="US Quart")
    { result_4.value=Number(input_4.value)*1.0566887074;

    }
    else if(inputTypeValue_4=="Liter" && resultTypeValue_4=="US Pint")
    { result_4.value=Number(input_4.value)*2.1133774149;

    }
    






    if(inputTypeValue_4=="Milliliter" && resultTypeValue_4=="Cubic Meter")
    {
        result_4.value=Number(input_4.value)*0.000001;
    }
    else if(inputTypeValue_4=="Milliliter" && resultTypeValue_4=="Cubic Kilometer")
    { result_4.value=Number(input_4.value)*9.999999999E-16;

    }
    else if(inputTypeValue_4=="Milliliter" && resultTypeValue_4=="Cubic Centimeter")
    { result_4.value=(input_4.value);

    }
    else if(inputTypeValue_4=="Milliliter" && resultTypeValue_4=="Cubic Milimeter")
    { result_4.value=Number(input_4.value)*1000;

    }
    else if(inputTypeValue_4=="Milliliter" && resultTypeValue_4=="Liter")
    { result_4.value=Number(input_4.value)*.001;

    }
    else if(inputTypeValue_4=="Milliliter" && resultTypeValue_4=="Milliliter")
    { result_4.value=Number(input_4.value)*1;

    }
    else if(inputTypeValue_4=="Milliliter" && resultTypeValue_4=="US Gallon")
    { result_4.value=Number(input_4.value)*0.0002641722;

    }
    else if(inputTypeValue_4=="Milliliter" && resultTypeValue_4=="US Quart")
    { result_4.value=Number(input_4.value)*0.0010566887;

    }
    else if(inputTypeValue_4=="Milliliter" && resultTypeValue_4=="US Pint")
    { result_4.value=Number(input_4.value)*0.0021133774;

    }





    if(inputTypeValue_4=="US Gallon" && resultTypeValue_4=="Cubic Meter")
    {
        result_4.value=Number(input_4.value)*0.00378541;
    }
    else if(inputTypeValue_4=="US Gallon" && resultTypeValue_4=="Cubic Kilometer")
    { result_4.value=Number(input_4.value)*3.78541E-12;

    }
    else if(inputTypeValue_4=="US Gallon" && resultTypeValue_4=="Cubic Centimeter")
    { result_4.value=Number(input_4.value)*3785.41;

    }
    else if(inputTypeValue_4=="US Gallon" && resultTypeValue_4=="Cubic Milimeter")
    { result_4.value=Number(input_4.value)*3785410;

    }
    else if(inputTypeValue_4=="US Gallon" && resultTypeValue_4=="Liter")
    { result_4.value=Number(input_4.value)*3.78541;

    }
    else if(inputTypeValue_4=="US Gallon" && resultTypeValue_4=="Milliliter")
    { result_4.value=Number(input_4.value)*3785.41;

    }
    else if(inputTypeValue_4=="US Gallon" && resultTypeValue_4=="US Gallon")
    { result_4.value=Number(input_4.value)*1;

    }
    else if(inputTypeValue_4=="US Gallon" && resultTypeValue_4=="US Quart")
    { result_4.value=Number(input_4.value)*4;

    }
    else if(inputTypeValue_4=="US Gallon" && resultTypeValue_4=="US Pint")
    { result_4.value=Number(input_4.value)*8;

    }





    
    if(inputTypeValue_4=="US Quart" && resultTypeValue_4=="Cubic Meter")
    {
        result_4.value=Number(input_4.value)*0.0009463525;
    }
    else if(inputTypeValue_4=="US Quart" && resultTypeValue_4=="Cubic Kilometer")
    { result_4.value=Number(input_4.value)*9.463525E-13;

    }
    else if(inputTypeValue_4=="US Quart" && resultTypeValue_4=="Cubic Centimeter")
    { result_4.value=Number(input_4.value)*946.3525;

    }
    else if(inputTypeValue_4=="US Quart" && resultTypeValue_4=="Cubic Milimeter")
    { result_4.value=Number(input_4.value)*946352.5;

    }
    else if(inputTypeValue_4=="US Quart" && resultTypeValue_4=="Liter")
    { result_4.value=Number(input_4.value)*0.9463525;

    }
    else if(inputTypeValue_4=="US Quart" && resultTypeValue_4=="Milliliter")
    { result_4.value=Number(input_4.value)*946.3525;

    }
    else if(inputTypeValue_4=="US Quart" && resultTypeValue_4=="US Gallon")
    { result_4.value=Number(input_4.value)*0.25;

    }
    else if(inputTypeValue_4=="US Quart" && resultTypeValue_4=="US Quart")
    { result_4.value=Number(input_4.value)*1;

    }
    else if(inputTypeValue_4=="US Quart" && resultTypeValue_4=="US Pint")
    { result_4.value=Number(input_4.value)*2;

    }




     
    if(inputTypeValue_4=="US Pint" && resultTypeValue_4=="Cubic Meter")
    {
        result_4.value=Number(input_4.value)*0.0004731763;
    }
    else if(inputTypeValue_4=="US Pint" && resultTypeValue_4=="Cubic Kilometer")
    { result_4.value=Number(input_4.value)*4.7317625E-13;

    }
    else if(inputTypeValue_4=="US Pint" && resultTypeValue_4=="Cubic Centimeter")
    { result_4.value=Number(input_4.value)*473.17625;

    }
    else if(inputTypeValue_4=="US Pint" && resultTypeValue_4=="Cubic Milimeter")
    { result_4.value=Number(input_4.value)*473176.25;

    }
    else if(inputTypeValue_4=="US Pint" && resultTypeValue_4=="Liter")
    { result_4.value=Number(input_4.value)*0.47317625;

    }
    else if(inputTypeValue_4=="US Pint" && resultTypeValue_4=="Milliliter")
    { result_4.value=Number(input_4.value)*473.17625;

    }
    else if(inputTypeValue_4=="US Pint" && resultTypeValue_4=="US Gallon")
    { result_4.value=Number(input_4.value)*0.125;

    }
    else if(inputTypeValue_4=="US Pint" && resultTypeValue_4=="US Quart")
    { result_4.value=Number(input_4.value)*0.5;

    }
    else if(inputTypeValue_4=="US Pint" && resultTypeValue_4=="US Pint")
    { result_4.value=Number(input_4.value)*1;

    }




}