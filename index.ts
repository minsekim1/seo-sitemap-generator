let XMLWriter = require("xml-writer");
let xw = new XMLWriter();
xw.startDocument();
xw.startElement("root");
xw.writeAttribute("foo", "value");
xw.text("Some content");
xw.endDocument();
console.log(xw.toString());
