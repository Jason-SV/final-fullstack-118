import express from 'express'

const app = express()
const port = 8080

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})