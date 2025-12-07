import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'
import Header from '@/components/minecraft/Header'
import ModCard from '@/components/minecraft/ModCard'
import InstallationGuide from '@/components/minecraft/InstallationGuide'
import { mods } from '@/components/minecraft/types'

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'Оптимизация', 'Утилиты', 'Биомы', 'Технологии', 'Инструменты', 'Приключения', 'Магия', 'Выживание', 'Мобы', 'Улучшения']

  const filteredMods = mods.filter(mod => {
    const matchesSearch = mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mod.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || mod.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedMods = [...filteredMods].sort((a, b) => b.downloads - a.downloads)

  return (
    <div className="min-h-screen bg-background">
      <Header />

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
                <ModCard key={mod.id} mod={mod} />
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

          <TabsContent value="guide">
            <InstallationGuide />
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