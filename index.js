const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())

const courses = require('./Data/courses.json')

const courseNames = courses.map(c => c.name)
const sixNames = courseNames.slice(0 ,6)

app.get('/', (req, res) => {
    res.send('Server Is Running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courseNames', (req, res) => {
    res.send(sixNames)
})



app.listen(port , ()=> console.log('Server is running on' , port))






