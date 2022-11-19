// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!


// original function

function buildString(...template){
    return `I like #{template.join(',')}!`;
}

// P: an array
// R: a string
// E:
    // buildString('Cheese','Milk','Chocolate')
    //     'I like Cheese, Milk, Chocolate!'
    // buildString('Cheese','Milk')
    //     'I like Cheese, Milk!'
    // buildString('Chocolate')
    //     'I like Chocolate!'
// P: template strings input variables use ${variable} format
    // and .join(',') must have a space 

// fixed function

function buildString(...template){
    return `I like ${template.join(', ')}!`;
}