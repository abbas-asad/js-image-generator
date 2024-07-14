"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var imgGen = require('js-image-generator');
// Function to handle image generation
function generateImage(width, height, quality, fileName) {
    imgGen.generateImage(width, height, quality, function (err, image) {
        if (err) {
            console.error('Error generating image:', err);
            return;
        }
        fs.writeFileSync(fileName, image.data);
        console.log("Generated image: ".concat(fileName));
    });
}
// Generate images
for (var i = 1; i <= 10; i++) {
    generateImage(800, 600, 80, "dummy-".concat(i, ".jpg"));
}
