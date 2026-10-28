function hitungSkor() {
    let skor = 0;
    let totalSoal = 3;

    // Mengambil jawaban yang dipilih pengguna
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    // Validasi: pastikan semua soal sudah dijawab
    if (!q1 || !q2 || !q3) {
        alert("Harap jawab semua pertanyaan terlebih dahulu!");
        return;
    }

    // Periksa jawaban benar
    if (q1.value === "benar") skor++;
    if (q2.value === "benar") skor++;
    if (q3.value === "benar") skor++;

    let nilaiAkhir = (skor / totalSoal) * 100;

    // Tampilkan hasil di halaman web
    document.getElementById("result").innerHTML = `Skor Kamu: ${skor} dari ${totalSoal} (${nilaiAkhir.toFixed(0)} poin)`;
}
