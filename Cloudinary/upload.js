
const Upload = async () => {


const uploadinput = document.getElementById("upload").files[0];

if (!uploadinput) {
    alert("Dosya Seç")
    return;
}

const cloudName="dvdw9titb";

const uploadPreset="edosya";

let formdata = new FormData();

formdata.append("file",uploadinput);

formdata.append("upload_preset",uploadPreset);

const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,{method:"POST",body:formdata});

const data = await res.json();

console.log(data);

}