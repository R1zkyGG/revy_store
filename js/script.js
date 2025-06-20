// script.js untuk interaksi Revy Store

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeModal = document.getElementById("close");

  // Zoom gambar saat diklik
  document.querySelectorAll(".grid img").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalImg.src = img.src;
    });
  });

  // Filter stok akun (disembunyikan berdasarkan <figure>, bukan hanya <img>)
  document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      document.querySelectorAll("#stok-grid figure").forEach(fig => {
        const img = fig.querySelector("img");
        const status = img.dataset.status;
        if (filter === "all" || status === filter) {
          fig.style.display = "";
        } else {
          fig.style.display = "none";
        }
      });
    });
  });

  // Tutup modal zoom
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
});
