const http = require('http')

const server = http.createServer((request, response) => {
    console.log(request.url)

    response.end('Olá')
});

server.listen(8080, () => {
    console.log('Ouvindo req na porta 8080')
})

