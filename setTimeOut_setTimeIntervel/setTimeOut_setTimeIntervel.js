// setTimeout(call_back_function(){} , time"in_milisecond"_after_which_we_have_to_run_the_call_back_function_one_time);
// (1). setTimeout(() => {}, timeout);
let call_back_funcOne = () => {
    console.log("I'll run after 2 second and only one time !");
}

let setTimeoutRef = setTimeout(call_back_funcOne , 2000); // Yanha par hamlogon ne callback_function_ka_reference(call_back_funcOne) diya hai . 

// clearTimeout(setTimeoutRef) // Yanha par humlog setTimeout function ka reference dedeten hai , aur aysa karne se setTiout ruk jayega chalega hi nahi .

/* ----------------------------------------------------------------------------------------------------- */

// setInterval(call_back_function(){},time"in_milisecond"_after_which_we_have_to_run_the_call_back_function_repetadely);
// (2). setInterval(() => {}, interval);
let call_back_funcTwo = ()=>{
    console.log("I'm setInterval function , and i'll runevery 1second !");
}
let setIntervalRef = setInterval(call_back_funcTwo , 1000); // Yanha par hamlogon ne callback_function_ka_reference(call_back_funcTwo) diya hai . 

// clearInterval(setIntervalRef) // Yanha par humlog setInterval function ka reference dedeten hai , aur aysa karne se ssetInterval ruk jayega chalega hi nahi .
