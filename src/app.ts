import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { host } from './constants/host'
import { port as defaultPort } from './constants/port'
import { store } from './store'
import { postLog } from './store/log/logSlice'

const app = express()
const port = process.env.PORT || defaultPort

app.use(cors())
app.use(bodyParser.json())

app.get('/state', (req, res) => res.send(store.getState()))

app.post('/log', (req, res) => {
  const action = req.body

  store.dispatch(postLog(action))
  store.dispatch(action)
  res.send(action)
})

app.listen(port, err => {
  if (err) return console.error(err)

  return console.log(`server is listening on http://${host}:${port}`)
})
