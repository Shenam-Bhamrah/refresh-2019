function checkForName(inputText) {
    console.log("::: Running Check For Entry :::", inputText);
    
    const regex= /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    
    if (inputText === " " || !zipId.match(regex)){
        alert("Enter Valid Zipcode!")
    }
    else{
        alert("Correct Input")
    }
}

export { checkForName };
