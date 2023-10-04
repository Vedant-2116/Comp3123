const express = require("express");
const app = express();
const router = express.Router();

const fs = require("fs"); 
const user = JSON.parse(fs.readFileSync("./user.json", "utf8"));

router.get("/home", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});


router.get("/profile", (req, res) => {
  res.json(user);
});


router.get("/login", (req, res) => {
  const { username, password } = req.query;

  const inputUsername = String(username);
  const inputPassword = String(password);

  console.log(inputUsername);
  console.log(inputPassword);
  if (inputUsername === user.username && inputPassword === user.password) {
    res.json({
      status: true,
      message: "User Is valid",
    });
  } else if (inputUsername !== user.username) {
    res.json({
      status: false,
      message: "User Name is invalid",
    });
  } else {
    res.json({
      status: false,
      message: "Password is invalid",
    });
  }
});


router.get("/logout/:username", (req, res) => {
  const { username } = req.params;
  res.send(`<b>${username} successfully logged out.</b>`);
});

app.use("/", router);

app.listen(process.env.PORT || 8081, () => {
  console.log("Web Server is listening at port " + (process.env.PORT || 8081));
});
