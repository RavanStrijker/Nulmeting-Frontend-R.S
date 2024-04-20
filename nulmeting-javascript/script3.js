let axios = require("axios")

async function axiosGET(){
    const response = await axios.get("https://inwerk-files.s3-eu-west-1.amazonaws.com/opdracht3.json");
    console.log(response.data);
}

axiosGET()