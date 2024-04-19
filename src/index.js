// Requires "axios" and "form-data" to be installed (see https://www.npmjs.com/package/axios and https://www.npmjs.com/package/form-data)
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:/Users/Zaid/Desktop/Test/CSC_2953.jpg';
const formData = new FormData();
formData.append('full', 'full');
formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));

axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    ...formData.getHeaders(),
    'X-Api-Key': 'QLpEdHfUKDGvZUdfVLVPdzJ7',
  },
  encoding: null
})
.then((response) => {
  if(response.status != 200) return console.error('Error:', response.status, response.statusText);
  fs.writeFileSync("Imagen_Nueva_sinfondo2.png", response.data);
})
.catch((error) => {
    return console.error('Request failed:', error);
});