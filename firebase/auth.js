 import { auth} from "http://127.0.0.1:5500/firebase/setting.js";


  const registerbtn = document.getElementById("registerbtn");

  registerbtn.addEventListener("click",() => Register())

 const Register = async () => {
    console.log("çalıştı");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const passcotrol = document.getElementById("passcotrol");


  await auth.createUserWithEmailAndPassword(auth,email.value,pass.value)
    .then((user) => {

    })
    .catch((err) => {

    })
}

const login = () => {
      auth.onAuthStateChanged(auth,(user)=> {
        if (user) {
            
        }
        else {
            
        }
    })
}