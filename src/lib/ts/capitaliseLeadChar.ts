export default function(str: string) {
  if(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    return null;
  }
}