const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      logIn = document.querySelector(".login-link");

    // js code to show/hide password and change icon of lecturer's login
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.pwShowHide.classList.replace("bi bi-eye-slash", "bi bi-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.pwShowHide.classList.replace("bi bi-eye", "bi bi-eye-slash");
                    })
                }
            })
        })
    })



    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    logIn.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

// login function for teachers
function signup(e){
event.preventDefault();
// console.log('Working Well');

var name = document.getElementById('name').value;
var pass = document.getElementById('password').value;


var user = {
    name: name,
    password: pass,
};

var json = JSON.stringify(user);
localStorage.setItem(name, json);
console.log('user added');

}

// login function for students
function signup(e){
    event.preventDefault();
    // console.log('Working Well');
    
    var name = document.getElementById('name').value;
    var pass = document.getElementById('password').value;
    
    
    var user = {
        name: name,
        password: pass,
    };
    
    var json = JSON.stringify(user);
    localStorage.setItem(name, json);
    console.log('user added');
    
    }




