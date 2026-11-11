// const http = require('http');

//  const server = http.createServer((req, res) => {
//      res.writeHead(200, {'Content-Type': 'text/plain'});
//      res.end('Selamat datang di Web Server Node.js!');
//  });

//  server.listen(8000, () => {
//     console.log('Server berjalan di http://localhost:8000');
// })

const http = require('http');

const server = http.createServer((req, res) => {
    const responseData = {
        status: "success",
        message: "Data Mahasiswa Berhasil Diambil",
        data: {
            nama: "Ripal",
            nim: "20250040134",
            matkul: "Pemrograman Berbasis Platform",
            server: "Node.js",
            waktuAkses: new Date().toLocaleString('id-ID')
        }
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData, null, 2));
});

server.listen(8000, () => {
    console.log('Server JSON berjalan di http://localhost:8000');
});