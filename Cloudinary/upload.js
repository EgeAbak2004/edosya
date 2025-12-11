import { UploadDb } from "http://127.0.0.1:5500/firebase/auth.js";

const uploadsendbtn = document.getElementById("uploadsendbtn");

if (uploadsendbtn != null) {
    uploadsendbtn.addEventListener("click", () => Upload())
}
const Upload = async () => {


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