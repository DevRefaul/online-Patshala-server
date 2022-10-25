const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())

const courses = require('./Data/courses.json')
const course = courses.map(course => course)
const sixCourse = course.slice(0, 6)

const courseNames = courses.map(c => c.name)
const sixNames = courseNames.slice(0 ,6)

app.get('/', (req, res) => {
    res.send('Server running')
})
app.get('/main', (req, res) => {
    res.send(sixCourse)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courseNames', (req, res) => {
    res.send(sixNames)
})
app.get('/courses/id', (req, res) => {
    const id = parseInt(req.params.id)
    const course = courses.find(c => c.id === id)
    res.send(course)
})



app.listen(port , ()=> console.log('Server is running on' , port))






