const fs = require('fs');
const archiver = require('archiver');

const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});

archive.on('error', function (err) {
    throw err;
});

const dirname = 'test-files'
// create a file to stream archive data to.
const output = fs.createWriteStream(`${dirname}.zip`);

// append files from a sub-directory, putting its contents at the root of archive
archive.directory(dirname, false).pipe(output);
archive.finalize();
