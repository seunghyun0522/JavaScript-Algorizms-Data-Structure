function naiveSearch(long, short) {
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      console.log(long[i], short[j]);
    }
  }
}

naiveSearch("lorie loled", "lol");
