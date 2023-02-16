import fs from "fs";
export const write = async (content: string, path = "./query.txt") =>
  await fs.writeFileSync(path, content, { flag: "a+" });
export const reset = async (path = "./query.txt") => await fs.writeFileSync(path, "", { flag: "w" });
