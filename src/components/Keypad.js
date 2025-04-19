// Code Keypad Component Here

function Keypad (){
    function handleClick(event){
        console.log("Entering password...");
    }
    return (
        <div>
           <input type="password" onChange={handleClick}  placeholder="Enter Password" />
              
        </div>
    )
}

export default Keypad;