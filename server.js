const express = require("express");
const generateQuote = require("./utils/generateQuote");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
  const { textColor, bgColor } = req.query;

  generateQuote(bgColor, textColor);

  const userFileName = `${new Date().getTime()}.jpg`;

  return res.download("public/output.jpg", userFileName);
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
