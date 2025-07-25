// part1
let username = prompt("admin or user :");
let pass = prompt("password :");
if (( username === "admin" || username === "user") && ( pass === "1234")){
    let role = username ;
    let level = (role === "admin")? "high" :"low";
    alert("login successful :" + role + " level : "+ level);
}
else{
    alert("Access Denied");
    throw new Error ("Access Denied");  
}
// part2
let name = prompt("what's your name ?");
let age = prompt("How old are you ?");
let type_cofeee = prompt("which coffee ? espresso-> $2.5, latte-> $3.5, cappuccino-> $4.0 :");
let quantity = prompt("How many cups would you ?");

let price_cup = 0;
if(type_cofeee ==="espresso"){
    price_cup = 2.5;
}
else if(type_cofeee ==="latte"){
    price_cup = 3.5;
}
else if(type_cofeee ==="cappuccino"){
    price_cup = 4;
}
else{
alert("invalid coffee type selected ");
throw new Error("coffee type NOT recognized");
}
let total=price_cup*quantity;
let discount=0;
if(age>60 || age<18){
    discount=total*0.10;
}
let final_total=total-discount;
// part3    
let number_people= parseInt(prompt("how many people ?"));
let tip=parseFloat(prompt("What percentage would you like to tip?(e.g.0,5,10 or15%"));
let tip_amount=final_total*(tip/100);
let grant_total=final_total+tip_amount;
let amount_personal=grant_total/number_people;
// part4
alert(`☕️ Your coffee order is ready! 
     Hello ${name} 
     You ordered ${quantity} ${type_cofeee}(s).
     Original total: $${total.toFixed(2)} 
     Discount: $${discount.toFixed(2)} 
     Total after discount: $${final_total.toFixed(2)} 
     Tip (${tip}%): $${tip_amount.toFixed(2)} 
     Total with Tip: $${grant_total.toFixed(2)} 
     Split between ${number_people} people : $ ${amount_personal.toFixed(2)} each
    🙏 Thank you for your order!`); 

