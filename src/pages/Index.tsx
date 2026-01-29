import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const portfolio = [
    { title: 'Интернет-магазин', category: 'E-commerce', image: '🛍️' },
    { title: 'Корпоративный сайт', category: 'Business', image: '💼' },
    { title: 'Лендинг услуги', category: 'Landing', image: '🚀' },
    { title: 'Блог', category: 'Media', image: '📝' },
  ];

  const process = [
    { step: '01', title: 'Обсуждение', description: 'Изучаем ваши цели и требования', icon: 'MessageSquare' },
    { step: '02', title: 'Дизайн', description: 'Создаём уникальный визуал', icon: 'Palette' },
    { step: '03', title: 'Разработка', description: 'Воплощаем идеи в код', icon: 'Code' },
    { step: '04', title: 'Запуск', description: 'Публикуем сайт в интернет', icon: 'Rocket' },
  ];

  const prices = [
    {
      name: 'Базовый',
      price: '15 000',
      features: ['1-3 страницы', 'Адаптивный дизайн', 'Контактная форма', 'Базовое SEO'],
      gradient: 'from-primary/30 to-primary/10'
    },
    {
      name: 'Стандарт',
      price: '35 000',
      features: ['5-7 страниц', 'Уникальный дизайн', 'Анимации', 'Интеграции', 'Расширенное SEO'],
      gradient: 'from-secondary/30 to-secondary/10',
      popular: true
    },
    {
      name: 'Премиум',
      price: '70 000',
      features: ['10+ страниц', 'Полный функционал', 'Панель управления', 'Интеграция с CRM', 'Поддержка 3 месяца'],
      gradient: 'from-accent/30 to-accent/10'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <header className="fixed top-0 w-full backdrop-blur-lg bg-background/80 border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">WebStudio</div>
          <div className="hidden md:flex gap-8">
            <a href="#portfolio" className="hover:text-primary transition">Портфолио</a>
            <a href="#process" className="hover:text-primary transition">Процесс</a>
            <a href="#prices" className="hover:text-primary transition">Цены</a>
            <a href="#contact" className="hover:text-primary transition">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Заказать
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
              <span className="text-sm font-medium">Современные сайты-визитки</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
              Создаём сайты,<br />
              <span className="gradient-text animate-gradient-shift bg-[length:200%_auto]">которые продают</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Разрабатываем стильные сайты-визитки с современным дизайном и высокой конверсией
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent text-lg px-8 hover:opacity-90 hover-glow">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 hover:bg-muted">
                <Icon name="Eye" className="mr-2" size={20} />
                Посмотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Портфолио</h2>
            <p className="text-muted-foreground text-lg">Наши последние работы</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((item, idx) => (
              <Card 
                key={idx} 
                className="group overflow-hidden border-2 border-border hover:border-primary hover-glow cursor-pointer animate-scale-in bg-card/50 backdrop-blur"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                    {item.image}
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{item.category}</div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Процесс работы</h2>
            <p className="text-muted-foreground text-lg">От идеи до запуска за 4 шага</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <Card 
                key={idx} 
                className="relative overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover-glow bg-card/50 backdrop-blur animate-scale-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <CardHeader>
                  <div className="text-6xl font-black text-primary/20 mb-4">{item.step}</div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Тарифы</h2>
            <p className="text-muted-foreground text-lg">Выберите подходящий пакет</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {prices.map((plan, idx) => (
              <Card 
                key={idx}
                className={`relative border-2 hover:border-primary transition-all duration-300 hover-glow bg-card/50 backdrop-blur animate-scale-in ${
                  plan.popular ? 'scale-105 border-primary' : 'border-border'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-secondary to-accent rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 border-2 border-primary/50`}
                    size="lg"
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Начнём проект?</h2>
            <p className="text-muted-foreground text-lg">Оставьте заявку и мы свяжемся с вами</p>
          </div>
          <Card className="border-2 border-border backdrop-blur bg-card/50 animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Описание проекта</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="bg-background/50"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold gradient-text mb-4">WebStudio</div>
              <p className="text-muted-foreground">Создаём современные сайты-визитки с душой</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@webstudio.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover-glow">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover-glow">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover-glow">
                  <Icon name="Linkedin" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground border-t border-border pt-8">
            © 2026 WebStudio. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
