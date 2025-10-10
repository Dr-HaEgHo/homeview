// pages/api/graphql.ts
export default async function handler(req: any, res: any) {
  const response = await fetch('https://www.homeviewdubai.com/graphql', {
    method: req.method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();
  res.status(200).json(data);
}
