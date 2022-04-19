
      // Email ID
      let email = document.getElementById("emailid");
      
    function ValidateEmail(emailid){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.emailid.value))
    {
    return (true)
    }
    else{
    alert("OOPS... You have entered an invalid email address!")
    return (false)
    }
  }

    </script>

<script>
  let pwd = document.getElementById("passwordid");

  function CheckPassword(passwordid) { 
if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(myform.passwordid.value)) 
{ 
return true;
}
else
{ 
alert('Invalid Password')
return false;
}
} 
