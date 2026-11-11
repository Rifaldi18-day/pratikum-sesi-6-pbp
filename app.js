const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Hello Express! Server milik Ripal berjalan dengan cepat!');
});

app.get('/data', (req, res) => {
    res.json({
        status: 'success',
        message: 'Data profil mahasiswa berhasil diambil',
        data: {
            nama: 'Ripal',
            nim: '20250040134',
            kampus: 'Universitas Contoh',
            matkul: 'Pemrograman Berbasis Platform',
            framework: 'Express.js'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server Express berjalan di http://localhost:${PORT}`);
});