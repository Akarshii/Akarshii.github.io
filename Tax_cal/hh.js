
var totalAmt;
var fromAmt1=0;
var fromAmt2=10000;
var fromAmt3=20000;
var toAmt1=10000;
var toAmt2=25000;
var toAmt3=100000;
var perAmt1=2;
var perAmt2=3;
var perAmt3=5;
var output1;
var output2;
var output3;
var from;
var to;
var taxp;
var r;
console.log();
function TotalTax() {
    debugger
    for (var i = 0; i <= 2; i++) {
        switch (i) {
            case 0:
                if (this.tax > this.fromAmt1) {
                    var output1 = Number(Tax1(this.fromAmt1, this.toAmt1, this.perAmt1));
                    document.getElementById('a4').innerHTML = output1;
                }
                else {
                    output1 = 0;
                    document.getElementById('a4').innerHTML = 0;
                }
                break;
            case 1:
                if (this.tax > this.fromAmt2) {
                    var output2 = Tax1(this.fromAmt2, this.toAmt2, this.perAmt2);
                    document.getElementById('b4').innerHTML = output2;
                }
                else {
                    output2 = 0;
                    document.getElementById('b4').innerHTML = 0;
                }
           
                break;
            case 2:
                if (this.tax > this.fromAmt3) {
                    var output3 = Tax1(this.fromAmt4, this.toAmt4, this.perAmt4);
                    document.getElementById('c4').innerHTML = output4;
                }
                else {
                    output3 = 0;
                    document.getElementById('c4').innerHTML = 0;
                }
                break;
            default:
                break;
        }
    }
    output = output1 + output2 + output3 ;
    document.getElementById('cal').innerHTML = output;
}

function Tax1(from, to, taxp) {
    if (to < this.taxAmt) {
        r = (to - from) * (taxp / 100);
        return r;
    }
    else {
        r = (this.taxAmt - from) * (taxp / 100);
        return r;
    }
}