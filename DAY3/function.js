//without arrow function
student = function() {
    return "AIML";
}
console.log(student());
//with arrow function
arrowfun=()=>{
    return "AIML";
}
console.log(student());
arrowfun()
//with parameter
arrowfun =(studentsDept) =>{
    return studentsDept[2];
}
console.log(arrowfun(['AIML,CSE,IT',"AIML","CSE","IT"]))

//without parameter
arrowfun = studentsDept=>{
    return studentsDept[1];
}
console.log(arrowfun(['AIML,CSE,IT',"AIML","CSE","IT"]))