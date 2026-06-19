let age=20;
if(age>=18) {
    console.log("You are an Adult.");
}
else {
    console.log("You are a Minor");
}

var grade='A';
document.write("Entering switch block<br/>");
switch(grade){
    case 'A': document.write("Good job <br/>");
    break;
    case 'B': document.write("Pretty good <br/>");
    break;
    case 'C': document.write("Passed <br/>");
    break;
    case 'D': document.write("Not so good <br/>");
    break;
    case 'E': document.write("Failed <br/>");
    break;
    default:document.write("Unknown grade <br/>")
}
document.write("Existing switch block");