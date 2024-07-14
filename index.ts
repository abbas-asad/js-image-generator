import * as fs from 'fs';
const imgGen = require('js-image-generator');

// Function to handle image generation
function generateImage(width: number, height: number, quality: number, fileName: string) {
    imgGen.generateImage(width, height, quality, (err: Error, image: { data: Buffer }) => {
        if (err) {
            console.error('Error generating image:', err);
            return;
        }
        fs.writeFileSync(fileName, image.data);
        console.log(`Generated image: ${fileName}`);
    });
}

// Generate images
for (let i = 1; i <= 10; i++) {
    generateImage(800, 600, 80, `dummy-${i}.jpg`);
}
