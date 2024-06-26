const fs = require('fs');
const path = require('path');

const createFile = (req,res) => {
  const currentDate = new Date();
  const content = currentDate.getTime().toString();
  const formattedDate = currentDate.toString().replace(/:/g, '-'); // Formatting the date
  const filename = `${formattedDate}.txt`; // Use the formatted date as the filename
  const fullpath = path.join(__dirname, 'files', filename); // Include filename in the path

  fs.writeFile(fullpath, content, err => {
    if (err) {
      console.error(err);
    } else {
      res.send("files will be created everytime  when you refresh the browser")
    }
  });
}

module.exports = createFile;
