import { Category, Nickname } from "./types";

// Category definitions with SEO-optimized content
export const categories: Category[] = [
  {
    slug: "games",
    name: "Gaming Nicknames",
    description: "Free AI-generated epic nicknames for gamers. Find the perfect username for any game.",
    icon: "🎮",
    color: "purple",
    seoTitle: "Free Gaming Nickname Generator - AI-Powered Usernames for Gamers",
    seoDescription: "Generate unlimited FREE gaming nicknames with AI. Find cool, unique usernames for League of Legends, Fortnite, Valorant, Minecraft & more. No signup required!",
    subCategories: [
      { slug: "league-of-legends", name: "League of Legends", icon: "⚔️", parentSlug: "games" },
      { slug: "fortnite", name: "Fortnite", icon: "🏝️", parentSlug: "games" },
      { slug: "minecraft", name: "Minecraft", icon: "⛏️", parentSlug: "games" },
      { slug: "valorant", name: "Valorant", icon: "🎯", parentSlug: "games" },
      { slug: "genshin-impact", name: "Genshin Impact", icon: "✨", parentSlug: "games" },
      { slug: "call-of-duty", name: "Call of Duty", icon: "🔫", parentSlug: "games" },
      { slug: "apex-legends", name: "Apex Legends", icon: "🦅", parentSlug: "games" },
      { slug: "roblox", name: "Roblox", icon: "🧱", parentSlug: "games" },
    ],
  },
  {
    slug: "boyfriend",
    name: "Boyfriend Nicknames",
    description: "Free AI-generated sweet and romantic nicknames for your boyfriend.",
    icon: "💙",
    color: "blue",
    seoTitle: "Free Boyfriend Nickname Generator - Sweet & Romantic Pet Names",
    seoDescription: "Generate unlimited FREE nicknames for boyfriend with AI. Find sweet, romantic, and unique pet names. 100% free, no signup required!",
  },
  {
    slug: "girlfriend",
    name: "Girlfriend Nicknames",
    description: "Free AI-generated adorable nicknames for your girlfriend.",
    icon: "💖",
    color: "pink",
    seoTitle: "Free Girlfriend Nickname Generator - Cute & Adorable Pet Names",
    seoDescription: "Generate unlimited FREE nicknames for girlfriend with AI. Find romantic, cute, and unique pet names to show your love. No signup required!",
  },
  {
    slug: "cute",
    name: "Cute Nicknames",
    description: "Free AI-generated adorable and sweet nicknames for anyone.",
    icon: "🌸",
    color: "pink",
    seoTitle: "Free Cute Nickname Generator - Adorable Names with AI",
    seoDescription: "Generate unlimited FREE cute nicknames with AI. Find adorable, sweet names for friends, family, or anyone special. 100% free!",
  },
  {
    slug: "cool",
    name: "Cool Nicknames",
    description: "Free AI-generated badass and stylish nicknames. Stand out!",
    icon: "😎",
    color: "cyan",
    seoTitle: "Free Cool Nickname Generator - Badass & Stylish Names",
    seoDescription: "Generate unlimited FREE cool nicknames with AI. Find stylish, edgy, and unique names that make you stand out. No signup required!",
  },
  {
    slug: "funny",
    name: "Funny Nicknames",
    description: "Free AI-generated hilarious nicknames that make everyone laugh.",
    icon: "😂",
    color: "yellow",
    seoTitle: "Free Funny Nickname Generator - Hilarious & Witty Names",
    seoDescription: "Generate unlimited FREE funny nicknames with AI. Find hilarious, witty names for gaming, friends, or social media. 100% free!",
  },
];

