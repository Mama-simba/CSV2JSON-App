
// Button selection
const button= document.querySelector("#toJson");
button.addEventListener("click", convertToJson);



function convertToJson(event){
    event.preventDefault()
   
    //Takes textarea´s data and returns array of objects
    const textInput= document.querySelector("textarea").value;
   
    
    let lines = textInput.split("\n"); // lines without line break
    lines = lines.map(line => {     // it returns an array of arrays
        return line.split(",") ;
    });

    
    let firstLine = lines.shift(); // takes only the first line (Keys but we don't know how many)
    
    let result= lines.map(line => {  // creates an array of objects
        
        const myObject = {}
        for(var i = 0; i < firstLine.length; i++){
          let key = firstLine[i];
          myObject[key] = line[i].replaceAll(`"`,"")
        }
       
        
        return myObject;
        
    });
    

    



    const textOutput = document.getElementById("json"); // selecting Output textarea
    textOutput.value = JSON.stringify(result); // assigning the result and convert it into a string
    

      




    
}


    
    



