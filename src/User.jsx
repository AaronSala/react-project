function User() {
    function clicked(){
   console.log("youve clicked me")
    }
    return ( 
        <button className="button" onClick={clicked}>click me</button>
     );
}

export default User;