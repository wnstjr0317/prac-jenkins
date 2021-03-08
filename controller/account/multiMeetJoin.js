var db = require("../../db");

module.exports = {
multiMeet:(req, res) =>{
  res.status(200)
  let data = req.body
  console.log(data)
  db.query(`INSERT into multiMeet(userId,meetId) values('${data.userId}', '${data.meetId});`)
}
}

