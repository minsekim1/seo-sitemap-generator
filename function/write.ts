import fs from "fs";
export const write = async (content: string, path = "./query.txt") =>
  await fs.writeFileSync(path, content, { flag: "a+" });
export const reset = async () => await fs.writeFileSync("./query.txt", "", { flag: "a" });
