let btn = document.getElementById("signinbtn")






const Signinhandler = () => {

var username = document.getElementById("username")
var password = document.getElementById("password").value

var exitemail = "uzair123@gmail.com"
var exitpassword= "uzair123"


if (username.value == "" || password == "") {
 
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Plz enter email and password",
});

return

}else if ( password.length  < 8) {

    Swal.fire({
  title: "plz enter a password should at least 8 charachters",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
return
}else if (username.value != exitemail  && password != exitpassword) {
     Swal.fire({
  title: "plz enter a valid email and password",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
return
} else if (username == exitemail && password== exitpassword ) {
    Swal.fire({
  title: "Succesfully signed in!",
  icon: "success",
  draggable: true
});
}

else{

        window.location.href = "home.html"; // Replace with your target UR
}

}
































btn.addEventListener("click", Signinhandler )