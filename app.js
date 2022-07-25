const express = require('express')
const layout = require('express-ejs-layouts')

const HomeRoute = require('./routes/HomeRoute')

const app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extended:false}))

app.use(layout)
app.set('view engine' , 'ejs')

app.use('/' , HomeRoute)

app.listen(9000 , () => {
    console.log('you can now view your express application on :')
    console.log('http://localhost:9000')
})