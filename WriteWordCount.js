const fs = require("fs");

const data = fs.readFileSync("file.txt", "utf-8");
console.log(data);

const wordCount = data.split(" ").length;
console.log("Total word count in file.txt:", wordCount);

const writeWordCount = () => {
    fs.writeFileSync("wordcount.txt", `Total words: ${wordCount}`);
};

writeWordCount();
