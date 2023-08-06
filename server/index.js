const express = require("express")
const app = express()

const server = app.listen(5000, () => {
    console.log("server up and listen to port 5000")
})
