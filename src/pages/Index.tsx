import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
    { title: 'Сайт для психолога', category: 'Личный бренд', description: 'Увеличение заявок на 40% за первый месяц', image: '🧠' },
    { title: 'Онлайн-школа английского', category: 'Образование', description: 'Сбор базы из 200+ контактов за 2 недели', image: '📚' },
    { title: 'Строительная компания', category: 'Бизнес', description: 'Рост конверсии в заявки в 2.5 раза', image: '🏗️' },
    { title: 'Фотограф-портретист', category: 'Услуги', description: 'Полная запись на 3 месяца вперёд', image: '📸' },
  ];

  const process = [
    { step: '01', title: 'Заявка и бриф', description: 'Вы оставляете заявку и заполняете короткий бриф', icon: 'FileText' },
    { step: '02', title: 'Прототип', description: 'Мы создаём логическую структуру и прототип сайта', icon: 'Layout' },
    { step: '03', title: 'Оценка', description: 'Вы оцениваете удобство и подачу материала', icon: 'CheckCircle' },
    { step: '04', title: 'Разработка', description: 'Если вам нравится — приступаем к дизайну и вёрстке', icon: 'Sparkles' },
  ];

  const benefits = [
    {
      title: 'Повышение доверия',
      description: 'Личный сайт выглядит солиднее профиля в соцсетях',
      icon: 'Shield'
    },
    {
      title: 'Продажи 24/7',
      description: 'Ваше предложение доступно клиентам всегда',
      icon: 'Clock'
    },
    {
      title: 'Сбор заявок',
      description: 'Все контакты клиентов падают вам в Telegram или на почту',
      icon: 'Mail'
    },
  ];

  const includes = [
    { text: 'Индивидуальный дизайн в вашем стиле', icon: 'Palette' },
    { text: 'Адаптивность (идеально на iPhone и Android)', icon: 'Smartphone' },
    { text: 'Кнопки быстрой связи (WhatsApp, Telegram)', icon: 'MessageCircle' },
    { text: 'Настройка SEO для индексации в Яндекс и Google', icon: 'TrendingUp' },
    { text: 'Хостинг и домен в подарок (опционально)', icon: 'Gift' },
  ];

  const prices = [
    {
      name: 'Старт',
      price: '19 900',
      description: 'Только самое необходимое',
      features: ['1-3 страницы', 'Базовый дизайн', 'Контактная форма', 'Адаптив для мобильных', 'Хостинг на 3 месяца'],
      gradient: 'from-primary/30 to-primary/10'
    },
    {
      name: 'Стандарт',
      price: '39 900',
      description: 'Сайт + аналитика + формы',
      features: ['5-7 страниц', 'Уникальный дизайн', 'Базовая аналитика', 'Настройка форм', 'Кнопки мессенджеров', 'SEO-оптимизация', 'Хостинг на 6 месяцев'],
      gradient: 'from-secondary/30 to-secondary/10',
      popular: true
    },
    {
      name: 'Премиум',
      price: '79 900',
      description: 'Всё включено + CRM',
      features: ['10+ страниц', 'Премиум-дизайн', 'Копирайтинг текстов', 'Интеграция с CRM', 'Расширенная аналитика', 'Техподдержка 3 месяца', 'Бесплатный хостинг год'],
      gradient: 'from-accent/30 to-accent/10'
    },
  ];

  const faqs = [
    {
      question: 'Что если мне не понравится прототип?',
      answer: 'Прототип абсолютно бесплатный! Вы ничем не рискуете. Если результат вас не устроит — просто откажетесь от дальнейшей работы без каких-либо обязательств.'
    },
    {
      question: 'Нужно ли мне самому писать тексты?',
      answer: 'Нет, не обязательно! В тарифе "Премиум" копирайтинг входит в стоимость. В других тарифах можем добавить эту услугу за дополнительную плату, либо вы предоставите готовые материалы.'
    },
    {
      question: 'Сколько стоит обслуживание сайта в месяц?',
      answer: 'Хостинг включён в первые месяцы работы (зависит от тарифа). После этого стоимость составит 500-1000₽/месяц. Техническая поддержка и обновления — от 2000₽/месяц по необходимости.'
    },
    {
      question: 'За сколько дней будет готов сайт?',
      answer: 'Прототип — 1-2 дня. Полная разработка сайта занимает от 3 до 14 дней в зависимости от выбранного тарифа и сложности проекта.'
    },
    {
      question: 'Смогу ли я сам редактировать сайт после запуска?',
      answer: 'Да! Мы обучим вас базовым правкам (текст, фото, контакты). Для более сложных изменений предоставим техподдержку или систему управления контентом.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <header className="fixed top-0 w-full backdrop-blur-lg bg-background/80 border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">WebStudio</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#how" className="hover:text-primary transition">Как работаем</a>
            <a href="#why" className="hover:text-primary transition">Почему мы</a>
            <a href="#portfolio" className="hover:text-primary transition">Портфолио</a>
            <a href="#prices" className="hover:text-primary transition">Цены</a>
            <a href="#faq" className="hover:text-primary transition">FAQ</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Получить прототип
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
              <span className="text-sm font-medium">🎁 Бесплатный прототип до оплаты</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Запустите ваш бизнес<br />
              <span className="gradient-text animate-gradient-shift bg-[length:200%_auto]">в сети за 3 дня</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Увидьте структуру и дизайн вашего будущего сайта ещё до того, как заплатите. 
              Разрабатываем конверсионные сайты-визитки для экспертов и малого бизнеса
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent text-lg px-10 hover:opacity-90 hover-glow">
                <Icon name="Gift" className="mr-2" size={20} />
                Получить прототип бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 hover:bg-muted">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть примеры
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>Прототип за 1-2 дня</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} className="text-primary" />
                <span>Без предоплаты</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Zap" size={16} className="text-primary" />
                <span>Запуск за 3-14 дней</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-6 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Как это работает</h2>
            <p className="text-muted-foreground text-lg">Прозрачный процесс без сюрпризов</p>
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

      <section id="why" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Почему сайт-визитка необходим</h2>
            <p className="text-muted-foreground text-lg">Вашему бизнесу нужна своя витрина в интернете</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, idx) => (
              <Card 
                key={idx}
                className="border-2 border-border hover:border-primary transition-all duration-300 hover-glow bg-card/50 backdrop-blur animate-scale-in text-center"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} size={40} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-3xl mb-6 text-center">Что входит в пакет «Сайт-визитка»</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {includes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                    </div>
                    <p className="text-lg pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Наше портфолио</h2>
            <p className="text-muted-foreground text-lg">Реальные проекты, реальные результаты</p>
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
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground flex items-start gap-2">
                      <Icon name="TrendingUp" size={18} className="text-primary mt-1 flex-shrink-0" />
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Стоимость и пакеты</h2>
            <p className="text-muted-foreground text-lg">Выберите подходящий вариант для вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {prices.map((plan, idx) => (
              <Card 
                key={idx}
                className={`relative border-2 hover:border-primary transition-all duration-300 hover-glow bg-card/50 backdrop-blur animate-scale-in ${
                  plan.popular ? 'scale-105 border-primary shadow-lg shadow-primary/20' : 'border-border'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-secondary to-accent rounded-full text-sm font-semibold">
                    Хит продаж
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
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
                    Выбрать {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Ответы на вопросы</h2>
            <p className="text-muted-foreground text-lg">Всё, что вы хотели знать о создании сайта</p>
          </div>
          <Card className="border-2 border-border bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Получите прототип бесплатно</h2>
            <p className="text-muted-foreground text-lg">Заполните форму и мы свяжемся с вами в течение 2 часов</p>
          </div>
          <Card className="border-2 border-primary/50 backdrop-blur bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
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
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
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
                  <label className="block text-sm font-medium mb-2">Расскажите о вашем проекте</label>
                  <Textarea 
                    placeholder="Чем занимаетесь? Какие задачи должен решать сайт? Есть ли примеры сайтов, которые нравятся?"
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
                  Получить бесплатный прототип
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
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
              <p className="text-muted-foreground">Создаём современные сайты-визитки для экспертов и малого бизнеса</p>
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
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover-glow">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover-glow">
                  <Icon name="Youtube" size={20} />
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
