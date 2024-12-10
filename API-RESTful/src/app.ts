// ENV variables

import express from 'express'
import config from 'config'

const app = express()

// Middleware para JSON
app.use(express.json())

// DB
import db from '../config/db'

// Importar e usar o router
import router from './router'
app.use('/api/', router)

const port = config.get<number>('port')

app.listen(port, async () => {
    await db() // just starts the application if connect 
    console.log(`Aplicação rodando na porta ${port}`)
})