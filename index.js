require("dotenv").config();
const fs = require("fs");
const { GraphQLSchema } = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const https = require("https");
const http = require("http");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const db = require("./db");
let options = {
  exclude: ["Users"]
}
const {generateSchema} = require('sequelize-graphql-schema')(options);

const models = require('./models');
// const controllers = require("./controllers");
const controller = require("./controller");
app.use(
    cors({
      origin: "*",
      credentials: true,
      methods: ["GET", "POST", "OPTIONS"],
    })
);

app.use(
    '/graphql',
    graphqlHTTP({
      schema: new GraphQLSchema(generateSchema(models)),
      graphiql: true
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cookieParser());
app.get("/", (req,res)=>(res.send({messages: "hell world"})));
app.post("/kakao", controller.kakao);
app.post("/logout", controller.logout);

app.post("/multiMeetJoin",(req, res) =>{
  res.status(200)
  let data = req.body
  console.log(data)
  db.query(`INSERT into multiMeet(userId,meetId) values(${data.userId}, ${data.meetId});`) 
  res.send({messages: "ok"})
});

app.post("/meetContentJoin",(req, res) =>{
  res.status(200)
  let data = req.body
  console.log(data)
  db.query(`INSERT into meetContent(contentId,meetId) values(${data.contentId}, ${data.meetId});`)
  res.send({messages: "ok"})
});


app.post("/meetContentDelete",(req, res) =>{
  res.status(200)
  let data = req.body
  console.log(data)
  db.query(`delete from meetContent where meetId = ${data.meetId} and contentId = ${data.contentId};`)
  res.send({messages: "ok"})
});

app.post("/multiMeetDelete",(req, res) =>{
  res.status(200)
  let data = req.body
  console.log(data)
  db.query(`delete from multiMeet where userId = ${data.userId} and meetId = ${data.meetId};`)
  res.send({messages: "ok"})
});

app.post("/meetDel",(req, res) =>{
  res.status(200)
  let data = req.body
  console.log(data)
  db.query(`delete from multiMeet where meetId = ${data.meetId};`)
  db.query(`delete from meetContent where meetId = ${data.meetId};`)

  res.send({messages: "ok"})
});

app.post("/contentDel",(req, res) =>{
  res.status(200)
  let data = req.body
  console.log(data)
  db.query(`delete from meetContent where contentId = ${data.contentId};`)
  res.send({messages: "ok"})
});
//app.post("/meetContentJoin", controller.meetContentJoin.meetContentJoin);
// app.post("/signUp", controllers.signUp);
// app.post("/signOut", controllers.signOut);
// app.post("/deleteComment", controllers.deleteComment);
// app.post("/deleteContent", controllers.deleteContent);
// app.get("/getComment", controllers.getComment);
// app.get("/getContent", controllers.getContent);
// app.get("/accesstokenrequest", controllers.accessTokenRequest);



// const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.
// const backend = http
//     .createServer(app)
//     .listen(HTTPS_PORT, () => {
//       console.log(`backend listen in ${HTTPS_PORT}`);
//     });


app.listen(4000, function() {
  console.log('RUNNING ON 4000. Graphiql http://localhost:4000/graphql')
})

module.exports = app;
