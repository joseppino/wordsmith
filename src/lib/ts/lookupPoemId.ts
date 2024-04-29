export default function (id: string) {
  switch(id) {
    case "1":
      return "haiku";
    case "2":
      return "sonnet";
    case "3":
      return "sonnet";
    case "4":
      return "limerick";
    case "5":
      return "villanelle";
    case "6":
      return "acrostic";
    default:
      return "";
  }
}