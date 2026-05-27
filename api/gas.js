export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const GAS_WEBAPP_URL = process.env.GAS_WEBAPP_URL;

  if (!GAS_WEBAPP_URL) {
    return res.status(500).json({
      ok: false,
      error: "Missing GAS_WEBAPP_URL environment variable in Vercel."
    });
  }

  try {
    const response = await fetch(GAS_WEBAPP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(req.body || {})
    });

    const text = await response.text();

    try {
      const data = JSON.parse(text);
      return res.status(200).json(data);
    } catch (parseError) {
      return res.status(502).json({
        ok: false,
        error: "Apps Script did not return JSON.",
        raw: text.slice(0, 500)
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error.message || "Unknown Vercel API error"
    });
  }
}
