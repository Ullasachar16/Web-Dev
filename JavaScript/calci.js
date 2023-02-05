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
    operator(num1,num2);
}
calci(2,3,add);
calci(4,3,sub);
calci(5,3,mul);
calci(9,3,div);
calci(10,3,mod);