function greet(code) {
  switch (code) {
    case "en":
      console.log("Hi!")
      break;
    case "fr":
      console.log("Salut!")
      break;
    case "pt":
      console.log("Ola!")
      break;
    case "de":
      console.log("Hallo!")
      break;
    default:
      console.log('Hej')
      break;
  }
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'