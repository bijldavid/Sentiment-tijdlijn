export const ssr = false;

export async function load({ fetch }) {
  const res = await fetch('/data/sentiment.json');
  const data = await res.json();
  return { data };
}
