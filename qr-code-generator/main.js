function generateQRCode() {
    let url = document.getElementById("url").value;
    if (url) {
        let qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";
        new QRCode(qrcodeContainer, url)
        document.getElementsByClassName("container").style.display = "block";
    } else {
        alert("Lütfen bir URL giriniz.");
    };
};