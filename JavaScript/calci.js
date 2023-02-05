function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    return num1/num2;
}
function mod(num1,num2){
    return num1%num2;
}
function calci(num1,num2,operator){
    return operator(num1,num2);
}
console.log(calci(2,3,add));
console.log(calci(4,3,sub));
console.log(calci(5,3,mul));
console.log(calci(9,3,div));
console.log(calci(10,3,mod));