const { downloadPokemonPicture } = require("./downloader.js");

downloadPokemonPicture().then(saveFileOutput => {
    console.log("New Image is saved to: " + saveFileOutput)
}).catch(error => {
    console.log(error);
});

async function exampleDownload(){
    let saveFileOutput = await downloadPokemonPicture();
    console.log("New image is async saved to: " + saveFileOutput);
}
exampleDownload();


