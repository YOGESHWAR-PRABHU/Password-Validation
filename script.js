function matchpassword(){
    var firstPass = document.forms["passwordForm"]["password"].value;
    var secondPass = document.forms["passwordForm"]["password2"].value;
    if(firstPass === secondPass){
        alert("Your Password is Correct 👍👍");
        return true;
    } else {
        alert("Passwords do not match 😐😐");
        return false;
    }
}
