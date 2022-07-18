const fs = require('fs')

function callbackRead(err, dados) {
  if (err) throw new Error(err)
  fs.writeFile('./outroarquivo.html', dados, callbackWrite)
}

function callbackWrite (err) {
  if (err) throw new Error(err)
  outraFuncaoAssincrona(callbackAsync1)
}

function callbackAsync1 (err, dados) {
  const x = dados.split(',')
  const y = x.map((e) => e.toUpperCase())
  maisUmaFuncaoAssincrona(y, callbackAsync2)
}

function callbackAsync2 (err, resultado) {
  // ...
}

fs.readFile('./arq.html', callbackRead)