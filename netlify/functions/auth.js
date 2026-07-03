export async function handler(event) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const site = `https://${event.headers.host}`;
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${site}/api/callback`,
    scope: "repo,user",
    state: Math.random().toString(36).slice(2),
  });
  return {
    statusCode: 302,
    headers: { Location: `https://github.com/login/oauth/authorize?${params}` },
  };
}
