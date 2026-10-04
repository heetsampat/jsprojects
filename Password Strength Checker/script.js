let password =prompt("Please enter your password:");

if (password <6){
    console.log("Weak password");
}
else if (password>=6 && password <=9){
    console.log("Medium password");
}
else{
    console.log("Strong password");
}