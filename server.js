// ✨ BBY API by Eren Yeh ✨
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/bby", (req, res) => {
  const name = req.query.name || "Sweetie";
  const messages = [
    `Hi ${name}, you're my sunshine!`,
    `${name}, you're the reason I smile!`,
    `Hey ${name}, you're the cutest thing ever!`,
    `You're my bby, ${name}, forever and always!`,
    `Aww ${name}, you're making my heart melt!`,
    `Sweet ${name}, you mean the world to me!`,
    `${name}, you're a blessing in my life!`,
    `My lil cutie ${name}, stay adorable!`
  ];
  const random = messages[Math.floor(Math.random() * messages.length)];
  
  res.json({
    name,
    message: random,
    status: "success",
    author: "Eren Yeh "
  });
});

app.get("/", (req, res) => {
  res.send("BBY API is running. Use /bby?name=YourName");
});

app.listen(port, () => {
  console.log(`✨ BBY API running at http://localhost:${port}`);
});