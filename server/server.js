const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');
//Express utiliza la carpeta public y todo su contenido
app.use(express.static(publicPath));

//request un recurso que no esté en el 'public'
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });