// importing and reading file

const fs = require("fs");
const exampleTextInput = fs.readFileSync("./data/exampleText.txt", "utf-8");
console.log(exampleTextInput);

// modifying file

const text = `${exampleTextInput}\nFiat is worse.`;
fs.writeFileSync("./data/exampleTextOutput.txt", text);
