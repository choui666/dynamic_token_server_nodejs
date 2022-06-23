const express = require("express");
const cors = require("cors");
const { generateToken04 } = require("./server/zegoServerAssistant");

const PORT = process.env.PORT || 8080;

if (!(process.env.APP_ID && process.env.SERVER_SECRET)) {
  throw new Error("You must define an APP_ID and SERVER_SECRET");
}
const APP_ID = process.env.APP_ID;
const SERVER_SECRET = process.env.SERVER_SECRET;

const app = express();

function nocache(req, res, next) {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  next();
}

const generateAccessToken = function (req, resp) {
  let expiredTs = req.query.expired_ts;
  if (!expiredTs) {
    expiredTs = 3600;
  }

  const userID = req.query.userID;
  if (!userID) {
    return resp.status(500).json({ error: "userID is required" });
  }

  const roomID = req.query.roomID;
  if (!roomID) {
    return resp.status(500).json({ error: "roomID  is required" });
  }

  let userName = req.query.userName;
  if (!userName) {
    userName = userID;
  }

  const token = generateToken04(
    parseInt(APP_ID),
    userID,
    SERVER_SECRET,
    parseInt(expiredTs),
    ""
  );

  return resp.json({
    token:
      token +
      "#" +
      Buffer.from(
        JSON.stringify({ userID, roomID, userName, APP_ID })
      ).toString("base64"),
  });
};
app.use(cors());
app.get("/access_token", nocache, generateAccessToken);

app.listen(PORT, function () {
  console.log("Service URL http://127.0.0.1:" + PORT + "/");
  console.log("Token request, /access_token?uid=[user id]");
  console.log(
    "Token with expiring time request, /access_token?uid=[user id]&expiredTs=[expire ts]"
  );
});
