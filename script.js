function isValidURL(url) {
  const pattern =
    /^(https?:\/\/)?(www\.)?upwork\.com\/(freelancers|fl|o\/profiles\/users)\/.+$/;
  return pattern.test(url);
}

document.getElementById("feedback").addEventListener("input", function () {
  this.style.color = "black";
  this.style.border = "";
});

function submitFeedback() {
  const feedbackInput = document.getElementById("feedback");
  let feedback = feedbackInput.value.trim();
  const profileLinkInput = document.getElementById("profile-link");
  const profileLink = profileLinkInput.value.trim();
  const qrContainer = document.querySelector(".qr-container");

  if (!feedback) {
    feedbackInput.style.border = "2px solid red";
    feedbackInput.style.color = "red";
    feedbackInput.placeholder = "Feedback cannot be empty!";
    return;
  } else {
    feedbackInput.style.border = "";
    feedbackInput.style.color = "black";
  }

  if (profileLink) {
    if (!isValidURL(profileLink)) {
      alert("Please enter a valid Upwork profile link before submitting.");
      profileLinkInput.style.border = "2px solid red";
      return;
    } else {
      profileLinkInput.style.border = "";
      qrContainer.style.display = "flex";
      generateQRCode(profileLink);
    }
  } else {
    qrContainer.style.display = "none";
  }

  document.getElementById("feedback-form").style.display = "none";
  const reviewText = document.getElementById("review-text");
  reviewText.textContent = feedback;

  document.getElementById("capture-container").style.display = "flex";
}

function generateQRCode(link) {
  const qrCodeElement = document.getElementById("qrcode");
  qrCodeElement.innerHTML = "";

  new QRCode(qrCodeElement, {
    text: link,
    width: 150,
    height: 150,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

function saveImage() {
  const saveButton = document.getElementById("save-button");
  saveButton.style.display = "none";
  const backButton = document.getElementById("back-button");
  backButton.style.display = "none";

  const captureElement = document.getElementById("capture-container");

  const width = 1200;
  const height = Math.round(captureElement.offsetHeight);

  html2canvas(captureElement, {
    width: width,
    height: height,
    scale: window.devicePixelRatio,
    useCORS: true,
    backgroundColor: "#001e00",
    x: -27,
    y: -3,
  }).then((canvas) => {
    const link = document.createElement("a");
    const date = new Date().toISOString().split("T")[0].replace(/-/g, " ");
    link.href = canvas.toDataURL("image/png");
    link.download = `Upwork Review ${date}.png`;
    link.click();

    backButton.style.display = "block";
    saveButton.style.display = "block";
  });
}

function goBack() {
  document.getElementById("capture-container").style.display = "none";
  document.getElementById("feedback-form").style.display = "block";

  const feedbackInput = document.getElementById("feedback");
  feedbackInput.value = "";
  feedbackInput.style.border = "";
  feedbackInput.style.color = "black";
  feedbackInput.placeholder = "Paste the client's feedback here...";

  document.getElementById("profile-link").value = "";
  document.getElementById("qrcode").innerHTML = "";
  document.querySelector(".qr-container").style.display = "none";
}
