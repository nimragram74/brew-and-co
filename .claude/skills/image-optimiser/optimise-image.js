#!/usr/bin/env node
// Usage: node optimise-image.js <url> <output-name> [width]
// Saves output as public/<output-name>.webp

const https = require("https");
const http = require("http");
const path = require("path");
const fs = require("fs");

const [, , url, outputName, widthArg] = process.argv;

if (!url || !outputName) {
  console.error("Usage: node optimise-image.js <url> <output-name> [width]");
  process.exit(1);
}

const width = parseInt(widthArg || "1200", 10);
const publicDir = path.join(process.cwd(), "public");
const outputPath = path.join(publicDir, `${outputName}.webp`);

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

const client = url.startsWith("https") ? https : http;

console.log(`Downloading: ${url}`);

client.get(url, (res) => {
  if (res.statusCode === 301 || res.statusCode === 302) {
    const redirect = res.headers.location;
    console.log(`Redirecting to: ${redirect}`);
    const rc = redirect.startsWith("https") ? https : http;
    rc.get(redirect, process2);
    return;
  }
  process2(res);
});

function process2(res) {
  const chunks = [];
  res.on("data", (chunk) => chunks.push(chunk));
  res.on("end", async () => {
    const buffer = Buffer.concat(chunks);
    try {
      const sharp = require("sharp");
      await sharp(buffer)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(outputPath);
      const stat = fs.statSync(outputPath);
      console.log(`✓ Saved: public/${outputName}.webp (${(stat.size / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.error("Error processing image:", err.message);
      process.exit(1);
    }
  });
  res.on("error", (err) => { console.error(err.message); process.exit(1); });
}
