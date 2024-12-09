import express from 'express'
import config from 'config'

const app = express()

// JSON middleware => analyzes JSON data
app.use(express.json())

const port = config.get<number>('port')

app.listen(port, async () => {
    console.log(`Application running on door ${port}`)
})