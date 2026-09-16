const fs = require('fs');

const source = 'C:\\b25cs351l\\lab5\\largefile.txt';
const destination = 'C:\\b25cs351l\\lab5\\copy-largefile.txt';

const readableStream = fs.createReadStream(source);
const writableStream = fs.createWriteStream(destination);

readableStream.pipe(writableStream);

writableStream.on('finish', () => {
    console.log('Large file copied successfully!');
});

readableStream.on('error', (err) => {
    console.log('Read Error:', err.message);
});

writableStream.on('error', (err) => {
    console.log('Write Error:', err.message);
});

    