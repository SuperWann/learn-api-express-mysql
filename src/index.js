const express = require('express');

const middlewareLogRequest = require('./middleware/logs'); //import middleware
const usersRoutes = require('./routes/users'); // import user routes

const app = express();
const port = 4000;

//middleware
app.use(middlewareLogRequest);

app.use("/users", usersRoutes);

app.use("/", (req, res, next) => { // req?, res digunakan untuk mengirimkan response, next digunakan untuk menjalankan middleware selanjutnya
    res.send('Hello World');
}); // app.use disini berarti endpoint dapat menggunakan method (get, post, delete, update)

app.listen(port, () => console.log(`Server berhasil running di port ${port}`));

