import fs from "fs";

export const privateKey = fs.readFileSync("./environment/keys/jwtRS256.key");
export const publicKey = fs.readFileSync("./environment/keys/jwtRS256.key.pub");
