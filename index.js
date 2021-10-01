const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.listen(PORT, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});