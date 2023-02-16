import { write } from "./function/write";
import XMLWriter from "xml-writer";

const xml = new XMLWriter();
xml.startDocument();
xml.startElement("urlset");
xml.writeAttribute("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");
xml.writeAttribute("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
xml.writeAttribute(
  "xsi:schemaLocation",
  "http://www.sitemaps.org/schemas/sitemap/0.9            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
);
xml.text("Some content");
xml.endDocument();

write(xml.toString(), "sitemap.xml");
