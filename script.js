function upDate(previewPic) {
  // Log for debugging
  console.log("Mouseover event triggered");

  // Display image description
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = `url(${previewPic.src})`; // Update background
  imageDiv.innerText = previewPic.alt; // Update text
}

function undo() {
  // Log for debugging
  console.log("Mouseout event triggered");

  // Reset to default
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')"; // Clear background
  imageDiv.innerText = "Hover over an image below to display here."; // Reset text
}