// Mock nickname data organized by category
export const nicknamesByCategory: Record<string, string[]> = {
  games: [
    "ShadowStrike", "NeonNinja", "PixelPirate", "CyberWolf", "GhostRider",
    "ThunderBolt", "NightHawk", "StormBreaker", "IronFist", "DarkKnight",
    "BlazeMaster", "FrostByte", "VenomViper", "SteelShadow", "PhantomAce",
    "TurboTitan", "NovaFlare", "RogueReaper", "EliteSniper", "MysticMage",
  ],
  "league-of-legends": [
    "MidLaneMaestro", "JungleDominator", "SupportSquad", "ADCarryKing", "TopTierTitan",
    "PentakillPro", "FlashMaster", "UltimateUltimatum", "GankGuru", "WardWizard",
    "DragonSlayer", "BaronBoss", "TurretTerror", "MinionsRevenge", "RiftWalker",
  ],
  fortnite: [
    "BuilderBoss", "VictoryRoyale", "StormSurvivor", "LootLegend", "DropshipDemon",
    "SniperSupreme", "TiltedTerror", "BushCamper", "CrankerKing", "EditGod",
    "ZoneZoomer", "ChugJugChamp", "ShieldSmasher", "PickaxePro", "GliderGang",
  ],
  minecraft: [
    "BlockBuilder", "DiamondDigger", "CreeperSlayer", "EnderExplorer", "RedstoneRuler",
    "NetherKnight", "CraftingChamp", "PixelPioneer", "SurvivalSage", "Minecrafter",
    "ObsidianOverlord", "BedrockBoss", "GoldGolem", "IronIngot", "EmeraldEmperor",
  ],
  valorant: [
    "HeadshotHero", "ClutchKing", "SpikeDefuser", "AgentAce", "RadianiteRuler",
    "PhoenixFlame", "SageSupport", "JettJumper", "OmenOverseer", "ViperVenom",
    "BrimstoneBlast", "CypherCam", "KillJoyKiller", "SovaArrow", "ReynaReaper",
  ],
  "genshin-impact": [
    "PrimoGem", "WishWarrior", "ElementalExpert", "ResinRunner", "DomainDweller",
    "ArchonAcolyte", "TravelerTales", "AbyssAvenger", "StarglitterStar", "FateFollower",
    "CelestialChampion", "TeyvatTraveler", "VisionVanguard", "PaimonPal", "AdeptusAce",
  ],
  "call-of-duty": [
    "QuickScoper", "PrestigePro", "NukeNinja", "KillstreakKing", "WarzonWarrior",
    "TacticalTitan", "GulagGladiator", "LoadoutLegend", "HeadshotHunter", "CamperCrusher",
    "DropShotDemon", "HardscoperHero", "ObjectiveOG", "FlashbangFiend", "SmokeScreen",
  ],
  "apex-legends": [
    "ApexPredator", "ChampionSquad", "KillLeader", "DropshipDiver", "RingRunner",
    "LegendLooter", "PathfinderPro", "WraithWraith", "OctaneOverdrive", "LifelineLove",
    "BloodhoundBoss", "GibraltarGuard", "CausticCloud", "MirageMain", "BangaloreBoss",
  ],
  roblox: [
    "RobuxRich", "ObbyOlympian", "TycoonTitan", "AdoptMeAce", "JailbreakJester",
    "BlockBurgBoss", "BloxburgBuilder", "MurderMystery", "TowerDefender", "PiggyPlayer",
    "AvatarAce", "CatalogCollector", "LimitedLegend", "DevExDreamer", "GroupGuru",
  ],
  boyfriend: [
    "Honey Bear", "Love Bug", "Sweet Cheeks", "My King", "Sunshine",
    "Cuddle Monster", "Snuggle Bunny", "Prince Charming", "My Hero", "Babe",
    "Handsome", "Stud Muffin", "My Rock", "Dream Boat", "Hot Stuff",
    "Lover Boy", "My Heart", "Sugar Plum", "Teddy Bear", "Captain",
  ],
  girlfriend: [
    "Princess", "Angel Face", "Sweetheart", "My Queen", "Gorgeous",
    "Cutie Pie", "Baby Doll", "Honey Bunny", "Sunshine", "Sweetness",
    "Darling", "Beautiful", "My Love", "Precious", "Sugar",
    "Butterfly", "Sparkle", "Cupcake", "Starlight", "Lovebug",
  ],
  cute: [
    "Bubbles", "Cupcake", "Sprinkles", "Pumpkin", "Cookie",
    "Marshmallow", "Peaches", "Jellybean", "Buttercup", "Muffin",
    "Snickerdoodle", "Pudding", "Dumpling", "Noodles", "Biscuit",
    "Waffles", "Pancake", "Cinnamon", "Honeybee", "Starshine",
  ],
  cool: [
    "Maverick", "Phoenix", "Blaze", "Storm", "Thunder",
    "Viper", "Titan", "Phantom", "Raven", "Specter",
    "Eclipse", "Nova", "Orion", "Zenith", "Apex",
    "Vortex", "Cipher", "Vector", "Axiom", "Onyx",
  ],
  funny: [
    "Sir Laughs-a-Lot", "Captain Obvious", "Pickle Rick", "Taco Tuesday", "Banana Hammock",
    "Chunky Monkey", "Sir Fartsalot", "Dude McBro", "Señor Awesome", "Baron Von Chuckles",
    "Professor Giggles", "Duke of Dork", "Lord Lollygag", "Count Snuggle", "Sir Naps-a-Lot",
    "The Chosen Spud", "Burrito Supreme", "Captain Underpants", "Darth Tater", "Chewbrocca",
  ],
};

