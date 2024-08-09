const express = require('express');
const bodyPraser = require('body-parser');

const placeRouter = require('./router/place-router')

// const userRouter = require('./router/user-router')

const app = express();

app.use("/api/place" ,placeRouter)
// app.use("/api/place", userRouter)

app.listen(3000);