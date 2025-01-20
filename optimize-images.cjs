const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './src/assets';
const outputDir = './src/assets/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process all images in directory and subdirectories
function processImages(directory) {
  fs.readdirSync(directory, { withFileTypes: true }).forEach(file => {
    const inputPath = path.join(directory, file.name);

    if (file.isDirectory()) {
      processImages(inputPath);
      return;
    }

    // Only process image files
    if (!/\.(jpg|jpeg|png)$/i.test(file.name)) return;

    // Create relative output path
    const relativePath = path.relative(inputDir, directory);
    const outputPath = path.join(outputDir, relativePath);

    // Create output subdirectory if needed
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    // Convert to WebP
    const outputFilename = path.join(outputPath, `${path.parse(file.name).name}.webp`);

    sharp(inputPath)
      .rotate() // Correct orientation based on EXIF data
      .webp({ quality: 80 })
      .resize(1200, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .toFile(outputFilename)
      .then(() => console.log(`Converted ${inputPath} to WebP`))
      .catch(err => console.error(`Error processing ${inputPath}:`, err));
  });
}

processImages(inputDir);
