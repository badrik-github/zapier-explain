//Loading Basic Modules
const express = require('express');
var app = express();

//Requireing .env
// require('dotenv').config()

//Require MiddleWare
const cors = require('cors')


const sub = require("./router")
// //Require Swagger Modules
// const swaggerJsDoc = require("swagger-jsdoc");
// const SwaggerUi = require("swagger-ui-express");

// //Requiring all router to call
// const user = require("./routers/application/user")
// const profile = require("./routers/application/profile")
// const adminsignin = require("./routers/admin/signin")
// const wallets = require("./routers/application/wallets")
// const two_fa_config = require("./routers/application/2FA/2FA")
// const transactions = require("./routers/application/transactions")
// const nfts = require("./routers/application/updatenfts")

// //Making Connection To DataBase
// mongoose.set('useCreateIndex', true)
// mongoose.set('useFindAndModify', false)



// //Making Secure Connection Use This Connection String
// var connection_string = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}:${process.env.DB_PORT}/${process.env.DB_NAME}`
// // var connection_string = `mongodb://localhost:27017/testslug`

// //Making Connection
// mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true })
//       .then(() => {
//             console.log("Database connected")
//       })
//       .catch((err) => {
//             console.log(`Error connecting Database: ${err}`)
//       })

//Using MiddleWare
app.use(express.json())
app.use(cors())
// app.use(helmet())


// //Making api calls
app.use("/", sub)

// app.use("/", profile)

// app.use("/", adminsignin)

// app.use("/", wallets)

// app.use("/", two_fa_config)

// app.use("/", transactions)

// app.use("/", nfts)


//Making Swagger 
// const options = {
//       definition: {
//             openapi: "3.0.0",
//             info: {
//                   title: "sisu-apis",
//                   version: "1.0.0",
//                   description: "A documntation for sisu"
//             },
//             servers: [
//                   {
//                         url: "http://localhost:8000/",
//                   },
//             ],
//       },
//       apis: ["./docs/*.js", "./docs/*/*.js"],
// };

// //Making Swagger Call
// const swaggerDocs = swaggerJsDoc(options)
// console.log(`swaggerDocs is running on http://localhost:${process.env.APPLICATION_PORT}/api-docs`)
// app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));


//Making app live on this port 
app.listen(8000, () => {
      console.log(`sisu apis is running on 8000`)
})