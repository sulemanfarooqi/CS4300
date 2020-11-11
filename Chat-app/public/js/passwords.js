let users = {
  Pedro:'123',
  Julio:'12345',
  Will:'secretPassword'
  
}

function checkPass(event) {
    //Store the password field objects into variables ...
    let password = document.getElementById('password');
    let username = document.getElementById('username');

    //confirmation field
    let count = 0;
    for (const key in users) {
      if(password.value == users[key] && username.value == key){
          alert('Correct Password');
          document.getElementById("mainForm").action = "/chat.html";
      } else {
        count++;
      }
    }
    if (count == 3) {
      alert('Incorrect password, try Again');
      event.preventDefault();
    }
  } 

