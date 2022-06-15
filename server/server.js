const bodyParser = require("body-parser")
const express = require("express")

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static("public"))

app.get("/", (req,res) => {
  res.send(`SERVER OK. PORT: ${port}`)
})

app.listen(port, () => console.log(`Server started on port ${port}`))