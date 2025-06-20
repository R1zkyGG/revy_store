document.querySelectorAll(".grid img").forEach(img => {
  img.addEventListener("click", () => {
    console.log("Gambar diklik:", img.src); // Tambahkan ini untuk cek
    modal.classList.remove("hidden");
    modalImg.src = img.src;
  });
});

  // Zoom gambar saat diklik
  document.querySelectorAll(".grid img").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalImg.src = img.src;
    });
  });

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalImg.src = "";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modalImg.src = "";
  }
});
