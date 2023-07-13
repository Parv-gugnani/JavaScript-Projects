function generateQRCode() {
  var text = document.getElementById("text-input").value;
  var qrCodeDiv = document.getElementById("qrCode");

  //
  qrCodeDiv.innerHTML = "";

  //
  var qrCode = new QRCode(qrCodeDiv, {
    text: text,
    width: 200,
    height: 200,
  });
}
