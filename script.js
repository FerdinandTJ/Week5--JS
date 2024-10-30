document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("FormKaryawan");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    const error = [
      { id: "name", message: "Nama lengkap harus diisi" },
      { id: "email", message: "Email harus diisi" },
      { id: "position", message: "Jabatan harus diisi" },
      { id: "birthdate", message: "Tanggal lahir harus diisi"},
      { id: "phone", message: "Nomor telepon harus diisi" }
    ];

    error.forEach(field => {
      const input = document.getElementById(field.id);
      const errorElement = document.getElementById(`${field.id}Error`);
      
      if (input.value.trim() === "") {
        errorElement.textContent = field.message;
        errorElement.style.display = "block";
        isValid = false;
      } else {
        errorElement.style.display = "none";
      }
    });

    if (isValid) {
      alert("Data pegawai berhasil disubmit!");
      form.reset();
    }
  });
});