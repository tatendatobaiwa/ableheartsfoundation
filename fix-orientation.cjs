const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

function fixOrientation(files) {
    files.forEach(file => {
        const outputDir = 'src/assets/optimized/fixed'; // Use a different directory
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const outputFile = path.join(outputDir, path.basename(file));
        sharp(file)
            .toFile(outputFile)
            .then(() => console.log(`Processed ${file} -> ${outputFile}`))
            .catch(err => console.error(`Error processing ${file}: ${err}`));
    });
}

const inputDir = 'src/assets/optimized';
const files = fs.readdirSync(inputDir).map(file => path.join(inputDir, file));
fixOrientation(files);
