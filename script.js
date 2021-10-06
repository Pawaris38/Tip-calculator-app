const username = document.getElementById("username");
const number = document.getElementById("number");
const custom = document.getElementById("custom");
const btn = document.getElementById("btn");
const tipamout = document.getElementById("tipamount");
const small = document.getElementById("small");
const total = document.getElementById("total");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
username.addEventListener('focus', function(){
    if (username.value === "0"){
        username.value = "";
    }
});
number.addEventListener('focus', function(){
    if (number.value === "0"){
        number.value = "";
    }
});
custom.addEventListener('click', function(){
    if(custom.value === "Custom"){
        custom.value = "";
        }
    else{
        if(number.value != 0){
            const usernamevalue = username.value;
            const numbervalue = number.value;
            const tip = ((usernamevalue / numbervalue)* (custom.value)/100);
            const totalsums = ((tip*numbervalue)+ Number(usernamevalue))/numbervalue;
            tipamout.innerHTML = "$"+ tip.toFixed(2);
            total.innerHTML = "$"+ totalsums.toFixed(2);
            small.classList.remove("active");
            }
            else if (number.value === "0"){
            small.classList.add('active');
            const span = document.querySelector("small");
            span.innerText = "can't be zero";
            }
    }
});
custom.addEventListener('focus',function(){
    custom.classList.add('active');
});
item1.addEventListener('click', function(){
    if(number.value != 0){
    const usernamevalue = username.value;
    const numbervalue = number.value;
    const tip = ((usernamevalue / numbervalue)* 0.05);
    const totalsums = ((tip*numbervalue)+ Number(usernamevalue))/numbervalue;
    tipamout.innerHTML = "$"+ tip.toFixed(2);
    total.innerHTML = "$"+ totalsums.toFixed(2);
    small.classList.remove("active");
    }
    else if (number.value === "0"){
    small.classList.add('active');
    const span = document.querySelector("small");
    span.innerText = "can't be zero";
    }
});
item2.addEventListener('click', function(){
    if(number.value != 0){
    const usernamevalue = username.value;
    const numbervalue = number.value;
    const tip = ((usernamevalue / numbervalue)* 0.10);
    const totalsums = ((tip*numbervalue)+ Number(usernamevalue))/numbervalue;
    tipamout.innerHTML = "$"+ tip.toFixed(2);
    total.innerHTML = "$"+ totalsums.toFixed(2);
    small.classList.remove("active");
    }
    else if (number.value === "0"){
    small.classList.add('active');
    const span = document.querySelector("small");
    span.innerText = "can't be zero";
    }
});
item3.addEventListener('click', function(){
    if(number.value != 0){
    const usernamevalue = username.value;
    const numbervalue = number.value;
    const tip = ((usernamevalue / numbervalue)* 0.15);
    const totalsums = ((tip*numbervalue)+ Number(usernamevalue))/numbervalue;
    tipamout.innerHTML = "$"+ tip.toFixed(2);
    total.innerHTML = "$"+ totalsums.toFixed(2);
    small.classList.remove("active");
    }
    else if (number.value === "0"){
    small.classList.add('active');
    const span = document.querySelector("small");
    span.innerText = "can't be zero";
    }
});
item4.addEventListener('click', function(){
    if(number.value != 0){ 
    const usernamevalue = username.value;
    const numbervalue = number.value;
    const tip = ((usernamevalue / numbervalue)* 0.25);
    const totalsums = ((tip*numbervalue)+ Number(usernamevalue))/numbervalue;
    tipamout.innerHTML = "$"+ tip.toFixed(2);
    total.innerHTML = "$"+ totalsums.toFixed(2);
    small.classList.remove("active");
    }
    else if (number.value === "0"){
    small.classList.add('active');
    const span = document.querySelector("small");
    span.innerText = "can't be zero";
    }
});
item5.addEventListener('click', function(){
    if(number.value != 0){ 
    const usernamevalue = username.value;
    const numbervalue = number.value;
    const tip = ((usernamevalue / numbervalue)* 0.50);
    const totalsums = ((tip*numbervalue)+ Number(usernamevalue))/numbervalue;
    tipamout.innerHTML = "$"+ tip.toFixed(2);
    total.innerHTML = "$"+ totalsums.toFixed(2);
    small.classList.remove("active");
    }
    else if (number.value === "0"){
    small.classList.add('active');
    const span = document.querySelector("small");
    span.innerText = "can't be zero";
    }
});
btn.addEventListener('click', function(){
    username.value = 0;
    number.value = 0;
    custom.value = "Custom";
    tipamout.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
    custom.classList.remove('active');
});