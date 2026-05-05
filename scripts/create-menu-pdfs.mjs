import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outDir = path.join(root, "public", "menu");
fs.mkdirSync(outDir, { recursive: true });

const menus = {
  italiano: [
    {
      title: "ANTIPASTI",
      items: [
        ["Tris di antipasti", "12.00"],
        ["Vitello tonnato", "12.00"],
        ["Marinata di Chianina con rucola e scaglie di parmigiano", "13.00"],
        ["Pizzichini di pasta lievitata con selezione di salumi", "12.00"],
        ["Acciughe del Cantabrico con bagnetto rosso e burro alle erbe", "12.00"],
        ["Speck d'oca affumicato con mandorle tostate, chips e arance", "12.00"],
        ["Selezione di tartare", "16.00"],
      ],
    },
    {
      title: "PRIMI",
      items: [
        ["Gnocchi di patate fatti in casa al ragu", "12.00"],
        ["Gnocchi di patate fatti in casa al burro e timo", "10.00"],
        ["Orecchiette pomodoro", "10.00"],
        ["Orecchiette al fuoco (pomodoro e peperoncino)", "10.00"],
        ["Orecchiette con cicoria, fave e pomodorini", "10.00"],
        ["Spaghettone burro Occelli, acciughe del Cantabrico e panko tostato", "12.00"],
        ["Tagliolini alla Amatriciana con pecorino romano", "12.00"],
        ["Plin al ragu di Wagyu", "12.00"],
        ["Plin al burro e timo", "10.00"],
      ],
    },
    {
      title: "CARNI",
      items: [
        ["Picanha Wagyu", "23.00"],
        ["Tagliata BIO Romagnola con Castelmagno e pomodori secchi", "22,00"],
        ["Tagliata BIO Romagnola con rucola", "19.00"],
        ["Tagliata BIO Romagnola con pecorino di Pienza e pomodorini freschi", "20.00"],
        ["Tagliata BIO Romagnola con blue stilton", "22.00"],
        ["Rib Eye con Catalogna, Acciughe del Cantabrico e capperi di Pantelleria I.G.P.", "23.00"],
        ["Entrecote di Angus Argentino", "23.00"],
        ["Hamburger BIO Romagnola", "10.00"],
      ],
    },
    {
      title: "CONTORNI",
      items: [
        ["Patatine fritte / Cicorietta con crema di fave", "6.00"],
        ["Caponatina / Cicorietta saltata in padella", "6.00"],
        ["Insalata mista o verde / Patate e carote saltate in padella", "6.00"],
      ],
    },
  ],
  english: [
    {
      title: "STARTERS",
      items: [
        ["Starter trio", "12.00"],
        ["Veal with tuna sauce", "12.00"],
        ["Chianina marinated beef with rocket and Parmesan shavings", "13.00"],
        ["Leavened dough bites with a selection of cured meats", "12.00"],
        ["Cantabrian anchovies with red sauce and herb butter", "12.00"],
        ["Smoked goose speck with toasted almonds, chips and orange", "12.00"],
        ["Tartare selection", "16.00"],
      ],
    },
    {
      title: "FIRST COURSES",
      items: [
        ["Homemade potato gnocchi with meat ragu", "12.00"],
        ["Homemade potato gnocchi with butter and thyme", "10.00"],
        ["Orecchiette with tomato", "10.00"],
        ["Orecchiette al fuoco (tomato and chili pepper)", "10.00"],
        ["Orecchiette with chicory, broad beans and cherry tomatoes", "10.00"],
        ["Thick spaghetti with Occelli butter, Cantabrian anchovies and toasted panko", "12.00"],
        ["Tagliolini Amatriciana with Pecorino Romano", "12.00"],
        ["Plin with Wagyu ragu", "12.00"],
        ["Plin with butter and thyme", "10.00"],
      ],
    },
    {
      title: "MEAT",
      items: [
        ["Wagyu picanha", "23.00"],
        ["BIO Romagnola sliced beef with Castelmagno and sun-dried tomatoes", "22.00"],
        ["BIO Romagnola sliced beef with rocket", "19.00"],
        ["BIO Romagnola sliced beef with Pecorino di Pienza and fresh tomatoes", "20.00"],
        ["BIO Romagnola sliced beef with blue Stilton", "22.00"],
        ["Rib eye with Catalonia chicory, Cantabrian anchovies and Pantelleria capers I.G.P.", "23.00"],
        ["Argentinian Angus entrecote", "23.00"],
        ["BIO Romagnola hamburger", "10.00"],
      ],
    },
    {
      title: "SIDES",
      items: [
        ["Fried baby potatoes / chicory with broad bean cream", "6.00"],
        ["Caponata / pan-sauteed chicory", "6.00"],
        ["Mixed or green salad / pan-sauteed potatoes and carrots", "6.00"],
      ],
    },
  ],
  francais: [
    {
      title: "ENTREES",
      items: [
        ["Trio d'entrees", "12.00"],
        ["Veau sauce thon", "12.00"],
        ["Chianina marinee avec roquette et copeaux de parmesan", "13.00"],
        ["Bouchees de pate levee avec selection de charcuterie", "12.00"],
        ["Anchois de Cantabrie avec sauce rouge et beurre aux herbes", "12.00"],
        ["Speck d'oie fume avec amandes grillees, chips et orange", "12.00"],
        ["Selection de tartares", "16.00"],
      ],
    },
    {
      title: "PATES",
      items: [
        ["Gnocchis de pommes de terre maison au ragu", "12.00"],
        ["Gnocchis de pommes de terre maison au beurre et thym", "10.00"],
        ["Orecchiette tomate", "10.00"],
        ["Orecchiette al fuoco (tomate et piment)", "10.00"],
        ["Orecchiette avec chicoree, feves et tomates cerises", "10.00"],
        ["Spaghettone au beurre Occelli, anchois de Cantabrie et panko grille", "12.00"],
        ["Tagliolini a l'Amatriciana avec pecorino romano", "12.00"],
        ["Plin au ragu de Wagyu", "12.00"],
        ["Plin au beurre et thym", "10.00"],
      ],
    },
    {
      title: "VIANDES",
      items: [
        ["Picanha Wagyu", "23.00"],
        ["Emince de boeuf BIO Romagnola avec Castelmagno et tomates sechees", "22.00"],
        ["Emince de boeuf BIO Romagnola avec roquette", "19.00"],
        ["Emince de boeuf BIO Romagnola avec pecorino de Pienza et tomates fraiches", "20.00"],
        ["Emince de boeuf BIO Romagnola avec blue Stilton", "22.00"],
        ["Rib eye avec chicoree Catalogna, anchois de Cantabrie et capres de Pantelleria I.G.P.", "23.00"],
        ["Entrecote d'Angus argentin", "23.00"],
        ["Hamburger BIO Romagnola", "10.00"],
      ],
    },
    {
      title: "ACCOMPAGNEMENTS",
      items: [
        ["Petites pommes de terre frites / chicoree avec creme de feves", "6.00"],
        ["Caponata / chicoree sautee a la poele", "6.00"],
        ["Salade mixte ou verte / pommes de terre et carottes sautees", "6.00"],
      ],
    },
  ],
};

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function wrapText(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function textBlock(lines, x, y, className, lineHeight) {
  return `
    <text x="${x}" y="${y}" class="${className}">
      ${lines.map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`).join("")}
    </text>
  `;
}

function pageSvg(page) {
  const pageWidth = 1240;
  const pageHeight = 1754;
  const cardX = 88;
  const cardY = 82;
  const cardW = 1064;
  const cardH = 1590;
  const left = 170;
  const priceX = 990;
  const titleY = 270;
  const maxChars = page.title.length > 12 ? 30 : 34;
  const itemSize = page.items.length > 8 ? 43 : 46;
  const lineHeight = page.items.length > 8 ? 54 : 58;
  const gap = page.items.length > 8 ? 31 : 45;
  let y = 430;

  const rows = page.items.map(([name, price]) => {
    const lines = wrapText(name, maxChars);
    const row = `
      ${textBlock(lines, left, y, "item", lineHeight)}
      <text x="${priceX}" y="${y}" class="price" text-anchor="end">€ ${escapeXml(price)}</text>
    `;
    y += lines.length * lineHeight + gap;
    return row;
  }).join("");

  return `
    <svg width="${pageWidth}" height="${pageHeight}" viewBox="0 0 ${pageWidth} ${pageHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${pageWidth}" height="${pageHeight}" fill="#f7f2e8"/>
      <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" fill="#001b17"/>
      <style>
        .title {
          fill: #f8f6f0;
          font-family: "Arial Narrow", Arial, Helvetica, sans-serif;
          font-size: 86px;
          font-weight: 700;
          letter-spacing: 22px;
        }
        .item {
          fill: #f8f6f0;
          font-family: "Arial Narrow", Arial, Helvetica, sans-serif;
          font-size: ${itemSize}px;
          font-weight: 700;
          letter-spacing: 5px;
        }
        .price {
          fill: #f8f6f0;
          font-family: "Arial Narrow", Arial, Helvetica, sans-serif;
          font-size: ${itemSize}px;
          font-weight: 700;
          letter-spacing: 5px;
        }
      </style>
      <text x="${left}" y="${titleY}" class="title">${escapeXml(page.title)}</text>
      ${rows}
      <line x1="${cardX}" y1="1588" x2="${cardX + cardW}" y2="1588" stroke="#f8f6f0" stroke-width="8" stroke-linecap="round" stroke-dasharray="1 18"/>
      <line x1="${cardX}" y1="${cardY + cardH - 2}" x2="${cardX + cardW}" y2="${cardY + cardH - 2}" stroke="#f8f6f0" stroke-width="3"/>
    </svg>
  `;
}

async function renderPages(pages) {
  const buffers = [];
  for (const page of pages) {
    const jpeg = await sharp(Buffer.from(pageSvg(page)))
      .jpeg({ quality: 94, mozjpeg: true })
      .toBuffer();
    buffers.push(jpeg);
  }
  return buffers;
}

async function pdfFromJpegs(jpegInputs, outputPath) {
  const pages = [];
  for (const input of jpegInputs) {
    const buffer = Buffer.isBuffer(input) ? input : fs.readFileSync(input);
    const meta = await sharp(buffer).metadata();
    pages.push({ buffer, width: meta.width, height: meta.height });
  }

  const chunks = [];
  const offsets = [0];
  const add = (value) => chunks.push(Buffer.isBuffer(value) ? value : Buffer.from(value, "binary"));
  const objects = [];
  const addObject = (body) => {
    objects.push(body);
    return objects.length;
  };

  const catalogId = addObject("pending");
  const pagesId = addObject("pending");
  const pageIds = [];
  const imageIds = [];
  const contentIds = [];

  for (const page of pages) {
    const imageId = addObject({
      dict: `<< /Type /XObject /Subtype /Image /Width ${page.width} /Height ${page.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.buffer.length} >>`,
      stream: page.buffer,
    });
    const content = Buffer.from(`q\n${page.width} 0 0 ${page.height} 0 0 cm\n/Im0 Do\nQ\n`);
    const contentId = addObject({
      dict: `<< /Length ${content.length} >>`,
      stream: content,
    });
    const pageId = addObject("pending");
    imageIds.push(imageId);
    contentIds.push(contentId);
    pageIds.push(pageId);
  }

  objects[catalogId - 1] = `<< /Type /Catalog /Pages ${pagesId} 0 R /PageMode /UseNone >>`;
  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  pages.forEach((page, index) => {
    objects[pageIds[index] - 1] =
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${page.width} ${page.height}] ` +
      `/Resources << /XObject << /Im0 ${imageIds[index]} 0 R >> >> /Contents ${contentIds[index]} 0 R >>`;
  });

  add("%PDF-1.4\n");
  objects.forEach((object, index) => {
    offsets[index + 1] = Buffer.concat(chunks).length;
    add(`${index + 1} 0 obj\n`);
    if (typeof object === "string") {
      add(`${object}\n`);
    } else {
      add(`${object.dict}\nstream\n`);
      add(object.stream);
      add("\nendstream\n");
    }
    add("endobj\n");
  });

  const xrefOffset = Buffer.concat(chunks).length;
  add(`xref\n0 ${objects.length + 1}\n`);
  add("0000000000 65535 f \n");
  for (let i = 1; i <= objects.length; i += 1) {
    add(`${String(offsets[i]).padStart(10, "0")} 00000 n \n`);
  }
  add(`trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);
  fs.writeFileSync(outputPath, Buffer.concat(chunks));
}

await pdfFromJpegs(await renderPages(menus.italiano), path.join(outDir, "menu-italiano.pdf"));
await pdfFromJpegs(await renderPages(menus.english), path.join(outDir, "menu-english.pdf"));
await pdfFromJpegs(await renderPages(menus.francais), path.join(outDir, "menu-francais.pdf"));

console.log("Created rebuilt menu PDFs in public/menu");
