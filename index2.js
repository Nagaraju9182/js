var amount =100;
var days =30;
var intrest =2

for(let i = 1; i<=days; i++){
    if(i % 4 ===0){
        amount += intrest
    }
    document.write("your amount for" + i + "th day" + amount + "<br>")
}
