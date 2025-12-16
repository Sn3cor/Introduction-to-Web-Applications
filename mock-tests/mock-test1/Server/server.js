let express = require("express")
const cors = require("cors")
let app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.status(200).json({
        kolor: "#0000FF"
    })
})

app.listen(3000, () => {
    console.log("The app has started")
})