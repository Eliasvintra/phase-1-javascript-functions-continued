// code your solution here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(flair= "*") {
    const inner_function = function(wollan = "special"){ return `You are ${flair}${wollan}${flair}!`;}; return inner_function;
}
wrapAdjective()("a hard worker");
wrapAdjective("|| ")("dedicated programmer")