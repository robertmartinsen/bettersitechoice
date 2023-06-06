function openModal(image) {
    var modal = document.getElementById("image-modal");
    var modalImage = document.getElementById("modal-image");

    modal.style.display = "block";
    modalImage.src = image.src;
  }

  function closeModal() {
    var modal = document.getElementById("image-modal");

    modal.style.display = "none";
  }