// Popular nicknames for homepage display
export const popularNicknames: Nickname[] = [
  { id: "1", name: "ShadowStrike", category: "games", tags: ["gaming", "cool"] },
  { id: "2", name: "Princess", category: "girlfriend", tags: ["romantic", "sweet"] },
  { id: "3", name: "Honey Bear", category: "boyfriend", tags: ["cute", "sweet"] },
  { id: "4", name: "Phoenix", category: "cool", tags: ["cool", "powerful"] },
  { id: "5", name: "Bubbles", category: "cute", tags: ["cute", "fun"] },
  { id: "6", name: "Sir Laughs-a-Lot", category: "funny", tags: ["funny", "silly"] },
  { id: "7", name: "NeonNinja", category: "games", tags: ["gaming", "cool"] },
  { id: "8", name: "Cupcake", category: "cute", tags: ["cute", "sweet"] },
  { id: "9", name: "Maverick", category: "cool", tags: ["cool", "edgy"] },
  { id: "10", name: "BuilderBoss", category: "fortnite", tags: ["gaming", "fortnite"] },
  { id: "11", name: "Angel Face", category: "girlfriend", tags: ["romantic", "sweet"] },
  { id: "12", name: "My King", category: "boyfriend", tags: ["romantic", "royal"] },
];

// Function to get random nicknames from a category
export function getRandomNicknames(category: string, count: number = 5): string[] {
  const nicknames = nicknamesByCategory[category] || nicknamesByCategory["games"];
  const shuffled = [...nicknames].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Mock AI generation function
export function generateAINicknames(prompt: string): string[] {
  // Simulate AI generation by analyzing prompt and returning relevant nicknames
  const promptLower = prompt.toLowerCase();

  let baseCategory = "cool";

  if (promptLower.includes("game") || promptLower.includes("gaming")) baseCategory = "games";
  else if (promptLower.includes("boyfriend") || promptLower.includes("boy")) baseCategory = "boyfriend";
  else if (promptLower.includes("girlfriend") || promptLower.includes("girl")) baseCategory = "girlfriend";
  else if (promptLower.includes("cute") || promptLower.includes("sweet")) baseCategory = "cute";
  else if (promptLower.includes("funny") || promptLower.includes("hilarious")) baseCategory = "funny";
  else if (promptLower.includes("cool") || promptLower.includes("badass")) baseCategory = "cool";

  // Get nicknames from the detected category
  const categoryNicknames = getRandomNicknames(baseCategory, 8);

  // Add some creative variations based on keywords in the prompt
  const prefixes = ["Epic", "Super", "Ultra", "Mega", "Neo", "Cyber", "Dark", "Light"];
  const suffixes = ["Pro", "Master", "King", "Queen", "Legend", "Star", "Hero", "Boss"];

  const words = prompt.split(" ").filter(w => w.length > 3);
  const customNicknames: string[] = [];

  if (words.length > 0) {
    const word = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    customNicknames.push(
      prefixes[Math.floor(Math.random() * prefixes.length)] + word,
      word + suffixes[Math.floor(Math.random() * suffixes.length)]
    );
  }

  return [...customNicknames, ...categoryNicknames].slice(0, 10);
}

// Get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

// Get sub-category
export function getSubCategoryBySlug(parentSlug: string, subSlug: string) {
  const parent = getCategoryBySlug(parentSlug);
  return parent?.subCategories?.find(s => s.slug === subSlug);
}
