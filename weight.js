var input_5=document.getElementById('input_5');
var result_5=document.getElementById('result_5');
var inputType_5=document.getElementById('inputType_5');
var resultType_5=document.getElementById('resultType_5');
var inputTypeValue_5 , resultTypeValue_5;
input_5.addEventListener("keyup",myResult);
inputType_5.addEventListener("change",myResult);
resultType_5.addEventListener("change",myResult);
inputTypeValue_5=inputType_5.value;
resultTypeValue_5=resultType_5.value;
function myResult(){
    inputTypeValue_5=inputType_5.value;
    resultTypeValue_5=resultType_5.value;
    if(inputTypeValue_5=="Kilogram" && resultTypeValue_5=="Kilogram")
    {
        result_5.value=Number(input_5.value)*1;
    }
    else if(inputTypeValue_5=="Kilogram" && resultTypeValue_5=="Gram")
    { result_5.value=Number(input_5.value)*1000;

    }
    else if(inputTypeValue_5=="Kilogram" && resultTypeValue_5=="Milligram")
    { result_5.value=Number(input_5.value)*1000000;

    }
    else if(inputTypeValue_5=="Kilogram" && resultTypeValue_5=="Metric Ton")
    { result_5.value=Number(input_5.value)*0.001;

    }
    else if(inputTypeValue_5=="Kilogram" && resultTypeValue_5=="Long Ton")
    { result_5.value=Number(input_5.value)*0.0009842073;

    }
    else if(inputTypeValue_5=="Kilogram" && resultTypeValue_5=="Short Ton")
    { result_5.value=Number(input_5.value)*0.0011023122;

    }
    else if(inputTypeValue_5=="Kilogram" && resultTypeValue_5=="Pound")
    { result_5.value=Number(input_5.value)*2.2046244202;

    }
    else if(inputTypeValue_5=="Kilogram" && resultTypeValue_5=="Ounce")
    { result_5.value=Number(input_5.value)*35.273990723;

    }
    else if(inputTypeValue_5=="Kilogram" && resultTypeValue_5=="Carrat")
    { result_5.value=Number(input_5.value)*5000;

    }






    if(inputTypeValue_5=="Gram" && resultTypeValue_5=="Kilogram")
    {
        result_5.value=Number(input_5.value)*.001;
    }
    else if(inputTypeValue_5=="Gram" && resultTypeValue_5=="Gram")
    { result_5.value=Number(input_5.value)*1;

    }
    else if(inputTypeValue_5=="Gram" && resultTypeValue_5=="Milligram")
    { result_5.value=Number(input_5.value)*1000;

    }
    else if(inputTypeValue_5=="Gram" && resultTypeValue_5=="Metric Ton")
    { result_5.value=Number(input_5.value)*0.000001;

    }
    else if(inputTypeValue_5=="Gram" && resultTypeValue_5=="Short Ton")
    { result_5.value=Number(input_5.value)*0.0000011023;

    }
    else if(inputTypeValue_5=="Gram" && resultTypeValue_5=="Long Ton")
    { result_5.value=Number(input_5.value)*9.842073304E-7;

    }
    else if(inputTypeValue_5=="Gram" && resultTypeValue_5=="Pound")
    { result_5.value=Number(input_5.value)*0.0022046244;

    }
    else if(inputTypeValue_5=="Gram" && resultTypeValue_5=="Ounce")
    { result_5.value=Number(input_5.value)*0.0352739907;

    }
    else if(inputTypeValue_5=="Gram" && resultTypeValue_5=="Carrat")
    { result_5.value=Number(input_5.value)*5;

    }






    if(inputTypeValue_5=="Milligram" && resultTypeValue_5=="Kilogram")
    {
        result_5.value=Number(input_5.value)*.000001;
    }
    else if(inputTypeValue_5=="Milligram" && resultTypeValue_5=="Gram")
    { result_5.value=Number(input_5.value)*0.001;

    }
    else if(inputTypeValue_5=="Milligram" && resultTypeValue_5=="Milligram")
    { result_5.value=Number(input_5.value)*1;

    }
    else if(inputTypeValue_5=="Milligram" && resultTypeValue_5=="Metric Ton")
    { result_5.value=Number(input_5.value)*9.999999999E-10;

    }
    else if(inputTypeValue_5=="Milligram" && resultTypeValue_5=="Short Ton")
    { result_5.value=Number(input_5.value)*1.10231221E-9;

    }
    else if(inputTypeValue_5=="Milligram" && resultTypeValue_5=="Long Ton")
    { result_5.value=Number(input_5.value)*9.842073304E-10;

    }
    else if(inputTypeValue_5=="Milligram" && resultTypeValue_5=="Pound")
    { result_5.value=Number(input_5.value)*0.0000022046;

    }
    else if(inputTypeValue_5=="Milligram" && resultTypeValue_5=="Ounce")
    { result_5.value=Number(input_5.value)*0.000035274;

    }
    else if(inputTypeValue_5=="Milligram" && resultTypeValue_5=="Carrat")
    { result_5.value=Number(input_5.value)*0.005;

    }






    if(inputTypeValue_5=="Metric Ton" && resultTypeValue_5=="Kilogram")
    {
        result_5.value=Number(input_5.value)*1000;
    }
    else if(inputTypeValue_5=="Metric Ton" && resultTypeValue_5=="Gram")
    { result_5.value=Number(input_5.value)*1000000;

    }
    else if(inputTypeValue_5=="Metric Ton" && resultTypeValue_5=="Milligram")
    { result_5.value=Number(input_5.value)*1000000000;

    }
    else if(inputTypeValue_5=="Metric Ton" && resultTypeValue_5=="Metric Ton")
    { result_5.value=Number(input_5.value)*1;

    }
    else if(inputTypeValue_5=="Metric Ton" && resultTypeValue_5=="Short Ton")
    { result_5.value=Number(input_5.value)*1.1023122101;

    }
    else if(inputTypeValue_5=="Metric Ton" && resultTypeValue_5=="Long Ton")
    { result_5.value=Number(input_5.value)*0.9842073304;

    }
    else if(inputTypeValue_5=="Metric Ton" && resultTypeValue_5=="Pound")
    { result_5.value=Number(input_5.value)*2204.6244202;

    }
    else if(inputTypeValue_5=="Metric Ton" && resultTypeValue_5=="Ounce")
    { result_5.value=Number(input_5.value)*35273.990723;

    }
    else if(inputTypeValue_5=="Metric Ton" && resultTypeValue_5=="Carrat")
    { result_5.value=Number(input_5.value)*5000000;

    }






    if(inputTypeValue_5=="Short Ton" && resultTypeValue_5=="Kilogram")
    {
        result_5.value=Number(input_5.value)*907.184;
    }
    else if(inputTypeValue_5=="Short Ton" && resultTypeValue_5=="Gram")
    { result_5.value=Number(input_5.value)*907184;

    }
    else if(inputTypeValue_5=="Short Ton" && resultTypeValue_5=="Milligram")
    { result_5.value=Number(input_5.value)*907184000;

    }
    else if(inputTypeValue_5=="Short Ton" && resultTypeValue_5=="Metric Ton")
    { result_5.value=Number(input_5.value)*0.907184;

    }
    else if(inputTypeValue_5=="Short Ton" && resultTypeValue_5=="Short Ton")
    { result_5.value=Number(input_5.value)*1;

    }
    else if(inputTypeValue_5=="Short Ton" && resultTypeValue_5=="Long Ton")
    { result_5.value=Number(input_5.value)*0.8928571429;

    }
    else if(inputTypeValue_5=="Short Ton" && resultTypeValue_5=="Pound")
    { result_5.value=Number(input_5.value)*2000;

    }
    else if(inputTypeValue_5=="Short Ton" && resultTypeValue_5=="Ounce")
    { result_5.value=Number(input_5.value)*32000;

    }
    else if(inputTypeValue_5=="Short Ton" && resultTypeValue_5=="Carrat")
    { result_5.value=Number(input_5.value)*4535920;

    }





    if(inputTypeValue_5=="Long Ton" && resultTypeValue_5=="Kilogram")
    {
        result_5.value=Number(input_5.value)*1016.04608;
    }
    else if(inputTypeValue_5=="Long Ton" && resultTypeValue_5=="Gram")
    { result_5.value=Number(input_5.value)*1016046.08;

    }
    else if(inputTypeValue_5=="Long Ton" && resultTypeValue_5=="Milligram")
    { result_5.value=Number(input_5.value)*1016046080;

    }
    else if(inputTypeValue_5=="Long Ton" && resultTypeValue_5=="Metric Ton")
    { result_5.value=Number(input_5.value)*1.01604608;

    }
    else if(inputTypeValue_5=="Long Ton" && resultTypeValue_5=="Short Ton")
    { result_5.value=Number(input_5.value)*1.12;

    }
    else if(inputTypeValue_5=="Long Ton" && resultTypeValue_5=="Long Ton")
    { result_5.value=Number(input_5.value)*1;

    }
    else if(inputTypeValue_5=="Long Ton" && resultTypeValue_5=="Pound")
    { result_5.value=Number(input_5.value)*2240;

    }
    else if(inputTypeValue_5=="Long Ton" && resultTypeValue_5=="Ounce")
    { result_5.value=Number(input_5.value)*35840;

    }
    else if(inputTypeValue_5=="Long Ton" && resultTypeValue_5=="Carrat")
    { result_5.value=Number(input_5.value)*5080230.4;

    }








    if(inputTypeValue_5=="Pound" && resultTypeValue_5=="Kilogram")
    {
        result_5.value=Number(input_5.value)*0.453592;
    }
    else if(inputTypeValue_5=="Pound" && resultTypeValue_5=="Gram")
    { result_5.value=Number(input_5.value)*453.592;

    }
    else if(inputTypeValue_5=="Pound" && resultTypeValue_5=="Milligram")
    { result_5.value=Number(input_5.value)*453592;

    }
    else if(inputTypeValue_5=="Pound" && resultTypeValue_5=="Metric Ton")
    { result_5.value=Number(input_5.value)*0.000453592;

    }
    else if(inputTypeValue_5=="Pound" && resultTypeValue_5=="Short Ton")
    { result_5.value=Number(input_5.value)*0.0005;

    }
    else if(inputTypeValue_5=="Pound" && resultTypeValue_5=="Long Ton")
    { result_5.value=Number(input_5.value)*0.0004464286;

    }
    else if(inputTypeValue_5=="Pound" && resultTypeValue_5=="Pound")
    { result_5.value=Number(input_5.value)*1;

    }
    else if(inputTypeValue_5=="Pound" && resultTypeValue_5=="Ounce")
    { result_5.value=Number(input_5.value)*16;

    }
    else if(inputTypeValue_5=="Pound" && resultTypeValue_5=="Carrat")
    { result_5.value=Number(input_5.value)*2267.96;

    }






    if(inputTypeValue_5=="Ounce" && resultTypeValue_5=="Kilogram")
    {
        result_5.value=Number(input_5.value)*0.0283495;
    }
    else if(inputTypeValue_5=="Ounce" && resultTypeValue_5=="Gram")
    { result_5.value=Number(input_5.value)*28.3495;

    }
    else if(inputTypeValue_5=="Ounce" && resultTypeValue_5=="Milligram")
    { result_5.value=Number(input_5.value)*28349.5;

    }
    else if(inputTypeValue_5=="Ounce" && resultTypeValue_5=="Metric Ton")
    { result_5.value=Number(input_5.value)*0.0000283495;

    }
    else if(inputTypeValue_5=="Ounce" && resultTypeValue_5=="Short Ton")
    { result_5.value=Number(input_5.value)*0.00003125;

    }
    else if(inputTypeValue_5=="Ounce" && resultTypeValue_5=="Long Ton")
    { result_5.value=Number(input_5.value)*0.0000279018;

    }
    else if(inputTypeValue_5=="Ounce" && resultTypeValue_5=="Pound")
    { result_5.value=Number(input_5.value)*0.0625;

    }
    else if(inputTypeValue_5=="Ounce" && resultTypeValue_5=="Ounce")
    { result_5.value=Number(input_5.value)*1;

    }
    else if(inputTypeValue_5=="Ounce" && resultTypeValue_5=="Carrat")
    { result_5.value=Number(input_5.value)*141.7475;

    }







    if(inputTypeValue_5=="Carrat" && resultTypeValue_5=="Kilogram")
    {
        result_5.value=Number(input_5.value)*.0002;
    }
    else if(inputTypeValue_5=="Carrat" && resultTypeValue_5=="Gram")
    { result_5.value=Number(input_5.value)*0.2;

    }
    else if(inputTypeValue_5=="Carrat" && resultTypeValue_5=="Milligram")
    { result_5.value=Number(input_5.value)*200;

    }
    else if(inputTypeValue_5=="Carrat" && resultTypeValue_5=="Metric Ton")
    { result_5.value=Number(input_5.value)*2.E-7;

    }
    else if(inputTypeValue_5=="Carrat" && resultTypeValue_5=="Short Ton")
    { result_5.value=Number(input_5.value)*2.20462442E-7;

    }
    else if(inputTypeValue_5=="Carrat" && resultTypeValue_5=="Long Ton")
    { result_5.value=Number(input_5.value)*1.96841466E-7;

    }
    else if(inputTypeValue_5=="Carrat" && resultTypeValue_5=="Pound")
    { result_5.value=Number(input_5.value)*0.0004409249;

    }
    else if(inputTypeValue_5=="Carrat" && resultTypeValue_5=="Ounce")
    { result_5.value=Number(input_5.value)*0.0070547981;

    }
    else if(inputTypeValue_5=="Carrat" && resultTypeValue_5=="Carrat")
    { result_5.value=Number(input_5.value)*1;

    }







   
    
}