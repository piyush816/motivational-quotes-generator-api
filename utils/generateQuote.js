const axios = require("axios");
const textToImage = require("text-to-image");

const generateQuote = async (bgColor, textColor) => {
  try {
    // fething qoutes
    const {
      data: { content },
    } = await axios.get("https://api.quotable.io/random");

    // generating image from  quote
    const uri = await textToImage.generate(content, {
      bgColor: bgColor ? bgColor : "#1a1110",
      fontFamily: "Code",
      fontPath: "public/CODE Bold.otf",
      verticalAlign: "center",
      margin: 54,
      textAlign: "center",
      debug: true,
      debugFilename: "public/output.jpg",
      customHeight: 1080,
      maxWidth: 1920,
      fontWeight: "bold",
      textColor: textColor ? textColor : "white",
      fontSize: 42,
      lineHeight: 72,
    });

    return uri;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = generateQuote;
