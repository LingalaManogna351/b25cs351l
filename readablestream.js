const fs = require('fs');
const readableStream = fs.createReadStream('input.txt', {
    encoding: 'utf8'
});
const writableStream = fs.createWriteStream('output.txt');
readableStream.on('data', (chunk) => {
    console.log('Reading chunk:', chunk);
    writableStream.write(chunk);
});
readableStream.on('end', () => {
    console.log('Finished reading the file.');
    writableStream.end();
});
readableStream.on('error', (err) => {
    console.error('Error while reading:', err.message);
});
writableStream.on('error', (err) => {
    console.error('Error while writing:', err.message);
});
writableStream.on('finish', () => {
    console.log('Data successfully written to output.txt');
});
