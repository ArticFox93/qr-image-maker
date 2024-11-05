/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import { createWriteStream } from 'fs';

inquirer.prompt([
    {
        name: 'URL',
        message: 'Type in your URL: ',
        type: 'input'
    }
])
.then(async function(answer) {
    console.log(answer.URL);
    var qr = await import('qr-image');

    var qr_png = qr.image(answer.URL, { type: 'png' });

    const WriteStream = createWriteStream('qr-code.png');
    qr_png.pipe(WriteStream);
})


