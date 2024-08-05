function authentication(){
    const users = { //Registered Users Automatically
        admin: {
            password: 'adminpass',
            role: 'admin',
        },
        
        employee: {
            password: 'employeepass',
            role: 'user'
        }
        
    }
    const username = document.getElementById('login-username').value; // get value of the user name
    const password = document.getElementById('login-password').value; // get password of the user

    if(users[username] && users[username].password===password){ // verifiy if the elements exist
        alert(`welcome back ${username}!`);
        if(users[username].role==='admin'){
            window.location.href='./admin.html'; // take to admin.html page when user sucessfully logs ins
        }else{
            window.location.href='./user.html'; //take to other user.html when employee logs in successfully
        }
        

    }else{
        alert('Invalid user name'); // else print invalid user
    }


}


