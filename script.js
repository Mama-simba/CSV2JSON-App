
//1
const button= document.querySelector("button");
button.addEventListener("click", convertToJson);

function convertToJson(event){
    event.preventDefault()
   


    const textInput= document.querySelector("textarea").value;//Takes textarea´s data
   
    let lines = textInput.split("\n"); //the result is an array

    lines = lines.map(line => {     // it returns an array of arrays
        return line.split(",") ;
    });
    
    let firstLine = lines.shift();
    
    let result= lines.map(line => {  //Create an object of each array of arrays
        const myObject = {
            id: line[0],
            userName: line[1]
        }
        return myObject;
    });
    console.log(result);
    



    

}


// pass textarea data to textarea
// convert CSV data to JSON
// convert JSON data to CSV




