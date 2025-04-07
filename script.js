function prediksi() {
    const temperatur = parseFloat(document.getElementById('temperatur').value);
    const promosi = parseFloat(document.getElementById('promosi').value);
    const error = document.getElementById('error');
    const hasil = document.getElementById('hasil');
    
    // Validasi input
    if (isNaN(temperatur) || isNaN(promosi)) {
        error.textContent = "Masukkan angka yang valid.";
        hasil.textContent = "";
        return;
    }
    if (promosi !== 0 && promosi !== 1) {
        error.textContent = "Promosi harus 0 atau 1.";
        hasil.textContent = "";
        return;
    }
    
    // Hitung prediksi
    const intercept = 0.1510931420856565;
    const coefTemp = 5.00133756;
    const coefPromo = 19.97598163;
    const prediksi = intercept + (coefTemp * temperatur) + (coefPromo * promosi);
    
    error.textContent = "";
    hasil.textContent = prediksi.toFixed(2);
}