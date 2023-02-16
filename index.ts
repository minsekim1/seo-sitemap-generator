import { reset, write } from "./function/write";

// 변수
const isReset = true;
const filepath = "sitemap.xml";

// 파일 초기화
if (isReset) {
  reset(filepath);
  // 기본 헤더 추가
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;
  write(header, filepath);
}

// 내용
var xml = require("xml");
const xmlString = xml({ url: [{ loc: "locasd" }, { priority: "1.01111" }] }, true);
write(xmlString.toString(), filepath);

// 마지막 Footer
if (isReset) write("\n</urlset>", filepath);
