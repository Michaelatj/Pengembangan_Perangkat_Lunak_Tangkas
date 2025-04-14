function prediksi() {
    const temperatur = parseFloat(document.getElementById('temperatur').value);
    const promosi = parseInt(document.getElementById('promosi').value);
    const error = document.getElementById('error');
    const hasil = document.getElementById('hasil');
    
    // Validasi input
    if (isNaN(temperatur)) {
        error.textContent = "Masukkan temperatur yang valid (antara 5-37°C).";
        hasil.textContent = "-";
        return;
    }
    
    if (isNaN(promosi)) {
        error.textContent = "Pilih status promosi.";
        hasil.textContent = "-";
        return;
    }
    
    if (temperatur < 5 || temperatur > 37) {
        error.textContent = "Temperatur harus antara 5-37°C.";
        hasil.textContent = "-";
        return;
    }
    
    // Hitung prediksi
    const intercept = 0.1510931420856565;
    const coefTemp = 5.00133756;
    const coefPromo = 19.97598163;
    const prediksi = intercept + (coefTemp * temperatur) + (coefPromo * promosi);
    
    error.textContent = "";
    hasil.textContent = prediksi.toFixed(2) + " $";
}
