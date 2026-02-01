import { NextRequest, NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || "tngtech/deepseek-r1t2-chimera:free";

export async function POST(request: NextRequest) {
  try {
    const { prompt, category, count = 10 } = await request.json();

    if (!OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Build the system prompt based on category
    let systemPrompt = `You are a creative nickname generator. Generate unique, memorable nicknames based on user requests.
Rules:
- Return ONLY a JSON array of strings, no other text
- Each nickname should be 1-3 words maximum
- Make them creative, fun, and appropriate
- No special characters except spaces
- Generate exactly ${count} unique nicknames`;

    if (category) {
      const categoryPrompts: Record<string, string> = {
        games: "Focus on gaming-related nicknames that sound cool and powerful for gamers.",
        "league-of-legends": "Create nicknames inspired by League of Legends themes - champions, abilities, ranks, and fantasy elements.",
        fortnite: "Create nicknames inspired by Fortnite - building, victory royales, drops, and battle royale vibes.",
        minecraft: "Create nicknames inspired by Minecraft - blocks, crafting, survival, and pixel art themes.",
        valorant: "Create nicknames inspired by Valorant - tactical, agents, abilities, and competitive gaming.",
        "genshin-impact": "Create nicknames inspired by Genshin Impact - elements, characters, Teyvat, and anime fantasy themes.",
        "call-of-duty": "Create nicknames inspired by Call of Duty - military, tactical, warfare, and action themes.",
        "apex-legends": "Create nicknames inspired by Apex Legends - legends, champions, battle royale, and sci-fi themes.",
        roblox: "Create nicknames inspired by Roblox - creative, playful, building, and community themes.",
        boyfriend: "Create sweet, romantic, and affectionate nicknames for a boyfriend. Mix cute and masculine vibes.",
        girlfriend: "Create sweet, romantic, and adorable nicknames for a girlfriend. Loving and affectionate.",
        cute: "Create adorable, sweet, and heartwarming nicknames. Think fluffy, cuddly, and endearing.",
        cool: "Create stylish, edgy, and impressive nicknames. Think powerful, mysterious, and memorable.",
        funny: "Create hilarious, witty, and playful nicknames. Make people laugh and smile.",
      };
      systemPrompt += `\n\nCategory context: ${categoryPrompts[category] || "Generate creative nicknames."}`;
    }

    const userPrompt = prompt
      ? `Generate ${count} nicknames based on this description: "${prompt}"`
      : `Generate ${count} random ${category || "creative"} nicknames`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://nicknamegeneratorforgames.top",
        "X-Title": "Free Nickname Generator for Games",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
        temperature: 0.9,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("OpenRouter API error:", errorData);
      return NextResponse.json(
        { error: "Failed to generate nicknames" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "[]";

    // Parse the response - handle potential markdown code blocks
    let nicknames: string[] = [];
    try {
      // Remove markdown code blocks if present
      let cleanContent = content.trim();
      if (cleanContent.startsWith("```")) {
        cleanContent = cleanContent.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
      }
      nicknames = JSON.parse(cleanContent);
    } catch {
      // If JSON parsing fails, try to extract nicknames from text
      const lines = content.split("\n").filter((line: string) => line.trim());
      nicknames = lines
        .map((line: string) => line.replace(/^[\d\.\-\*]\s*/, "").replace(/["']/g, "").trim())
        .filter((n: string) => n.length > 0 && n.length < 30)
        .slice(0, count);
    }

    // Ensure we have an array of strings
    if (!Array.isArray(nicknames)) {
      nicknames = [];
    }

    return NextResponse.json({ nicknames });
  } catch (error) {
    console.error("Generate API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
