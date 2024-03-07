import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// get user input
inquirer
  .prompt([{
    /* Pass your questions in here */
        message: "Enter the url for the site that you want to create a qr image for: ",
        name: "url"
  }])
  .then((answers) => {
    // Use user feedback to convert the url that the user entered into QR code image.
    var qr_image = qr.image(answers.url);
    qr_image.pipe(fs.createWriteStream("qr_image.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error)
    } else {
      // Something else went wrong
      console.log("Error Occured.")
    }
  });