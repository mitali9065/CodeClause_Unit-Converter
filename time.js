var input_1=document.getElementById('input_1');
var result_1=document.getElementById('result_1');
var inputType_1=document.getElementById('inputType_1');
var resultType_1=document.getElementById('resultType_1');
var inputTypeValue_1 , resultTypeValue_1;
input_1.addEventListener("keyup",myResult);
inputType_1.addEventListener("change",myResult);
resultType_1.addEventListener("change",myResult);
inputTypeValue_1=inputType_1.value;
resultTypeValue_1=resultType_1.value;
function myResult(){
    inputTypeValue_1=inputType_1.value;
    resultTypeValue_1=resultType_1.value;
    if(inputTypeValue_1==="Second" && resultTypeValue_1==="Second")
    {
        result_1.value=(input_1.value);
    }
    else if(inputTypeValue_1==="Second" && resultTypeValue_1==="Millisecond")
    { result_1.value=Number(input_1.value)*1000;
    }
    else if(inputTypeValue_1=="Second" && resultTypeValue_1=="Microsecond")
    {  result_1.value=Number(input_1.value)*1000000;
    }
    else if(inputTypeValue_1=="Second" && resultTypeValue_1=="Nanosecond")
    { result_1.value=Number(input_1.value)*1000000000;
    }
    else if(inputTypeValue_1=="Second" && resultTypeValue_1=="Picosecond")
    { result_1.value=Number(input_1.value)*1000000000000;
    }
    else if(inputTypeValue_1=="Second" && resultTypeValue_1=="Minute")
    { result_1.value=Number(input_1.value)*0.0166666667;
    }
    else if(inputTypeValue_1=="Second" && resultTypeValue_1=="Hour")
    { result_1.value=Number(input_1.value)*0.0002777778;
    }
    else if(inputTypeValue_1=="Second" && resultTypeValue_1=="Day")
    { result_1.value=Number(input_1.value)*0.0000115741;
    }
    else if(inputTypeValue_1=="Second" && resultTypeValue_1=="Week")
    { result_1.value=Number(input_1.value)*0.0000016534;
    }


    if(inputTypeValue_1==="Millisecond" && resultTypeValue_1==="Second")
    {
        result_1.value=Number(input_1.value)*0.001;
    }
    else if(inputTypeValue_1==="Millisecond" && resultTypeValue_1==="Millisecond")
    { result_1.value=(input_1.value);

    }
    else if(inputTypeValue_1=="Millisecond" && resultTypeValue_1=="Microsecond")
    { result_1.value=Number(input_1.value)*1000;

    }
    else if(inputTypeValue_1=="Millisecond" && resultTypeValue_1=="Nanosecond")
    { result_1.value=Number(input_1.value)*1000000;

    }
    else if(inputTypeValue_1=="Millisecond" && resultTypeValue_1=="Picosecond")
    { result_1.value=Number(input_1.value)*1000000000;

    }

    else if(inputTypeValue_1=="Millisecond" && resultTypeValue_1=="Minute")
    { result_1.value=Number(input_1.value)*0.0000166667;

    }
    else if(inputTypeValue_1=="Millisecond" && resultTypeValue_1=="Hour")
    { result_1.value=Number(input_1.value)*2.777777777E-7;

    }
    else if(inputTypeValue_1=="Millisecond" && resultTypeValue_1=="Day")
    { result_1.value=Number(input_1.value)*1.157407407E-8;

    }
    else if(inputTypeValue_1=="Millisecond" && resultTypeValue_1=="Week")
    { result_1.value=Number(input_1.value)*1.653439153E-9;

    }
    if(inputTypeValue_1==="Microsecond" && resultTypeValue_1==="Second")
    {
        result_1.value=Number(input_1.value)*0.000001;
    }
    else if(inputTypeValue_1==="Microsecond" && resultTypeValue_1==="Millisecond")
    { result_1.value=Number(input_1.value)*0.001;

    }
    else if(inputTypeValue_1=="Microsecond" && resultTypeValue_1=="Microsecond")
    {  result_1.value=(input_1.value);

    }
    else if(inputTypeValue_1=="Microsecond" && resultTypeValue_1=="Nanosecond")
    { result_1.value=Number(input_1.value)*1000;

    }
    else if(inputTypeValue_1=="Microsecond" && resultTypeValue_1=="Picosecond")
    { result_1.value=Number(input_1.value)*1000000;

    }

    else if(inputTypeValue_1=="Microsecond" && resultTypeValue_1=="Minute")
    { result_1.value=Number(input_1.value)*1.666666666E-8;

    }
    else if(inputTypeValue_1=="Microsecond" && resultTypeValue_1=="Hour")
    { result_1.value=Number(input_1.value)*2.777777777E-10;

    }
    else if(inputTypeValue_1=="Microsecond" && resultTypeValue_1=="Day")
    { result_1.value=Number(input_1.value)*1.157407407E-11;

    }
    else if(inputTypeValue_1=="Microsecond" && resultTypeValue_1=="Week")
    { result_1.value=Number(input_1.value)*1.653439153E-12;

    }

    if(inputTypeValue_1==="Nanosecond" && resultTypeValue_1==="Second")
    {
        result_1.value=Number(input_1.value)*1.E-9;
    }
    else if(inputTypeValue_1==="Nanosecond" && resultTypeValue_1==="Millisecond")
    { result_1.value=Number(input_1.value)*.000001;

    }
    else if(inputTypeValue_1=="Nanosecond" && resultTypeValue_1=="Microsecond")
    {  result_1.value=Number(input_1.value)*0.001;

    }
    else if(inputTypeValue_1=="Nanosecond" && resultTypeValue_1=="Nanosecond")
    { result_1.value=(input_1.value);

    }
    else if(inputTypeValue_1=="Nanosecond" && resultTypeValue_1=="Picosecond")
    { result_1.value=Number(input_1.value)*1000;

    }

    else if(inputTypeValue_1=="Nanosecond" && resultTypeValue_1=="Minute")
    { result_1.value=Number(input_1.value)*1.666666666E-11;

    }
    else if(inputTypeValue_1=="Nanosecond" && resultTypeValue_1=="Hour")
    { result_1.value=Number(input_1.value)*2.777777777E-13;

    }
    else if(inputTypeValue_1=="Nanosecond" && resultTypeValue_1=="Day")
    { result_1.value=Number(input_1.value)*1.157407407E-14;

    }
    else if(inputTypeValue_1=="Nanosecond" && resultTypeValue_1=="Week")
    { result_1.value=Number(input_1.value)*1.653439153E-15;

    }
    if(inputTypeValue_1==="Picosecond" && resultTypeValue_1==="Second")
    {
        result_1.value=Number(input_1.value)*1.E-12;
    }
    else if(inputTypeValue_1==="Picosecond" && resultTypeValue_1==="Millisecond")
    { result_1.value=Number(input_1.value)*1.E-9;

    }
    else if(inputTypeValue_1=="Picosecond" && resultTypeValue_1=="Microsecond")
    {  result_1.value=Number(input_1.value)*0.000001;

    }
    else if(inputTypeValue_1=="Picosecond" && resultTypeValue_1=="Nanosecond")
    { result_1.value=Number(input_1.value)*0.001;

    }
    else if(inputTypeValue_1=="Picosecond" && resultTypeValue_1=="Picosecond")
    { result_1.value=(input_1.value);

    }

    else if(inputTypeValue_1=="Picosecond" && resultTypeValue_1=="Minute")
    { result_1.value=Number(input_1.value)*1.666666666E-14;

    }
    else if(inputTypeValue_1=="Picosecond" && resultTypeValue_1=="Hour")
    { result_1.value=Number(input_1.value)*2.777777777E-16;

    }
    else if(inputTypeValue_1=="Picosecond" && resultTypeValue_1=="Day")
    { result_1.value=Number(input_1.value)*1.157407407E-17;

    }
    else if(inputTypeValue_1=="Picosecond" && resultTypeValue_1=="Week")
    { result_1.value=Number(input_1.value)*1.653439153E-18;

    }
    if(inputTypeValue_1==="Minute" && resultTypeValue_1==="Second")
    {
        result_1.value=Number(input_1.value)*60;
    }
    else if(inputTypeValue_1==="Minute" && resultTypeValue_1==="Millisecond")
    { result_1.value=Number(input_1.value)*60000;

    }
    else if(inputTypeValue_1=="Minute" && resultTypeValue_1=="Microsecond")
    {  result_1.value=Number(input_1.value)*60000000;

    }
    else if(inputTypeValue_1=="Minute" && resultTypeValue_1=="Nanosecond")
    { result_1.value=Number(input_1.value)*60000000000;

    }
    else if(inputTypeValue_1=="Minute" && resultTypeValue_1=="Picosecond")
    { result_1.value=Number(input_1.value)*60000000000000;

    }

    else if(inputTypeValue_1=="Minute" && resultTypeValue_1=="Minute")
    { result_1.value=(input_1.value);

    }
    else if(inputTypeValue_1=="Minute" && resultTypeValue_1=="Hour")
    { result_1.value=Number(input_1.value)*0.0166666667;

    }
    else if(inputTypeValue_1=="Minute" && resultTypeValue_1=="Day")
    { result_1.value=Number(input_1.value)*0.0006944444;

    }
    else if(inputTypeValue_1=="Minute" && resultTypeValue_1=="Week")
    { result_1.value=Number(input_1.value)*0.0000992063;

    }
    if(inputTypeValue_1==="Hour" && resultTypeValue_1==="Second")
    {
        result_1.value=Number(input_1.value)*3600;
    }
    else if(inputTypeValue_1==="Hour" && resultTypeValue_1==="Millisecond")
    { result_1.value=Number(input_1.value)*3600000;

    }
    else if(inputTypeValue_1=="Hour" && resultTypeValue_1=="Microsecond")
    {  result_1.value=Number(input_1.value)*3600000000;

    }
    else if(inputTypeValue_1=="Hour" && resultTypeValue_1=="Nanosecond")
    { result_1.value=Number(input_1.value)*3600000000000;

    }
    else if(inputTypeValue_1=="Hour" && resultTypeValue_1=="Picosecond")
    { result_1.value=Number(input_1.value)*3600000000000000;

    }

    else if(inputTypeValue_1=="Hour" && resultTypeValue_1=="Minute")
    { result_1.value=Number(input_1.value)*60;

    }
    else if(inputTypeValue_1=="Hour" && resultTypeValue_1=="Hour")
    { result_1.value=(input_1.value);

    }
    else if(inputTypeValue_1=="Hour" && resultTypeValue_1=="Day")
    { result_1.value=Number(input_1.value)*0.0416666667;

    }
    else if(inputTypeValue_1=="Hour" && resultTypeValue_1=="Week")
    { result_1.value=Number(input_1.value)*0.005952381;

    }
    
    if(inputTypeValue_1==="Day" && resultTypeValue_1==="Second")
    {
        result_1.value=Number(input_1.value)*86400;
    }
    else if(inputTypeValue_1==="Day" && resultTypeValue_1==="Millisecond")
    { result_1.value=Number(input_1.value)*86400000;

    }
    else if(inputTypeValue_1=="Day" && resultTypeValue_1=="Microsecond")
    {  result_1.value=Number(input_1.value)*86400000000;

    }
    else if(inputTypeValue_1=="Day" && resultTypeValue_1=="Nanosecond")
    { result_1.value=Number(input_1.value)*86400000000000;

    }
    else if(inputTypeValue_1=="Day" && resultTypeValue_1=="Picosecond")
    { result_1.value=Number(input_1.value)*86400000000000000;

    }

    else if(inputTypeValue_1=="Day" && resultTypeValue_1=="Minute")
    { result_1.value=Number(input_1.value)*1440;

    }
    else if(inputTypeValue_1=="Day" && resultTypeValue_1=="Hour")
    { result_1.value=Number(input_1.value)*24;
    }
    else if(inputTypeValue_1=="Day" && resultTypeValue_1=="Day")
    { result_1.value=(input_1.value);

    }
    else if(inputTypeValue_1=="Day" && resultTypeValue_1=="Week")
    { result_1.value=Number(input_1.value)*0.1428571429;

    }
    if(inputTypeValue_1==="Week" && resultTypeValue_1==="Second")
    {
        result_1.value=Number(input_1.value)*604800;
    }
    else if(inputTypeValue_1==="Week" && resultTypeValue_1==="Millisecond")
    { result_1.value=Number(input_1.value)*604800000;

    }
    else if(inputTypeValue_1=="Week" && resultTypeValue_1=="Microsecond")
    {  result_1.value=Number(input_1.value)*604800000000;

    }
    else if(inputTypeValue_1=="Week" && resultTypeValue_1=="Nanosecond")
    { result_1.value=Number(input_1.value)*604800000000000;

    }
    else if(inputTypeValue_1=="Week" && resultTypeValue_1=="Picosecond")
    { result_1.value=Number(input_1.value)*604800000000000000;

    }

    else if(inputTypeValue_1=="Week" && resultTypeValue_1=="Minute")
    { result_1.value=Number(input_1.value)*10080;

    }
    else if(inputTypeValue_1=="Week" && resultTypeValue_1=="Hour")
    { result_1.value=Number(input_1.value)*168;

    }
    else if(inputTypeValue_1=="Week" && resultTypeValue_1=="Day")
    { result_1.value=Number(input_1.value)*7;

    }
    else if(inputTypeValue_1=="Week" && resultTypeValue_1=="Week")
    { result_1.value=(input_1.value);

    }
    
    
}