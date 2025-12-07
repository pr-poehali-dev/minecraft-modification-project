import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Icon from '@/components/ui/icon'

const InstallationGuide = () => {
  return (
    <div className="space-y-6">
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
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => window.open('https://files.minecraftforge.net/', '_blank')}
          >
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
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => window.open('https://fabricmc.net/use/installer/', '_blank')}
          >
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
    </div>
  )
}

export default InstallationGuide