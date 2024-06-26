const path = require('path');
const fs = require('fs');

const readFile = (req, res) => {

    const folderPath = path.join(__dirname, '/files')
    
    fs.readdir(folderPath, (err, files) => {
        if (err)
            console.log(err);
        else {

           res.send({
            files: files
           })
        }
    })

}

module.exports = readFile;