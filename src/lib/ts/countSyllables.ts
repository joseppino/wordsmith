// Code taken from https://stackoverflow.com/a/65544513

export default function (word: string) {
  word = word.toLowerCase();
  let t_some: number = 0;
  if(word.length>3) {
    if(word.substring(0,4) == "some") {
      word = word.replace("some","");
      t_some++;
    }
  }                 
  word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');   
  word = word.replace(/^y/, '');
  let syl = word.match(/[aeiouy]{1,2}/g);
  if(syl) {
      return syl.length + t_some;
  }
  else return 0;
}
