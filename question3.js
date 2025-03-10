const express = require('express');
const app = express();
const port = 3000;

app.post ('/test', {req, res} => {
    res.json({message: 'Express is working! Rigil Kent Novela'})
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});