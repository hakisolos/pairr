const fs = require("fs");
const path = require("path");
const axios = require("axios");

async function retrieveCreds(code, saveDir) {
    const url = `https://cdn-haki.zone.id/files/${code}.json`;
    const { data } = await axios.get(url, { responseType: "arraybuffer" });

    if (!fs.existsSync(saveDir)) {
        fs.mkdirSync(saveDir, { recursive: true });
    }

    const savePath = path.join(saveDir, "creds.json");
    fs.writeFileSync(savePath, data);
    return savePath;
}


//easy
