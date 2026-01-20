export async function uploadBuffer(data, remotePath) {
  const res = await fetch(
    "https://api.shelbynet.shelby.xyz/v1/upload",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SHELBY_API_KEY}`,
        "Content-Type": "application/octet-stream",
        "X-Shelby-Path": remotePath,
        "X-Shelby-Expiration": "in 7 days",
      },
      body: data,
    }
  );

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return await res.json();
}
