function extractRegion(code) {
  let languageRegion = code.split(".");
  let region = languageRegion[0].split("_")[1];
  return region;
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'