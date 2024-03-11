const http = require('http');
const fs = require('fs');
const porta = 443;

const readline = require('readline');

const servidor = http.createServer((req, res) => {
  fs.readFile('pagina.html', (err, arquivo) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(arquivo);
    res.end()
  })
  fs.appendFile('texte.txt', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio soluta iure dolorem quibusdam odio fugit iusto sunt rem illum repellendus, natus laboriosam quo est libero perspiciatis consectetur quam officiis corporis! Est, at corporis earum modi dolore rerum! Omnis ad ratione incidunt laboriosam corporis, beatae iste enim repudiandae eum tempore fugiat ipsum harum minus dicta repellendus? Quibusdam minima molestias doloremque, ab amet rerum nostrum mollitia repudiandae assumenda corrupti nisi impedit atque iure ut, magni optio a quis magnam cupiditate cum nam eveniet inventore repellat facere. Optio at nihil quo minus nisi adipisci et explicabo voluptatem culpa, architecto sint error labore voluptatibus?', (err) => {
      if(err) throw err
      console.log('Arquivo criado');
    res.end()
  })
})

async function readFileByLine(file) {
const fileStream = fs.createReadStream(file);
const rl = readline.createInterface({
input: fileStream,
crlfDelay: Infinity
});
for await (const line of rl) {
console.log(line);
}
}

readFileByLine('texte.txt')

  servidor.listen(porta, () => {
    console.log('Servidor rodando')
  })