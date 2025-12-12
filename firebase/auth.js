// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getDatabase, ref, get, child, push, set } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtKkfkJlTsGG-VqSAMjNg7SZSgiVeS_EM",
  authDomain: "edosya-d2c16.firebaseapp.com",
  databaseURL: "https://edosya-d2c16-default-rtdb.firebaseio.com",
  projectId: "edosya-d2c16",
  storageBucket: "edosya-d2c16.firebasestorage.app",
  messagingSenderId: "30664810814",
  appId: "1:30664810814:web:ecd8bf212b8f2d99038c6f",
  measurementId: "G-NCQZPJKDR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);


const registerbtn = document.getElementById("registerbtn");
const loginbtn = document.getElementById("loginbtn");
const registerhref = document.getElementById("registerhref");
const loginhref = document.getElementById("loginhref");
const table = document.getElementById("table");
const exitbtn = document.getElementById("exitbtn");
const wring = document.getElementById("wring");
const loadinmain = document.getElementById("loadinmain");
const uploadmain = document.getElementById("upoadmain");

if (registerbtn != null) {
  registerbtn.addEventListener("click", () => Register())
}

if (loginbtn != null) {
  loginbtn.addEventListener("click", () => Login())

}

if (exitbtn != null) {
  exitbtn.addEventListener("click", () => Exit())

  const Exit = () => {
    signOut(auth)
      .then(() => {
        console.log("Kullanıcı çıkış yaptı");
        window.location.href = "login.html";
      })
      .catch((error) => {
        console.error("Çıkış hatası:", error);
      });
  }
}


onAuthStateChanged(auth, (user) => {
  if (user) {
    registerhref.style.display = "none";
    loginhref.style.display = "none";
    exitbtn.style.display = "flex";
    if (uploadmain != null) {
      uploadmain.style.display = "flex";

    }
    if (wring != null) {
      wring.style.display = "none";
    }
    if (table != null) {
      table.style.display = "flex";
    }

    if (loadinmain != null) {
      loadinmain.style.display = "flex";
    }

  }
  else {
    registerhref.style.display = "flex";
    loginhref.style.display = "flex";
    if (uploadmain != null) {
      uploadmain.style.display = "none";
      if (wring != null) {
        wring.style.display = "flex";
      }

      if (loadinmain != null) {
        loadinmain.style.display = "none";
      }
    }
    if (table != null) {
      table.style.display = "none";
    }
    exitbtn.style.display = "none";
  }
})
const Register = async () => {

  console.log("çalıştı");
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");
  const passcotrol = document.getElementById("passcotrol");

  if (email != "" && pass.value.length > 8 && passcotrol.value.length > 8 && pass.value == passcotrol.value) {


    await createUserWithEmailAndPassword(auth, email.value, pass.value)
      .then((user) => {

        document.location.replace("http://127.0.0.1:5500/pages/index.html")
      })
      .catch((err) => {
        alert("hata oldu")
      })
  }
  else {
    alert("şifreler ulaşmıyor");
  }
}

const Login = async () => {
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");
  await signInWithEmailAndPassword(auth, email.value, pass.value).then((user) => {
    document.location.replace("http://127.0.0.1:5500/pages/index.html")
  }).catch((err) => {
    alert("Giriş Bilgileri eksik")
  })

}


export const UploadDb = (fileid, type, date, name, size) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const parent = ref(db, `upload/${user.uid}/${fileid}`);
        set(parent, {
          target: 0,
          send: "ege",
          type: type,
          id: fileid,
          date, date,
          name: name,
          size: size
        })
      }
      else {

      }

    })
    alert("Başarlı biçimde dosya yükledin")

  } catch (error) {
    alert("dosya yüklemesi başarısız oldu")

  }


}

const FilesDataGet = () => {
  if (table != null) {




    onAuthStateChanged(auth, (user) => {

      if (user) {
        loadinmain.style.display = "flex";
        table.style.display = "none";
        nofile.style.display = "none";




        const dbref = ref(db);
        get(child(dbref, `upload/${user.uid}`)).then((snap) => {

          if (snap.exists()) {
            const tablespawn = document.getElementById("filetable");
            const nofile = document.getElementById("nofile");


            snap.forEach(data => {
              let tr = document.createElement("tr");
              let td = document.createElement("td");
              let td2 = document.createElement("td");
              let td3 = document.createElement("td");
              // let td4 = document.createElement("td");
              let td5 = document.createElement("td");
              td.textContent = data.child("name").val();
              td2.textContent = data.child("type").val();
              td3.textContent = data.child("size").val() + "by";
              // td4.textContent = data.child("date").val();
              tr.append(td)
              tr.append(td2)
              tr.append(td3)
              // tr.append(td4)
              tr.append(td5)
              tablespawn.appendChild(tr);


              td5.innerHTML = `
  <a 
    href="https://res.cloudinary.com/dvdw9titb/image/upload/fl_attachment/v1765491358/${data.child("id").val()}.${data.child("type").val()}"
    download="${data.child("id").val()}.${data.child("type").val()}"
    class="btn btn-primary"
  >
    <i class="fa-solid fa-download"></i>
  </a>
`;
              loadinmain.style.display = "none";
              table.style.display = "flex";

            })

          }
          else {
            loadinmain.style.display = "none";
            nofile.style.display = "flex";
          }
        })
          .catch((err) => {
            alert("Birşeyler ters gitti lütfen sonra deneyniz");
          })
      }
      else {
        loadinmain.style.display = "none";
        table.style.display = "flex";
      }
    })

  }
}

FilesDataGet();
