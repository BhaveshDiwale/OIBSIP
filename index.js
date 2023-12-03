const output = document.getElementById('grid-input');

let str = "",result;
function handleclick(e){
    str = str.concat(e.innerHTML);
    output.innerHTML = str;
}

function handleCalculate(e){
    let lastElement = str.charAt(str.length-1);
    if(lastElement==='+' || lastElement==='-' || lastElement==='*' || lastElement==='/' || lastElement==='.'){
        result = "Invalid";
    }

    else{
        try {
            result = eval(str);  
            str = result.toString();   
        } catch (error) {
            result = "Syntax Error";
        }
        
    }
    output.innerHTML = result;
}

function handleBack(){
    str = str.slice(0,str.length-1);
    output.innerHTML = str;
}

function handleClear(){
    str = str.replace(str,"");
    output.innerHTML = str;

}

function handleKeyPress(e){
    console.log(e);
}