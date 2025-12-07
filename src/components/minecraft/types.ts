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
  }
]
