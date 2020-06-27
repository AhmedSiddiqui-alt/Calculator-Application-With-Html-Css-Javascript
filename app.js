function getNumberOrSign(number)
{
var calculate=document.getElementById("calculate");
calculate.value+=number;
}
function clearInputField()
{
    var output=document.getElementById("output");
    var calculate=document.getElementById("calculate");
    calculate.value="";
    output.value="";
}   
function doCalculation()
{
    var clc="";
    var output=document.getElementById("output");
    var calculate=document.getElementById("calculate");
    for(var i=0; i<calculate.value.length; i++)
    {
        if(calculate.value[i]=="x")
        {
           clc+= calculate.value[i]="*";
        }
        else if(calculate.value[i]=="÷")
        {
            clc+=calculate.value[i]="/";
        }
        else{
            clc+=calculate.value[i];
        }
    }
    output.value=eval(clc );
    
}
function calculateSqrt()
{
    var calculate=document.getElementById("calculate");
    var output=document.getElementById("output");
    var check;
    console.log(output.value);
    for (var i=0; i<calculate.value.length; i++)
    {
    if(calculate.value[i]=="+"||calculate.value[i]=="-"||calculate.value[i]=="x"||calculate.value[i]=="÷")
    {
        check=true;
    }
}
if(check==true)
{
    output.value=Math.sqrt(output.value);
}
else
{
    console.log(output.value);
    output.value=Math.sqrt(calculate.value);

}  
}
function calculateSquare()
{
    
    var calculate=document.getElementById("calculate");
    var output=document.getElementById("output");
    var check;
    for (var i=0; i<calculate.value.length; i++)
    {
    if(calculate.value[i]=="+"||calculate.value[i]=="-"||calculate.value[i]=="x"||calculate.value[i]=="÷")
    {
        check=true;
    }
}
if(check==true)
{   
    output.value=Math.pow(output.value,2);
}
else if(check==false)
{
    
    output.value=Math.pow(calculate.value,2);

}   
}