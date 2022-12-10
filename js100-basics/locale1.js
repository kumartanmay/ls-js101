let language = ""

function extractLanguage(code) {
  language = code.substring(0,2)
  console.log(language);
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'