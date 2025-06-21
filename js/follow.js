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

document.addEventListener("DOMContentLoaded", () => {
  const followBtn = document.getElementById('followBtn');
  const countSpan = document.getElementById('followersCount');

  const ref = db.ref("followers/count");

  // Tampilkan jumlah pengikut
  ref.on("value", snapshot => {
    const count = snapshot.val() || 0;
    countSpan.textContent = count;
  });

  // Cek apakah user sudah follow (dari localStorage)
  if (localStorage.getItem("hasFollowed")) {
    followBtn.disabled = true;
    followBtn.textContent = "Mengikuti";
  }

  // Ketika klik tombol
  followBtn.addEventListener("click", () => {
    if (!localStorage.getItem("hasFollowed")) {
      ref.transaction(count => (count || 0) + 1);
      localStorage.setItem("hasFollowed", "true");
      followBtn.disabled = true;
      followBtn.textContent = "Mengikuti";
    }
  });
});
