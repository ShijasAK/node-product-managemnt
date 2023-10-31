const express= require('express');
const app= express()
const http = require('http');
const server = http.createServer(app); 
const mongoose= require('mongoose')
const dotenv= require('dotenv')
const userRoute= require('./routes/user')
const authRoute= require('./routes/auth')
const productRoute= require('./routes/product')

const cors = require('cors')



dotenv.config()

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('MongoDB is connected')
}).catch((err)=>{
    console.log(err)
})

app.use(cors())

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)






app.listen(process.env.PORT || 3000, ()=>{
    console.log('Backend server is running!!')
})