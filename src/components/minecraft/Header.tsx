import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const Header = () => {
  return (
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
  )
}

export default Header
