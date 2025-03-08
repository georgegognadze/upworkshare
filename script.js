document.getElementById("feedback").addEventListener("input", function () {
  this.style.color = "black";
  this.style.border = "";
});

function submitFeedback() {
  const feedbackInput = document.getElementById("feedback");
  let feedback = feedbackInput.value.trim();

  if (!feedback) {
    feedbackInput.style.border = "2px solid red";
    feedbackInput.style.color = "red";
    feedbackInput.placeholder = "Feedback cannot be empty!";
    return;
  } else {
    feedbackInput.style.border = "";
    feedbackInput.style.color = "black";
  }

  if (feedback.length > 1008) {
    feedback = feedback.substring(0, 1008) + "...";
  }

  document.getElementById("feedback-form").style.display = "none";
  const reviewText = document.getElementById("review-text");
  reviewText.textContent = feedback;

  const textLength = feedback.length;
  const baseHeight = 940;
  const height = Math.ceil(baseHeight + Math.min(textLength * 0.2, 100));

  const captureContainer = document.getElementById("capture-container");
  captureContainer.style.height = height + "px";

  const backButton = document.getElementById("back-button");
  backButton.style.display = "none";

  document.getElementById("capture-container").style.display = "flex";
}

function saveImage() {
  const saveButton = document.getElementById("save-button");
  saveButton.style.display = "none";

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

    const backButton = document.getElementById("back-button");
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
}
