import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
  .prompt([
   {
    type: 'input',
    name: 'url',
    message: 'Enter the URL :',
   }
  ])
  .then((answers) => {

    console.log("url was successfully written !")

    var qr_png = qr.image(answers.url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr.png'));
    var png_string = qr.imageSync(answers.url, { type: 'png' });
    console.log("qr code is successfully genereated !")

    fs.writeFile("url.txt",answers.url,(err)=>{
        if(err){
            console.log("Error")
        }
        else{
            console.log("url is successfully stored !")
        }
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment")
    } else {
      console.log("Something went wrong")
    }
  });

