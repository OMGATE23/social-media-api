const express = require('express')
const app = express()
const format = require('date-format')

const PORT = process.env.PORT || 5000 


app.get("/" , (req, res) => {
    res.status(200).send("<h1>I am Amongus</h1>")
})

app.get("/api/v1/instagram" , (req, res) => {
    const instaSocial = {
        username : "omgate",
        followers: 200,
        follows: 1,
        date : format.asString("dd-mm-yyyy | hh:mm:ss" , new Date())
    }

    res.status(200).json(instaSocial)
})

app.get("/api/v1/facebook" , (req, res) => {
    const facebookSocial = {
        username : "omgatefacebook",
        followers: 452,
        follows: 123,
        date : format.asString("dd-mm-yyyy | hh:mm:ss" , new Date())
    }

    res.status(200).json(facebookSocial)
})

app.get("/api/v1/linkedIn" , (req, res) => {
    const linkedInSocial = {
        username : "omgateLinkedIN",
        followers: 12333,
        follows: 43,
        date : format.asString("dd-mm-yyyy | hh:mm:ss" , new Date())
    }

    res.status(200).json( linkedInSocial)
})

app.get("/api/v1/:token" , (req, res) => {
    console.log(req.params.token)
    res.status(200).json({
        param : req.params.token
    })
})

app.listen(PORT, () => {
    console.log(`Server is runnning at ${PORT}`)
})
