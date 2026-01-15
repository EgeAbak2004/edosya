import { UploadDb } from "https://edosya-d2c16.web.app/firebase/firebase.js";

const uploadsendbtn = document.getElementById("uploadsendbtn");

const uploaddeleytext = document.getElementById("uploaddeleytext");


if (uploadsendbtn != null) {
    uploadsendbtn.addEventListener("click", () => Upload())
}
const Upload = async () => {
    uploaddeleytext.style.display = "flex";


    const uploadinput = document.getElementById("upload").files[0];

    if (!uploadinput) {
        alert("Dosya Seç")
        return;
    }

    const cloudName = "dvdw9titb";

    const uploadPreset = "edosya";

    let formdata = new FormData();

    formdata.append("file", uploadinput);

    formdata.append("upload_preset", uploadPreset);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: "POST", body: formdata });

    const data = await res.json();

    UploadDb(data.public_id, data.format, data.created_at, data.original_filename, data.bytes);


}