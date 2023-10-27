const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write(
      `<html><head><title>Form</title></head>
        <body>
            <form method='POST' action="/response">
                <input name="message">
            </form>
        </body>
    </html>`
    );
    res.end();
  } else if (req.url === '/response' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      console.log('stream finished');
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
    res.write('this is about page');
    res.end();
  }
  res.end();
});

server.listen(3001);
