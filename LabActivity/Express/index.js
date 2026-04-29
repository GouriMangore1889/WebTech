const express = require('express')
const app = express()
const port = 3000


/* ---------------- MIDDLEWARE ---------------- */

// Middleware runs before every request
// Used for logging, authentication, etc.
app.use((req, res, next) => {

    console.log("Request Method:", req.method)
    console.log("Request URL:", req.url)

    // next() passes control to the next route
    next()
})
/* ---------------- ROUTES ---------------- */

// Home route
app.get('/', (req, res) => {

    const time = new Date().toLocaleTimeString()

    // Sending JSON response
    res.json({
        message: "Welcome to Express Server",
        time: time
    })
})


// About route
app.get('/about', (req, res) => {

    res.send("This is About Page")

})


// Contact route
app.get('/contact', (req, res) => {

    res.send("This is Contact Page")

})


/* ---------------- START SERVER ---------------- */

app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`)

})