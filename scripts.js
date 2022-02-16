//<!-----------Name:- Aman Kumar ----------------->
//<!-----------Reg N:- 191121101007----------------->
//<!----------------------------
//DESIGN A LOGIN FORM PAGE AND VALIDATE THE USERNAME AND PASSWORD.
//ONCE THE LOGIN SUCCESSFUL THEN DISPLAY THE APPLICATION FORM PAGE FOR UNIVERSITY ADMISSION. 
//IF LOGIN FAILED DISPLAY THE ALERT MESSAGE USING DHTML.(HTML,CSS,JAVA SCRIPT)
//<!---------------------------->


var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Aman Kumar" && password == "191121101007") {
        alert("Login successfully");
        window.location = "https://www.drmgrdu.ac.in/"; // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}







