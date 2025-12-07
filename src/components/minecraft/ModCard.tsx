import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { Mod } from './types'

interface ModCardProps {
  mod: Mod
}

const ModCard = ({ mod }: ModCardProps) => {
  return (
    <Card className="p-4 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group">
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

        <Button 
          className="w-full" 
          size="sm"
          onClick={() => window.open(mod.downloadUrl, '_blank')}
        >
          <Icon name="Download" size={16} className="mr-2" />
          Скачать
        </Button>
      </div>
    </Card>
  )
}

export default ModCard
