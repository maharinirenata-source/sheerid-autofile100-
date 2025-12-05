let userData = {};

async function loadDataTxt() {
    try {
        const response = await fetch("data.txt");
        const text = await response.text();
        userData = parseData(text);

        document.getElementById("status").innerText = "✔ Data.txt berhasil dimuat!";
    } catch (err) {
        document.getElementById("status").innerText = "❌ Gagal memuat data.txt";
    }
}

function parseData(text) {
    let data = {};
    text.split("\n").forEach(line => {
        let [key, value] = line.split("=");
        if (key && value) data[key.trim()] = value.trim();
    });
    return data;
}

function goToSheerID() {
    const url = document.getElementById("sheeridLink").value.trim();
    if (!url) {
        alert("Masukkan link dulu");
        return;
    }
    window.location.href = url;
}

loadDataTxt();
