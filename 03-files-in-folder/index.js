const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err.message);

  files.forEach((file) => {
    if (file.isFile()) {
      const pathToFile = path.join(folderPath, file.name);
      const fileExt = path.extname(pathToFile).replace('.', '');
      const fileName = file.name.replace('.' + fileExt, '');

      fs.stat(pathToFile, (err, stats) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log(`${fileName} - ${fileExt} - ${stats.size}b`);
        }
      });
    }
  });
});
