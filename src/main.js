const express = require('express')
const fs = require('fs')

const app = express()
const port = 4000
const filePath = `${process.cwd()}/data.json`

app.get('/', (req, res) => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify({ count: 0 }, null, 4))
        return res.send('File not found')
    }

    const rawData = fs.readFileSync(filePath)
    const data = JSON.parse(rawData)

    fs.writeFileSync(filePath, JSON.stringify({ count: Number(data.count) + 1 }, null, 4))

    res.send(`Hello World -> ${data.count}`)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})