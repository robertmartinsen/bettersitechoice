function toggleShareBox() {
  var shareBox = document.getElementById("share-box");

  if (shareBox.style.display === "none" || shareBox.style.display === "") {
    shareBox.style.display = "block";
  } else {
    shareBox.style.display = "none";
  }
}

function copyLink() {
  var shareLink = document.getElementById("share-link");
  shareLink.select();
  document.execCommand("copy");

  var copyButton = document.getElementById("copy-button");
  copyButton.innerText = "Copied";
  copyButton.disabled = true;
}







