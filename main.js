var input=document.getElementById('input');
var result=document.getElementById('result');
var inputType=document.getElementById('inputType');
var resultType=document.getElementById('resultType');
var inputTypeValue , resultTypeValue;
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
inputTypeValue=inputType.value;
resultTypeValue=resultType.value;
function myResult(){
    inputTypeValue=inputType.value;
    resultTypeValue=resultType.value;

    // LENGTH-CONVERTER

    if(inputTypeValue==="meter" && resultTypeValue==="kilometer")
    {
        result.value=Number(input.value)*.001;
    }
    else if(inputTypeValue=="meter" && resultTypeValue=="centimeter")
    { result.value=Number(input.value)*100;

    }
    else if(inputTypeValue=="meter" && resultTypeValue=="meter")
    { result.value=input.value;

    }
    else if(inputTypeValue=="meter" && resultTypeValue=="millimeter")
    { result.value=Number(input.value)*1000;

    }
    else if(inputTypeValue=="meter" && resultTypeValue=="micrometer")
    { result.value=Number(input.value)*1000000;

    }
    else if(inputTypeValue=="meter" && resultTypeValue=="nanometer")
    { result.value=Number(input.value)*1000000000;

    }

    if(inputTypeValue=="kilometer" && resultTypeValue=="meter")
    {
        result.value=Number(input.value)*1000;
    }
    else if(inputTypeValue=="kilometer" && resultTypeValue=="centimeter")
    { result.value=Number(input.value)*100000;

    }
    else if(inputType.value=="kilometer" && resultType.value=="kilometer")
    { result.value=input.value;
        
    }
    else if(inputTypeValue=="kilometer" && resultTypeValue=="millimeter")
    { result.value=Number(input.value)*1000000;

    }
    else if(inputTypeValue=="kilometer" && resultTypeValue=="micrometer")
    { result.value=Number(input.value)*1000000000;

    }
    else if(inputTypeValue=="kilometer" && resultTypeValue=="nanometer")
    { result.value=Number(input.value)*1000000000000;

    }

    if(inputType.value=="centimeter" && resultType.value=="meter")
    {
        result.value=Number(input.value)*.001;
    }
    else if(inputType.value=="centimeter" && resultType.value=="kilometer")
    { result.value=Number(input.value)*.000001;

    }
    else if(inputType.value=="centimeter" && resultType.value=="centimeter")
    { result.value=input.value;
        
    }
    else if(inputTypeValue=="centimeter" && resultTypeValue=="millimeter")
    { result.value=Number(input.value)*10;

    }
    else if(inputTypeValue=="centimeter" && resultTypeValue=="micrometer")
    { result.value=Number(input.value)*10000;

    }
    else if(inputTypeValue=="centimeter" && resultTypeValue=="nanometer")
    { result.value=Number(input.value)*10000000;

    }
    if(inputType.value=="millimeter" && resultType.value=="meter")
    {
        result.value=Number(input.value)*.001;
    }
    else if(inputType.value=="millimeter" && resultType.value=="kilometer")
    { result.value=Number(input.value)*.000001;

    }
    else if(inputType.value=="millimeter" && resultType.value=="centimeter")
    { result.value=Number(input.value)*.1;
        
    }
    else if(inputTypeValue=="millimeter" && resultTypeValue=="millimeter")
    { result.value=input.value;

    }
    else if(inputTypeValue=="millimeter" && resultTypeValue=="micrometer")
    { result.value=Number(input.value)*1000;

    }
    else if(inputTypeValue=="millimeter" && resultTypeValue=="nanometer")
    { result.value=Number(input.value)*1000000;

    }
    if(inputType.value=="micrometer" && resultType.value=="meter")
    {
        result.value=Number(input.value)*.000001;
    }
    else if(inputType.value=="micrometer" && resultType.value=="kilometer")
    { result.value=Number(input.value)*9.999999999E-10;

    }
    else if(inputType.value=="micrometer" && resultType.value=="centimeter")
    { result.value=Number(input.value)*.0001;
    }
    else if(inputTypeValue=="micrometer" && resultTypeValue=="millimeter")
    { result.value=Number(input.value)*.001;

    }
    else if(inputTypeValue=="micrometer" && resultTypeValue=="micrometer")
    { result.value=(input.value);

    }
    else if(inputTypeValue=="micrometer" && resultTypeValue=="nanometer")
    { result.value=Number(input.value)*1000;

    }
    if(inputType.value=="nanometer" && resultType.value=="meter")
    {
        result.value=Number(input.value)*1.E-9;
    }
    else if(inputType.value=="nanometer" && resultType.value=="kilometer")
    { result.value=Number(input.value)*1.E-12;

    }
    else if(inputType.value=="nanometer" && resultType.value=="centimeter")
    { result.value=Number(input.value)*1.E-7;
        
    }
    else if(inputTypeValue=="nanometer" && resultTypeValue=="millimeter")
    { result.value=Number(input.value)*0.000001;

    }
    else if(inputTypeValue=="nanometer" && resultTypeValue=="micrometer")
    { result.value=Number(input.value)*0.001;

    }
    else if(inputTypeValue=="nanometer" && resultTypeValue=="nanometer")
    { 
        result.value=(input.value);

    }


}