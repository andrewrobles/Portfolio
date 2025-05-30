// api/index.js

export default function handler(req, res) {
  const url = 'https://docsify-this.net/?basePath=https://raw.githubusercontent.com/andrewrobles/Portfolio/main&homepage=README.md#/'
  
  res.writeHead(302, { Location: url })
  res.end()
}

