import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeImages() {
  const nurseflowDir = path.resolve('public', 'images', 'nurseflow');
  const files = [
    { in: 'cppt-workspace.png', out: 'cppt-workspace.webp' },
    { in: 'pharmacy-fefo.png', out: 'pharmacy-fefo.webp' },
    { in: 'triage-command.png', out: 'triage-command.webp' },
  ];

  for (const f of files) {
    const inputPath = path.join(nurseflowDir, f.in);
    const outputPath = path.join(nurseflowDir, f.out);

    if (fs.existsSync(inputPath)) {
      const initialStats = fs.statSync(inputPath);
      await sharp(inputPath)
        .webp({ quality: 82, effort: 6 })
        .toFile(outputPath + '.tmp');

      fs.unlinkSync(outputPath);
      fs.renameSync(outputPath + '.tmp', outputPath);

      const optimizedStats = fs.statSync(outputPath);
      console.log(
        `Optimized ${f.in} (${(initialStats.size / 1024).toFixed(1)} KB) -> ${f.out} (${(optimizedStats.size / 1024).toFixed(1)} KB) [Saved ${(((initialStats.size - optimizedStats.size) / initialStats.size) * 100).toFixed(1)}%]`
      );
    }
  }
}

optimizeImages().catch((err) => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
