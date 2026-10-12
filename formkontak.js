const form = document.getElementById('formkontak');
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nomorWhatsApp = "6281338305529";
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const telepon = document.getElementById("telepon").value;
  const minat = document.getElementById("minat").value;
  const pesan = document.getElementById("pesan").value;

  const isiPesan = `Halo, saya menghubungi melalui website CV.
Nama Lengkap : ${nama}
Email        : ${email}
No.telepon   : ${telepon}
Bidang Minat : ${minat}
Pesan        : ${pesan}`;

  const pesanEncoded = encodeURIComponent(isiPesan);
  const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;

  window.open(urlWhatsApp, "_blank");
});