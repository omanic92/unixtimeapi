export async function GET() {
  const unixTimestamp = Math.floor(Date.now() / 1000);
  return Response.json({ timestamp: unixTimestamp });
}
