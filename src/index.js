require('dotenv').config();

const PORT = process.env.PORT;

const express = require('express');

const middlewareLogRequest = require('./middleware/logs'); //import middleware
const usersRoutes = require('./routes/users'); // import user routes

const app = express();

//middleware
app.use(middlewareLogRequest);
//middleware untuk mengizinkan resp berupa json 
app.use(express.json());

app.use("/users", usersRoutes);

app.use("/", (req, res, next) => { // req?, res digunakan untuk mengirimkan response, next digunakan untuk menjalankan middleware selanjutnya
    res.send('Hello World');
}); // app.use disini berarti endpoint dapat menggunakan method (get, post, delete, update)

app.listen(PORT, () => console.log(`Server berhasil running di port ${PORT}`));

