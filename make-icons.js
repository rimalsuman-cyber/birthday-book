// Generates icon-192.png, icon-512.png (maskable) with a simple cake on purple.
// Pure Node (zlib) PNG encoder — no dependencies.
const fs = require("fs");
const zlib = require("zlib");

function makePNG(size) {
  const W = size, H = size;
  const buf = Buffer.alloc(W * H * 4);
  const set = (x, y, r, g, b, a = 255) => {
    if (x < 0 || y < 0 || x >= W || y >= H) return;
    const i = (y * W + x) * 4;
    buf[i] = r; buf[i + 1] = g; buf[i + 2] = b; buf[i + 3] = a;
  };
  const rect = (x0, y0, x1, y1, c) => {
    for (let y = Math.round(y0); y < Math.round(y1); y++)
      for (let x = Math.round(x0); x < Math.round(x1); x++) set(x, y, ...c);
  };

  // Background: vertical purple gradient
  for (let y = 0; y < H; y++) {
    const t = y / H;
    const r = Math.round(108 + t * 20), g = Math.round(92 + t * 10), b = Math.round(231 - t * 20);
    for (let x = 0; x < W; x++) set(x, y, r, g, b);
  }

  const u = size / 512; // scale factor relative to 512 design
  const cream = [255, 244, 224], frost = [255, 255, 255], plate = [230, 230, 240];
  const candle = [232, 67, 147], flame = [255, 209, 102];

  // Plate
  rect(120 * u, 360 * u, 392 * u, 384 * u, plate);
  // Cake body (two tiers)
  rect(150 * u, 250 * u, 362 * u, 362 * u, cream);
  rect(178 * u, 190 * u, 334 * u, 252 * u, cream);
  // Frosting drips (top edges lighter)
  rect(150 * u, 250 * u, 362 * u, 266 * u, frost);
  rect(178 * u, 190 * u, 334 * u, 204 * u, frost);
  // Candles
  for (const cx of [214, 256, 298]) {
    rect((cx - 6) * u, 140 * u, (cx + 6) * u, 190 * u, candle);
    // flame
    rect((cx - 5) * u, 118 * u, (cx + 5) * u, 140 * u, flame);
    rect((cx - 3) * u, 104 * u, (cx + 3) * u, 120 * u, flame);
  }

  // Encode PNG
  const raw = Buffer.alloc((W * 4 + 1) * H);
  for (let y = 0; y < H; y++) {
    raw[y * (W * 4 + 1)] = 0; // filter: none
    buf.copy(raw, y * (W * 4 + 1) + 1, y * W * 4, (y + 1) * W * 4);
  }
  const idat = zlib.deflateSync(raw);
  const chunk = (type, data) => {
    const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
    const t = Buffer.from(type);
    const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([t, data])) >>> 0);
    return Buffer.concat([len, t, data, crc]);
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit, RGBA
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);
}

// CRC32
const crcTable = (() => {
  const t = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return c ^ 0xffffffff;
}

fs.writeFileSync("icon-192.png", makePNG(192));
fs.writeFileSync("icon-512.png", makePNG(512));
console.log("Wrote icon-192.png and icon-512.png");
