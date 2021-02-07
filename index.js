require('dotenv').config()

const server = require('./api/server')

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
    console.log(`\n 💻 rocking it on port ${PORT} 🖥\n`)
})

