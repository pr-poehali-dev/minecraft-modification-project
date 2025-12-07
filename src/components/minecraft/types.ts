export interface Mod {
  id: number
  name: string
  description: string
  category: string
  downloads: number
  version: string
  author: string
  image: string
  downloadUrl: string
}

export const mods: Mod[] = [
  {
    id: 1,
    name: "OptiFine",
    description: "Повышает FPS и улучшает графику Minecraft с HD текстурами и шейдерами",
    category: "Оптимизация",
    downloads: 152487,
    version: "1.20.4",
    author: "sp614x",
    image: "🎮",
    downloadUrl: "https://optifine.net/downloads"
  },
  {
    id: 2,
    name: "JourneyMap",
    description: "Карта реального времени в игре и в браузере по мере исследования мира",
    category: "Утилиты",
    downloads: 98342,
    version: "1.20.4",
    author: "techbrew",
    image: "🗺️",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/journeymap"
  },
  {
    id: 3,
    name: "Biomes O' Plenty",
    description: "Добавляет 80+ новых биомов для разнообразного игрового опыта",
    category: "Биомы",
    downloads: 124569,
    version: "1.20.2",
    author: "Glitchfiend",
    image: "🌲",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty"
  },
  {
    id: 4,
    name: "Just Enough Items",
    description: "Показывает рецепты крафта и использование предметов прямо в игре",
    category: "Утилиты",
    downloads: 201893,
    version: "1.20.4",
    author: "mezz",
    image: "📦",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/jei"
  },
  {
    id: 5,
    name: "Applied Energistics 2",
    description: "Продвинутая система хранения и автоматизации предметов",
    category: "Технологии",
    downloads: 87654,
    version: "1.20.1",
    author: "AlgorithmX2",
    image: "⚡",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2"
  },
  {
    id: 6,
    name: "Tinkers' Construct",
    description: "Создавайте и модифицируйте свои инструменты и оружие",
    category: "Инструменты",
    downloads: 143267,
    version: "1.19.2",
    author: "mDiyo",
    image: "🔨",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/tinkers-construct"
  },
  {
    id: 7,
    name: "Twilight Forest",
    description: "Волшебное измерение с боссами, подземельями и сокровищами",
    category: "Приключения",
    downloads: 112458,
    version: "1.20.2",
    author: "Benimatic",
    image: "🌙",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/the-twilight-forest"
  },
  {
    id: 8,
    name: "Create",
    description: "Механизмы и автоматизация в стиле стимпанк с движущимися частями",
    category: "Технологии",
    downloads: 167832,
    version: "1.20.1",
    author: "simibubi",
    image: "⚙️",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/create"
  },
  {
    id: 9,
    name: "Sodium",
    description: "Мощная оптимизация рендеринга для огромного прироста FPS",
    category: "Оптимизация",
    downloads: 234567,
    version: "1.20.4",
    author: "JellySquid",
    image: "🚀",
    downloadUrl: "https://modrinth.com/mod/sodium"
  },
  {
    id: 10,
    name: "The Aether",
    description: "Небесное измерение с летающими островами и уникальными мобами",
    category: "Приключения",
    downloads: 189234,
    version: "1.20.1",
    author: "Gilded_Games",
    image: "☁️",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/aether"
  },
  {
    id: 11,
    name: "Waystones",
    description: "Телепортация между установленными точками сохранения",
    category: "Утилиты",
    downloads: 145678,
    version: "1.20.4",
    author: "BlayTheNinth",
    image: "🗿",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/waystones"
  },
  {
    id: 12,
    name: "Industrial Foregoing",
    description: "Продвинутая автоматизация и переработка ресурсов",
    category: "Технологии",
    downloads: 134890,
    version: "1.20.1",
    author: "Buuz135",
    image: "🏭",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing"
  },
  {
    id: 13,
    name: "Ice and Fire",
    description: "Драконы, мифические существа и легендарное оружие",
    category: "Приключения",
    downloads: 176543,
    version: "1.20.1",
    author: "Alex1the1666",
    image: "🐉",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/ice-and-fire-dragons"
  },
  {
    id: 14,
    name: "Botania",
    description: "Магия природы через цветы и руны с уникальной механикой",
    category: "Магия",
    downloads: 198765,
    version: "1.20.1",
    author: "Vazkii",
    image: "🌺",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/botania"
  },
  {
    id: 15,
    name: "Farmer's Delight",
    description: "Расширенная система еды и кулинарии с новыми рецептами",
    category: "Выживание",
    downloads: 156432,
    version: "1.20.1",
    author: "vectorwing",
    image: "🍳",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/farmers-delight"
  },
  {
    id: 16,
    name: "Mekanism",
    description: "Технологический мод с реакторами и переработкой руды",
    category: "Технологии",
    downloads: 203456,
    version: "1.20.1",
    author: "bradyaidanc",
    image: "⚗️",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/mekanism"
  },
  {
    id: 17,
    name: "Alex's Mobs",
    description: "70+ реалистичных животных с уникальным поведением",
    category: "Мобы",
    downloads: 187654,
    version: "1.20.1",
    author: "alex_khaan",
    image: "🦁",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/alexs-mobs"
  },
  {
    id: 18,
    name: "Immersive Engineering",
    description: "Индустриальная эпоха с многоблочными механизмами",
    category: "Технологии",
    downloads: 192345,
    version: "1.20.1",
    author: "BluSunrize",
    image: "🔧",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/immersive-engineering"
  },
  {
    id: 19,
    name: "Quark",
    description: "150+ улучшений ванильной игры без нарушения баланса",
    category: "Улучшения",
    downloads: 214567,
    version: "1.20.1",
    author: "Vazkii",
    image: "✨",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/quark"
  },
  {
    id: 20,
    name: "Thermal Expansion",
    description: "Машины для автоматизации добычи и обработки ресурсов",
    category: "Технологии",
    downloads: 178234,
    version: "1.20.1",
    author: "TeamCoFH",
    image: "🔥",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/thermal-expansion"
  },
  {
    id: 21,
    name: "Apotheosis",
    description: "Расширенная система зачарований и улучшение лута",
    category: "Улучшения",
    downloads: 165432,
    version: "1.20.1",
    author: "Shadows_of_Fire",
    image: "⭐",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/apotheosis"
  },
  {
    id: 22,
    name: "Better Nether",
    description: "Полное переосмысление Незера с новыми биомами",
    category: "Биомы",
    downloads: 143210,
    version: "1.20.1",
    author: "Quiqueck",
    image: "🔴",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/betternether"
  },
  {
    id: 23,
    name: "Storage Drawers",
    description: "Компактное хранение предметов в ящиках с визуализацией",
    category: "Утилиты",
    downloads: 189876,
    version: "1.20.1",
    author: "Texelsaur",
    image: "📦",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/storage-drawers"
  },
  {
    id: 24,
    name: "Sophisticated Backpacks",
    description: "Рюкзаки с улучшениями и автоматической сортировкой",
    category: "Утилиты",
    downloads: 154321,
    version: "1.20.1",
    author: "Pickle_Faced",
    image: "🎒",
    downloadUrl: "https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks"
  }
]