function Created() {
    // Get the URL entered by the user
    let url = document.querySelector(".url").value;

    // Clear previous QR code
    let qrcodeContainer = document.querySelector(".qrcode");
    qrcodeContainer.innerHTML = "";

    // Validate if the input is not empty
    if (url.trim() === "") {
        alert("Please enter a valid URL.");
        return;
    }

    // Generate the QR code using qrcode.js
    let qrcode = new QRCode(qrcodeContainer, {
        text: url,
        width: 200,
        height: 200,
        correctLevel: QRCode.CorrectLevel.H,
    });

    // Create a canvas element to draw the QR code
    let canvas = document.getElementById("qrcodeCanvas");
    let context = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 200;

    // Use a timeout to ensure the QR code is rendered before drawing
    setTimeout(() => {
        context.drawImage(qrcodeContainer.firstChild, 0, 0, 200, 200);
        
        // Set the download link
        let downloadLink = document.getElementById("downloadLink");
        downloadLink.href = canvas.toDataURL("image/png");
        downloadLink.download = "qr-image.png";
        downloadLink.style.display = "block"; // Make the link visible
    }, 100);
}

// Existing jQuery code to handle button click
$("button").on("click", function(){
    $("p").remove();
    $("h2").text("To create another QR-code, paste and hit submit button again").slideToggle().fadeToggle();
    $(".url").val("");
});
