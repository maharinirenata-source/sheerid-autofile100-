let userData = {};

function loadData() {
    const file = document.getElementById("fileInput").files[0];
    if (!file) {
        alert("Upload data.txt dulu ka");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        userData = parseData(text);
        document.getElementById("status").innerText = "Data berhasil dimuat ✔";
    };
    reader.readAsText(file);
}

function parseData(text) {
    const lines = text.split("\n");
    let data = {};

    lines.forEach(line => {
        let [key, value] = line.split("=");
        if (key && value) data[key.trim()] = value.trim();
    });

    return data;
}

function goToSheerID() {
    const url = document.getElementById("sheeridLink").value.trim();
    if (!url) {
        alert("Masukkan link SheerID dulu");
        return;
    }
    window.location.href = url;
}
