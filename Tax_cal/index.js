var annualSalary=[];
var tax;
function AnnualSalary(){
    
    var monthSalary=document.getElementById('month').value ;
    annualSalary=monthSalary*12;
    return document.getElementById("annual").innerHTML=annualSalary;
}
function compare() {

    var secA1 = parseFloat(document.getElementById('secA1').value);
    var secA2 = parseFloat(document.getElementById('secA2').value);
    var secB1 = parseFloat(document.getElementById('secB1').value);
    var secB2 = parseFloat(document.getElementById('secB2').value);
    var secC1 = parseFloat(document.getElementById('secC1').value);
    var secC2 = parseFloat(document.getElementById('secC2').value);
    var secD1 = parseFloat(document.getElementById('secD1').value);
    var secD2 = parseFloat(document.getElementById('secD2').value);

    var minimumValue = Math.min(secA1,secA2);
    document.getElementById('secA3').innerHTML = minimumValue;

    var minimumValue1 = Math.min(secB1,secB2);
    document.getElementById('secB3').innerHTML = minimumValue1;
  
    var minimumValue2 = Math.min(secC1,secC2);
    document.getElementById('secC3').innerHTML = minimumValue2;

    var minimumValue3 = Math.min(secD1,secD2);
    document.getElementById('secD3').innerHTML = minimumValue3;

var total = minimumValue+minimumValue1+minimumValue2+minimumValue3;

 tax= annualSalary-total
 return  document.getElementById("tax").innerHTML=tax;

}



var Totaltax=[];
var x;
var y;
var z;


    function taxx(){
   
        debugger
        TAXINcome = tax;
        //TAXINcome = parseInt(document.getElementById("tax").value);
        var SAF = parseInt(document.getElementById("FromA").value);
        var SAT = parseInt(document.getElementById("ToA").value);
        var SAP = parseInt(document.getElementById("TaxA").value);
        var SBF = parseInt(document.getElementById("FromB").value);
        var SBT = parseInt(document.getElementById("ToB").value);
        var SBP = parseInt(document.getElementById("TaxB").value);
        var SCF = parseInt(document.getElementById("FromC").value);
        var SCT = parseInt(document.getElementById("ToC").value);
        var SCP = parseInt(document.getElementById("TaxC").value);
        var SBD = SBT - SBF;
        var SCD2 = SCT - SCF;
        var Percentage1;
        var RemainingB;
        var Percentage3;
        var RemainingA;
        var RemainingC;
        var Percentage2;
        if (TAXINcome <= SAT) {
            debugger;
             Percentage1 = (TAXINcome * SAP) / 100;
             RemainingA = (TAXINcome - TAXINcome);
            document.getElementById("AmountA").value = Percentage1;
        } else if (TAXINcome >= SAT) {
             RemainingA = (TAXINcome - SAT);
             Percentage1 = ((SAT * SAP) / 100);

            document.getElementById("AmountA").value = Percentage1;
        }


        if (RemainingA >= SBD) {
             Percentage2 = Percentage1 + ((SBD * SBP) / 100);
             RemainingB = (RemainingA - SBD);
            document.getElementById("AmountB").value = Percentage2;
        }
        else if (RemainingA <= SBD) {
             Percentage2 = Percentage1 + ((RemainingA * SBP) / 100);
             RemainingB = (RemainingA - RemainingA);
            document.getElementById("AmountB").value = Percentage2;
        }

        if (RemainingB >= SCD2) {
             Percentage3 = ((SCD2 * SCP) / 100);
             RemainingC = (RemainingB - SCD2);
            document.getElementById("AmountC").value = Percentage3;
        } else if (RemainingB <= SCD2) {
             Percentage3 = ((RemainingB * SCP) / 100);
             RemainingC = (RemainingB - RemainingB);
            document.getElementById("AmountC").value = Percentage3;
        }

        var numA = Number(document.getElementById("AmountA").value);
        var numB = Number(document.getElementById("AmountB").value);
        var numC = Number(document.getElementById("AmountC").value);
        let x = Math.round(numA);
        let y = Math.round(numB);
        let z = Math.round(numC);
         Totaltax = x + y + z;
         words(Totaltax);
        return document.getElementById("cal").innerHTML = Totaltax;
    }

    const oness = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    function words(Totaltax) {
debugger
      number=Totaltax;
      let output = "";
      
      if (number == 0) {
        output = "Zero";
      } else if (number < 0) {
        output = "Minus ";
        number = -number;
      }
    
      if (number >= 1000) {
        output += oness[Math.floor(number / 1000)] + " thousand ";
        number %= 1000;
      }
    
      if (number >= 100) {
        output += oness[Math.floor(number / 100)] + " hundred ";
        number %= 100;
      }
    
      if (number >= 20) {
        output += tens[Math.floor(number / 10)] + " ";
        number %= 10;
      } else if (number >= 10) {
        output += teens[number - 10] + " ";
        return output;
      }
    
      if (number > 0) {
        output += oness[number] + " ";
      }
      
      return document.getElementById("output").innerHTML =  output;
//return output;
    }
  //console.log(words(4562));
