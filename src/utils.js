const axios = require("axios")
const FormData = require('form-data');
async function uploadCreds(buffer, filename) {
    const form = new FormData();
    form.append('file', buffer, { filename });
    const response = await axios.post('https://cdn-haki.zone.id/upload', form, {
        headers: form.getHeaders(),
    });
    return response.data;
}

function generateRandomString(prefix = '', suffix = '') {
  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const random = Math.floor(Math.random() * 10000); // Random number between 0-9999
  return `${prefix}-${date}-${suffix}`;
}

function codeFromUrl(url) {
  // Match anything between the last "/" and the file extension
  const match = url.match(/\/([^\/?#]+)\.[^\/?#]+$/);
  return match ? match[1] : null;
}

module.exports = {
    uploadCreds,
    generateRandomString,
    codeFromUrl
}