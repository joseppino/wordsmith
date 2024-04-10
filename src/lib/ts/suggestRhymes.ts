import { RHYME_API_KEY } from "$env/static/private";

export default async function(word: string) {
  const response = await fetch('https://api.api-ninjas.com/v1/rhyme?word=' + word, {
    headers: {
      'X-Api-Key': RHYME_API_KEY,
      "Content-Type": "application/json"
    },
  });
  return response.body;
}