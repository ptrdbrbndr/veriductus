/**
 * Genereert public/whitepaper-qa-staat-nl.pdf vanuit docs/whitepaper-qa-staat-nl.md
 * Draai met: npx tsx scripts/generate-whitepaper-pdf.ts
 */
import { chromium } from "playwright";
import * as fs from "fs";
import * as path from "path";

const MD_PATH = path.resolve(__dirname, "../docs/whitepaper-qa-staat-nl.md");
const PDF_PATH = path.resolve(__dirname, "../public/whitepaper-qa-staat-nl.pdf");

function markdownToHtml(md: string): string {
  // Simpele markdown → HTML conversie (voldoende voor dit document)
  let html = md
    // Metadata regel verwijderen
    .replace(/^>[\s\S]*?_Dit whitepaper is beschikbaar[\s\S]*?_\n\n---\n/m, "")
    // Headers
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/_([^_]+)_/g, "<em>$1</em>")
    // Blockquotes
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    // Horizontal rules
    .replace(/^---$/gm, "<hr>")
    // Unordered lists
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    // Ordered lists
    .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
    // Wrap consecutive <li> in <ul>
    .replace(/((?:<li>.*<\/li>\n?)+)/g, "<ul>$1</ul>")
    // Paragraphs (lines that aren't already tags)
    .replace(/^(?!<[a-z])([\w\d«»(„""].+)$/gm, "<p>$1</p>");

  return html;
}

async function main() {
  const md = fs.readFileSync(MD_PATH, "utf-8");
  const bodyHtml = markdownToHtml(md);

  const fullHtml = `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 11pt;
    line-height: 1.7;
    color: #1D1E4B;
    padding: 0;
  }

  /* Cover page */
  .cover {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(135deg, #1D1E4B 0%, #4776A8 100%);
    color: white;
    padding: 60px;
    page-break-after: always;
  }
  .cover h1 {
    font-size: 32pt;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 16px;
  }
  .cover .subtitle {
    font-size: 14pt;
    font-weight: 400;
    opacity: 0.85;
    margin-bottom: 40px;
  }
  .cover .meta {
    font-size: 10pt;
    opacity: 0.6;
    margin-top: auto;
  }
  .cover .logo {
    font-size: 16pt;
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 60px;
    padding: 8px 20px;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 8px;
  }
  .cover .badge {
    display: inline-flex;
    gap: 24px;
    margin-top: 32px;
    font-size: 9pt;
    opacity: 0.7;
  }

  /* Content */
  .content {
    padding: 40px 60px;
    max-width: 100%;
  }

  h1 { font-size: 22pt; font-weight: 800; margin: 40px 0 16px; color: #1D1E4B; page-break-after: avoid; }
  h2 { font-size: 16pt; font-weight: 700; margin: 32px 0 12px; color: #4776A8; border-bottom: 2px solid #E2E4EC; padding-bottom: 6px; page-break-after: avoid; }
  h3 { font-size: 12pt; font-weight: 700; margin: 24px 0 8px; color: #1D1E4B; page-break-after: avoid; }
  p { margin: 8px 0; color: #3A3B5C; }
  strong { color: #1D1E4B; }

  ul, ol { margin: 8px 0 8px 24px; color: #3A3B5C; }
  li { margin: 4px 0; }

  blockquote {
    border-left: 3px solid #5FC38E;
    padding: 8px 16px;
    margin: 16px 0;
    background: #F4F6FA;
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: #3A3B5C;
  }

  hr {
    border: none;
    border-top: 1px solid #E2E4EC;
    margin: 24px 0;
  }

  /* Footer */
  .footer {
    margin-top: 40px;
    padding-top: 16px;
    border-top: 2px solid #4776A8;
    text-align: center;
    font-size: 9pt;
    color: #6B6C7F;
  }

  @page {
    margin: 0;
    size: A4;
  }
  @page :not(:first) {
    margin: 20mm 15mm;
  }
</style>
</head>
<body>

<!-- Cover -->
<div class="cover">
  <div class="logo">VERIDUCTUS</div>
  <h1>De staat van QA in<br>Nederlandse softwareteams</h1>
  <p class="subtitle">Een whitepaper over softwarekwaliteit, testautomatisering<br>en de weg vooruit</p>
  <div class="badge">
    <span>12+ jaar ervaring</span>
    <span>150+ projecten</span>
    <span>98% klantbehoud</span>
  </div>
  <p class="meta">Veriductus | 2026 | veriductus.nl</p>
</div>

<!-- Content -->
<div class="content">
${bodyHtml}
</div>

</body>
</html>`;

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(fullHtml, { waitUntil: "networkidle" });
  await page.pdf({
    path: PDF_PATH,
    format: "A4",
    printBackground: true,
    margin: { top: "0", bottom: "0", left: "0", right: "0" },
  });
  await browser.close();

  const stats = fs.statSync(PDF_PATH);
  console.log(`PDF gegenereerd: ${PDF_PATH} (${(stats.size / 1024).toFixed(0)} KB)`);
}

main().catch((err) => {
  console.error("PDF generatie mislukt:", err);
  process.exit(1);
});
