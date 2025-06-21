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

  // Zoom gambar
  document.querySelectorAll(".grid img").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalImg.src = img.src;
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


// js/follow.js

// Inisialisasi Firebase
const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Akses tombol & elemen
document.addEventListener("DOMContentLoaded", () => {
  const followBtn = document.getElementById('followBtn');
  const countSpan = document.getElementById('followersCount');

  const ref = db.ref("followers/count");

  // Update tampilan pengikut
  ref.on("value", snapshot => {
    const count = snapshot.val() || 0;
    countSpan.textContent = count;
  });

  // Saat klik tombol
  followBtn.addEventListener("click", () => {
    ref.transaction(count => (count || 0) + 1);
    followBtn.disabled = true;
    followBtn.textContent = "Mengikuti";
  });
});
