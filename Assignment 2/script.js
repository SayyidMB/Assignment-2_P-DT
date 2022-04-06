function loginBtn1() {
    
    let name = document.getElementById("name").value;
    localStorage.setItem("loger",name);
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let n = localStorage.getItem("n");
    let u = localStorage.getItem("u");
    let p = localStorage.getItem("p");
    if ((name=="Hansen Hoswari" && username=="Hansen" && password=="H1234") ||
    (name=="Hendrick Handoko" && username=="Hendrick" && password=="H1234") ||
    (name=="Sayyid Muhammad" && username=="Sayyid" && password=="S1234") ||
    (name=="Isminisa Azaly" && username=="Isminisa" && password=="I1234") ||
    (name==n && username==u && password==p)) {
        location.replace('./menu.html')              
    }
    else {
        alert("Invalid Login!")
    }
    }


function registerBtn2() {
        let name5 = document.getElementById("name5").value;
        let username5 = document.getElementById("username5").value;
        let password5 = document.getElementById("password5").value;
        if (username5 == "HH" || username5 == "SM" || username5 == "IA") {
            alert("Username is already taken!")
        }
        else if (password5.length < 5) {
            alert("Password is too short!")
        }
        else {
        localStorage.setItem("n",name5);
        localStorage.setItem("u",username5);
        localStorage.setItem("p",password5);
        location.replace('./index.html')
        }
    }