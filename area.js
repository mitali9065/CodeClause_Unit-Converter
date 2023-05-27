var input_3=document.getElementById('input_3');
var result_3=document.getElementById('result_3');
var inputType_3=document.getElementById('inputType_3');
var resultType_3=document.getElementById('resultType_3');
var inputTypeValue_3 , resultTypeValue_3;
input_3.addEventListener("keyup",myResult);
inputType_3.addEventListener("change",myResult);
resultType_3.addEventListener("change",myResult);
inputTypeValue_3=inputType_3.value;
resultTypeValue_3=resultType_3.value;
function myResult(){
    inputTypeValue_3=inputType_3.value;
    resultTypeValue_3=resultType_3.value;
    if(inputTypeValue_3=="Square Meter" && resultTypeValue_3=="Square Meter")
    {
        result_3.value=(input_3.value);
    }
    else if(inputTypeValue_3=="Square Meter" && resultTypeValue_3=="Square Kilometer")
    { result_3.value=Number(input_3.value)*0.000001;

    }
    else if(inputTypeValue_3=="Square Meter" && resultTypeValue_3=="Square Centimeter")
    { result_3.value=Number(input_3.value)*10000;

    }
    else if(inputTypeValue_3=="Square Meter" && resultTypeValue_3=="Square Millimeter")
    { result_3.value=Number(input_3.value)*1000000;

    }
    else if(inputTypeValue_3=="Square Meter" && resultTypeValue_3=="Square Micrometer")
    { result_3.value=Number(input_3.value)*1000000000000;

    }
    else if(inputTypeValue_3=="Square Meter" && resultTypeValue_3=="Hectare")
    { result_3.value=Number(input_3.value)*0.0001;

    }
    else if(inputTypeValue_3=="Square Meter" && resultTypeValue_3=="Square Yard")
    { result_3.value=Number(input_3.value)*1.1959900463;

    }
    else if(inputTypeValue_3=="Square Meter" && resultTypeValue_3=="Square Foot")
    { result_3.value=Number(input_3.value)*10.763910417;

    }
    else if(inputTypeValue_3=="Square Meter" && resultTypeValue_3=="Square Inch")
    { result_3.value=Number(input_3.value)*1550.0031;

    }





    if(inputTypeValue_3=="Square Kilometer" && resultTypeValue_3=="Square Meter")
    {
        result_3.value=Number(input_3.value)*1000000;
    }
    else if(inputTypeValue_3=="Square Kilometer " && resultTypeValue_3=="Square Kilometer")
    { result_3.value=(input_3.value);

    }
    else if(inputTypeValue_3=="Square Kilometer" && resultTypeValue_3=="Square Centimeter")
    { result_3.value=Number(input_3.value)*10000000000;

    }
    else if(inputTypeValue_3=="Square Kilometer" && resultTypeValue_3=="Square Millimete")
    { result_3.value=Number(input_3.value)*1000000000000;

    }
    else if(inputTypeValue_3=="Square Kilometer" && resultTypeValue_3=="Square Micrometer")
    { result_3.value=Number(input_3.value)*1000000000000000000;

    }
    else if(inputTypeValue_3=="Square Kilometer" && resultTypeValue_3=="Hectare")
    { result_3.value=Number(input_3.value)*100;

    }
    else if(inputTypeValue_3=="Square Kilometer" && resultTypeValue_3=="Square Yard")
    { result_3.value=Number(input_3.value)*1195990.0463;

    }
    else if(inputTypeValue_3=="Square Kilometer" && resultTypeValue_3=="Square Foot")
    { result_3.value=Number(input_3.value)*10763910.417;

    }
    else if(inputTypeValue_3=="Square Kilometer" && resultTypeValue_3=="Square Inch")
    { result_3.value=Number(input_3.value)*1550003100;

    }




    
    if(inputTypeValue_3=="Square Centimeter" && resultTypeValue_3=="Square Meter")
    {
        result_3.value=Number(input_3.value)*0.0001;
    }
    else if(inputTypeValue_3=="Square Centimeter" && resultTypeValue_3=="Square Kilometer")
    { 
        result_3.value=Number(input_3.value)*1.E-10;

    }
    else if(inputTypeValue_3=="Square Centimeter" && resultTypeValue_3=="Square Centimeter")
    { result_3.value=(input_3.value);

    }
    else if(inputTypeValue_3=="Square Centimeter" && resultTypeValue_3=="Square Millimeter")
    { 
        result_3.value=Number(input_3.value)*100;

    }
    else if(inputTypeValue_3=="Square Centimeter" && resultTypeValue_3=="Square Micrometer")
    { result_3.value=Number(input_3.value)*100000000;

    }
    else if(inputTypeValue_3=="Square Centimeter" && resultTypeValue_3=="Hectare")
    { result_3.value=Number(input_3.value)*1.E-8;

    }
    else if(inputTypeValue_3=="Square Centimeter" && resultTypeValue_3=="Square Yard")
    { result_3.value=Number(input_3.value)*0.000119599;

    }
    else if(inputTypeValue_3=="Square Centimeter" && resultTypeValue_3=="Square Foot")
    { result_3.value=Number(input_3.value)*0.001076391;

    }
    else if(inputTypeValue_3=="Square Centimeter" && resultTypeValue_3=="Square Inch")
    { result_3.value=Number(input_3.value)*0.15500031;

    }




    
    if(inputTypeValue_3=="Square Millimeter" && resultTypeValue_3=="Square Meter")
    {
        result_3.value=Number(input_3.value)*0.000001;
    }
    else if(inputTypeValue_3=="Square Millimeter" && resultTypeValue_3=="Square Kilometer")
    { 
        result_3.value=Number(input_3.value)*1.E-12;

    }
    else if(inputTypeValue_3=="Square Millimeter" && resultTypeValue_3=="Square Centimeter")
    { result_3.value=Number(input_3.value)*0.01;

    }
    else if(inputTypeValue_3=="Square Millimeter" && resultTypeValue_3=="Square Millimeter")
    { 
        result_3.value=(input_3.value);

    }
    else if(inputTypeValue_3=="Square Millimeterr" && resultTypeValue_3=="Square Micrometer")
    { result_3.value=Number(input_3.value)*1000000;

    }
    else if(inputTypeValue_3=="Square Millimeter" && resultTypeValue_3=="Hectare")
    { result_3.value=Number(input_3.value)*9.999999999E-11;

    }
    else if(inputTypeValue_3=="Square Millimeter" && resultTypeValue_3=="Square Yard")
    { result_3.value=Number(input_3.value)*0.000001196;

    }
    else if(inputTypeValue_3=="Square Millimeter" && resultTypeValue_3=="Square Foot")
    { result_3.value=Number(input_3.value)*0.0000107639;

    }
    else if(inputTypeValue_3=="Square Millimeter" && resultTypeValue_3=="Square Inch")
    { result_3.value=Number(input_3.value)*0.0015500031;

    }





    
    if(inputTypeValue_3=="Square Micrometer" && resultTypeValue_3=="Square Meter")
    {
        result_3.value=Number(input_3.value)*1.E-12;
    }
    else if(inputTypeValue_3=="Square Micrometer" && resultTypeValue_3=="Square Kilometer")
    { 
        result_3.value=Number(input_3.value)*1.E-18;

    }
    else if(inputTypeValue_3=="Square Micrometer" && resultTypeValue_3=="Square Centimeter")
    { result_3.value=Number(input_3.value)*9.999999999E-9;

    }
    else if(inputTypeValue_3=="Square Micrometer" && resultTypeValue_3=="Square Millimeter")
    { 
        result_3.value=Number(input_3.value)*0.000001;

    }
    else if(inputTypeValue_3=="Square Micrometer" && resultTypeValue_3=="Square Micrometer")
    { result_3.value=(input_3.value);

    }
    else if(inputTypeValue_3=="Square Micrometer" && resultTypeValue_3=="Hectare")
    { result_3.value=Number(input_3.value)*1.E-16;

    }
    else if(inputTypeValue_3=="Square Micrometer" && resultTypeValue_3=="Square Yard")
    { result_3.value=Number(input_3.value)*1.195990046E-12;

    }
    else if(inputTypeValue_3=="Square Micrometer" && resultTypeValue_3=="Square Foot")
    { result_3.value=Number(input_3.value)*1.076391041E-11;

    }
    else if(inputTypeValue_3=="Square Micrometer" && resultTypeValue_3=="Square Inch")
    { result_3.value=Number(input_3.value)*1.5500031E-9;

    }






    
    if(inputTypeValue_3=="Hectare" && resultTypeValue_3=="Square Meter")
    {
        result_3.value=Number(input_3.value)*10000;
    }
    else if(inputTypeValue_3=="Hectare" && resultTypeValue_3=="Square Kilometer")
    { 
        result_3.value=Number(input_3.value)*0.01;

    }
    else if(inputTypeValue_3=="Hectare" && resultTypeValue_3=="Square Centimeter")
    { result_3.value=Number(input_3.value)*100000000;

    }
    else if(inputTypeValue_3=="Hectare" && resultTypeValue_3=="Square Millimeter")
    { 
        result_3.value=Number(input_3.value)*10000000000;

    }
    else if(inputTypeValue_3=="Hectare" && resultTypeValue_3=="Square Micrometer")
    { result_3.value=Number(input_3.value)*10000000000000000;

    }
    else if(inputTypeValue_3=="Hectare" && resultTypeValue_3=="Hectare")
    { result_3.value=(input_3.value);

    }
    else if(inputTypeValue_3=="Hectare" && resultTypeValue_3=="Square Yard")
    { result_3.value=Number(input_3.value)*11959.900463;

    }
    else if(inputTypeValue_3=="Hectare" && resultTypeValue_3=="Square Foot")
    { result_3.value=Number(input_3.value)*107639.10417;

    }
    else if(inputTypeValue_3=="Hectare" && resultTypeValue_3=="Square Inch")
    { result_3.value=Number(input_3.value)*15500031;

    }






    
    if(inputTypeValue_3=="Square Yard" && resultTypeValue_3=="Square Meter")
    {
        result_3.value=Number(input_3.value)*0.83612736;
    }
    else if(inputTypeValue_3=="Square Yard" && resultTypeValue_3=="Square Kilometer")
    { 
        result_3.value=Number(input_3.value)*8.3612736E-7;

    }
    else if(inputTypeValue_3=="Square Yard" && resultTypeValue_3=="Square Centimeter")
    { result_3.value=Number(input_3.value)*8361.2736;

    }
    else if(inputTypeValue_3=="Square Yard" && resultTypeValue_3=="Square Millimeter")
    { 
        result_3.value=Number(input_3.value)*836127.36;

    }
    else if(inputTypeValue_3=="Square Yard" && resultTypeValue_3=="Square Micrometer")
    { result_3.value=Number(input_3.value)*836127360000;

    }
    else if(inputTypeValue_3=="Square Yard" && resultTypeValue_3=="Hectare")
    { result_3.value=Number(input_3.value)*0.0000836127;

    }
    else if(inputTypeValue_3=="Square Yard" && resultTypeValue_3=="Square Yard")
    { result_3.value=(input_3.value);

    }
    else if(inputTypeValue_3=="Square Yard" && resultTypeValue_3=="Square Foot")
    { result_3.value=Number(input_3.value)*9;

    }
    else if(inputTypeValue_3=="Square Yard" && resultTypeValue_3=="Square Inch")
    { result_3.value=Number(input_3.value)*1296;

    }





    
    if(inputTypeValue_3=="Square Foot" && resultTypeValue_3=="Square Meter")
    {
        result_3.value=Number(input_3.value)*0.09290304;
    }
    else if(inputTypeValue_3=="Square Foot" && resultTypeValue_3=="Square Kilometer")
    { 
        result_3.value=Number(input_3.value)*9.290304E-8;

    }
    else if(inputTypeValue_3=="Square Foot" && resultTypeValue_3=="Square Centimeter")
    { result_3.value=Number(input_3.value)*929.0304;

    }
    else if(inputTypeValue_3=="Square Foot" && resultTypeValue_3=="Square Millimeter")
    { 
        result_3.value=Number(input_3.value)*92903.04;

    }
    else if(inputTypeValue_3=="Square Foot" && resultTypeValue_3=="Square Micrometer")
    { result_3.value=Number(input_3.value)*92903040000;

    }
    else if(inputTypeValue_3=="Square Foot" && resultTypeValue_3=="Hectare")
    { result_3.value=Number(input_3.value)*0.0000092903;

    }
    else if(inputTypeValue_3=="Square Foot" && resultTypeValue_3=="Square Yard")
    { result_3.value=Number(input_3.value)*0.1111111111;

    }
    else if(inputTypeValue_3=="Square Foot" && resultTypeValue_3=="Square Foot")
    { result_3.value=(input_3.value);

    }
    else if(inputTypeValue_3=="Square Foot" && resultTypeValue_3=="Square Inch")
    { result_3.value=Number(input_3.value)*144;

    }






    
    if(inputTypeValue_3=="Square Inch" && resultTypeValue_3=="Square Meter")
    {
        result_3.value=Number(input_3.value)*0.00064516;
    }
    else if(inputTypeValue_3=="Square Inch" && resultTypeValue_3=="Square Kilometer")
    { 
        result_3.value=Number(input_3.value)*6.4516E-10;

    }
    else if(inputTypeValue_3=="Square Inch" && resultTypeValue_3=="Square Centimeter")
    { result_3.value=Number(input_3.value)*6.4516;

    }
    else if(inputTypeValue_3=="Square Inch" && resultTypeValue_3=="Square Millimeter")
    { 
        result_3.value=Number(input_3.value)*645.16;

    }
    else if(inputTypeValue_3=="Square Inch" && resultTypeValue_3=="Square Micrometer")
    { result_3.value=Number(input_3.value)*645160000;

    }
    else if(inputTypeValue_3=="Square Inch" && resultTypeValue_3=="Hectare")
    { result_3.value=Number(input_3.value)*6.4516E-8;

    }
    else if(inputTypeValue_3=="Square Inch" && resultTypeValue_3=="Square Yard")
    { result_3.value=Number(input_3.value)*0.0007716049;

    }
    else if(inputTypeValue_3=="Square Inch" && resultTypeValue_3=="Square Foot")
    { result_3.value=Number(input_3.value)*0.0069444444;

    }
    else if(inputTypeValue_3=="Square Inch" && resultTypeValue_3=="Square Inch")
    { result_3.value=Number(input_3.value)*1;

    }
   
}