export async function onRequest({ request }) {
  const NOTION_URL =
    "https://elegant-payment-860.notion.site/Cyberfolio-2b73c2ec645680488836c61c8dbc8268";

  const url = new URL(request.url);
  const target = NOTION_URL + url.pathname + url.search;

  const response = await fetch(target, {
    headers: {
      "User-Agent": request.headers.get("User-Agent"),
    },
  });

  const headers = new Headers(response.headers);
  headers.delete("content-security-policy");
  headers.delete("x-frame-options");
  headers.delete("strict-transport-security");

  return new Response(await response.text(), {
    status: response.status,
    headers,
  });
}
