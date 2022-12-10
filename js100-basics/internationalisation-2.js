function localGreet(code) {

  // extracting language and region from the code using extractRegion()
  // assign the return from extractRegion to langRegion.
  let langRegion = extractRegion(code);

  switch (langRegion) {
    case "en_US":
      console.log("Hey!")
      break;
    case "fr_FR":
      console.log("Salut!")
      break;
    case "en_GB":
      console.log("Hello!")
      break;
    case "en_AU":
      console.log("Howdy!")
      break;
    default:
      console.log('Hej')
      break;
  }
}

/*

let language = ""

function extractLanguage(code) {
  language = code.substring(0,2)
  console.log(language);
}

*/

function extractRegion(code) {
  let languageRegion = code.split(".")[0];
  // let region = languageRegion[0].split("_")[1];
  return languageRegion;
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'