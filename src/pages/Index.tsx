import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Icon from '@/components/ui/icon'

interface Mod {
  id: number
  name: string
  description: string
  category: string
  downloads: number
  version: string
  author: string
  image: string
}

const mods: Mod[] = [
  {
    id: 1,
    name: "OptiFine",
    description: "Повышает FPS и улучшает графику Minecraft с HD текстурами и шейдерами",
    category: "Оптимизация",
    downloads: 152487,
    version: "1.20.4",
    author: "sp614x",
    image: "🎮"
  },
  {
    id: 2,
    name: "JourneyMap",
    description: "Карта реального времени в игре и в браузере по мере исследования мира",
    category: "Утилиты",
    downloads: 98342,
    version: "1.20.4",
    author: "techbrew",
    image: "🗺️"
  },
  {
    id: 3,
    name: "Biomes O' Plenty",
    description: "Добавляет 80+ новых биомов для разнообразного игрового опыта",
    category: "Биомы",
    downloads: 124569,
    version: "1.20.2",
    author: "Glitchfiend",
    image: "🌲"
  },
  {
    id: 4,
    name: "Just Enough Items",
    description: "Показывает рецепты крафта и использование предметов прямо в игре",
    category: "Утилиты",
    downloads: 201893,
    version: "1.20.4",
    author: "mezz",
    image: "📦"
  },
  {
    id: 5,
    name: "Applied Energistics 2",
    description: "Продвинутая система хранения и автоматизации предметов",
    category: "Технологии",
    downloads: 87654,
    version: "1.20.1",
    author: "AlgorithmX2",
    image: "⚡"
  },
  {
    id: 6,
    name: "Tinkers' Construct",
    description: "Создавайте и модифицируйте свои инструменты и оружие",
    category: "Инструменты",
    downloads: 143267,
    version: "1.19.2",
    author: "mDiyo",
    image: "🔨"
  },
  {
    id: 7,
    name: "Twilight Forest",
    description: "Волшебное измерение с боссами, подземельями и сокровищами",
    category: "Приключения",
    downloads: 112458,
    version: "1.20.2",
    author: "Benimatic",
    image: "🌙"
  },
  {
    id: 8,
    name: "Create",
    description: "Механизмы и автоматизация в стиле стимпанк с движущимися частями",
    category: "Технологии",
    downloads: 167832,
    version: "1.20.1",
    author: "simibubi",
    image: "⚙️"
  }
]

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'Оптимизация', 'Утилиты', 'Биомы', 'Технологии', 'Инструменты', 'Приключения']

  const filteredMods = mods.filter(mod => {
    const matchesSearch = mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mod.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || mod.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedMods = [...filteredMods].sort((a, b) => b.downloads - a.downloads)

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">⛏️</div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Minecraft Mods</h1>
                <p className="text-sm text-muted-foreground">Лучшие моды для вашей игры</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="catalog" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="catalog">
              <Icon name="Package" size={18} className="mr-2" />
              Каталог модов
            </TabsTrigger>
            <TabsTrigger value="guide">
              <Icon name="BookOpen" size={18} className="mr-2" />
              Установка
            </TabsTrigger>
          </TabsList>

          <TabsContent value="catalog" className="space-y-6">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 text-center space-y-4">
              <h2 className="text-4xl font-bold">Топовые моды для Minecraft</h2>
              <p className="text-lg text-muted-foreground">
                Более 200+ проверенных модов для всех версий игры
              </p>
              <div className="flex justify-center gap-4">
                <div className="bg-card/80 backdrop-blur px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold text-primary">200K+</div>
                  <div className="text-sm text-muted-foreground">Скачиваний</div>
                </div>
                <div className="bg-card/80 backdrop-blur px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Модов</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск модов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                    className="capitalize"
                  >
                    {cat === 'all' ? 'Все' : cat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sortedMods.map(mod => (
                <Card key={mod.id} className="p-4 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="text-5xl group-hover:scale-110 transition-transform">{mod.image}</div>
                      <Badge variant="secondary" className="text-xs">
                        {mod.category}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {mod.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {mod.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="User" size={14} />
                        <span>{mod.author}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div className="flex items-center gap-1 text-sm">
                        <Icon name="Download" size={16} className="text-primary" />
                        <span className="font-semibold text-primary">
                          {mod.downloads.toLocaleString('ru-RU')}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {mod.version}
                      </Badge>
                    </div>

                    <Button className="w-full" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {sortedMods.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Моды не найдены</h3>
                <p className="text-muted-foreground">
                  Попробуйте изменить поисковый запрос или фильтры
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="guide" className="space-y-6">
            <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 text-center">
              <h2 className="text-4xl font-bold mb-2">Как установить моды</h2>
              <p className="text-lg text-muted-foreground">
                Подробная инструкция для начинающих
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Icon name="Wrench" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Minecraft Forge</h3>
                    <p className="text-sm text-muted-foreground">Популярный загрузчик модов</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Скачать Forge
                </Button>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <Icon name="Package2" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fabric</h3>
                    <p className="text-sm text-muted-foreground">Легкий современный загрузчик</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Скачать Fabric
                </Button>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="ListOrdered" size={24} className="text-primary" />
                Пошаговая инструкция
              </h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <span className="font-semibold">Установите загрузчик модов</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-11 space-y-3">
                    <p className="text-muted-foreground">
                      Скачайте и установите Minecraft Forge или Fabric для вашей версии Minecraft.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Forge — для большинства популярных модов</li>
                      <li>Fabric — для новых и оптимизированных модов</li>
                      <li>Обязательно выберите правильную версию игры</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <span className="font-semibold">Найдите папку .minecraft</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-11 space-y-3">
                    <p className="text-muted-foreground">
                      Откройте папку с игрой на вашем компьютере:
                    </p>
                    <div className="space-y-2">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="font-semibold text-sm mb-1 flex items-center gap-2">
                          <Icon name="Monitor" size={16} />
                          Windows
                        </div>
                        <code className="text-xs text-muted-foreground">
                          %appdata%\.minecraft
                        </code>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="font-semibold text-sm mb-1 flex items-center gap-2">
                          <Icon name="Apple" size={16} />
                          macOS
                        </div>
                        <code className="text-xs text-muted-foreground">
                          ~/Library/Application Support/minecraft
                        </code>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="font-semibold text-sm mb-1 flex items-center gap-2">
                          <Icon name="Terminal" size={16} />
                          Linux
                        </div>
                        <code className="text-xs text-muted-foreground">
                          ~/.minecraft
                        </code>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <span className="font-semibold">Скопируйте моды в папку mods</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-11 space-y-3">
                    <p className="text-muted-foreground">
                      Переместите скачанные .jar файлы модов в папку mods:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Найдите папку <code className="bg-muted px-2 py-0.5 rounded">mods</code> внутри .minecraft</li>
                      <li>Если папки нет — создайте её вручную</li>
                      <li>Скопируйте туда все .jar файлы модов</li>
                      <li>Не распаковывайте моды из архивов!</li>
                    </ol>
                    <div className="bg-accent/20 border border-accent/50 p-4 rounded-lg mt-3">
                      <div className="flex gap-2 mb-2">
                        <Icon name="AlertCircle" size={20} className="text-accent flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-sm">Важно!</div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Убедитесь, что моды совместимы с версией Minecraft и загрузчика
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <span className="font-semibold">Запустите игру</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-11 space-y-3">
                    <p className="text-muted-foreground">
                      Откройте Minecraft Launcher и выберите профиль с модами:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>В лаунчере выберите профиль Forge или Fabric</li>
                      <li>Нажмите кнопку "Играть"</li>
                      <li>В главном меню нажмите "Mods" чтобы увидеть список</li>
                      <li>Если моды загрузились — всё готово!</li>
                    </ul>
                    <div className="bg-primary/20 border border-primary/50 p-4 rounded-lg mt-3">
                      <div className="flex gap-2">
                        <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-sm">Готово!</div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Теперь вы можете наслаждаться игрой с модами
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-destructive/20 to-accent/20 border-destructive/30">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="AlertTriangle" size={24} className="text-destructive" />
                Возможные проблемы и решения
              </h3>
              <div className="space-y-3">
                <div className="bg-card/80 backdrop-blur p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="XCircle" size={18} className="text-destructive" />
                    Игра не запускается
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Проверьте совместимость версий модов. Удалите моды по одному, чтобы найти проблемный.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="XCircle" size={18} className="text-destructive" />
                    Моды не появляются в игре
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Убедитесь, что вы запускаете правильный профиль (Forge/Fabric) и файлы находятся в папке mods.
                  </p>
                </div>
                <div className="bg-card/80 backdrop-blur p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="XCircle" size={18} className="text-destructive" />
                    Конфликты модов
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Некоторые моды несовместимы друг с другом. Проверьте описание модов на странице загрузки.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl">⛏️</div>
              <div className="text-sm text-muted-foreground">
                Minecraft Mods © 2024
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">О проекте</a>
              <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
