import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const galleryImages = [
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
    'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800',
    'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800',
    'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800',
    'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=800'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-purple-500/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              AMAZING RP
            </div>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => setCurrentPage('home')}
                className={`transition-colors hover:text-purple-400 ${
                  currentPage === 'home' ? 'text-purple-400' : 'text-white'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`transition-colors hover:text-purple-400 ${
                  currentPage === 'about' ? 'text-purple-400' : 'text-white'
                }`}
              >
                О нас
              </button>
              <button
                onClick={() => setCurrentPage('gallery')}
                className={`transition-colors hover:text-purple-400 ${
                  currentPage === 'gallery' ? 'text-purple-400' : 'text-white'
                }`}
              >
                Галерея
              </button>
              <button
                onClick={() => setCurrentPage('project')}
                className={`transition-colors hover:text-purple-400 ${
                  currentPage === 'project' ? 'text-purple-400' : 'text-white'
                }`}
              >
                О проекте
              </button>
            </div>
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
                className={`text-left transition-colors hover:text-purple-400 ${
                  currentPage === 'home' ? 'text-purple-400' : 'text-white'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => {
                  setCurrentPage('about');
                  setMobileMenuOpen(false);
                }}
                className={`text-left transition-colors hover:text-purple-400 ${
                  currentPage === 'about' ? 'text-purple-400' : 'text-white'
                }`}
              >
                О нас
              </button>
              <button
                onClick={() => {
                  setCurrentPage('gallery');
                  setMobileMenuOpen(false);
                }}
                className={`text-left transition-colors hover:text-purple-400 ${
                  currentPage === 'gallery' ? 'text-purple-400' : 'text-white'
                }`}
              >
                Галерея
              </button>
              <button
                onClick={() => {
                  setCurrentPage('project');
                  setMobileMenuOpen(false);
                }}
                className={`text-left transition-colors hover:text-purple-400 ${
                  currentPage === 'project' ? 'text-purple-400' : 'text-white'
                }`}
              >
                О проекте
              </button>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-20">
        {currentPage === 'home' && (
          <>
            <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920')] bg-cover bg-center opacity-20"></div>
              <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-7xl md:text-9xl font-bold mb-6 animate-fade-in">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                    AMAZING RP
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
                  Добро пожаловать в мир невероятных возможностей
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg animate-scale-in"
                >
                  Начать играть
                </Button>
              </div>
            </section>

            <section className="py-20 container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">О игре</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 bg-black/40 backdrop-blur-lg border-purple-500/20 transition-transform hover:scale-105">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" size={24} className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Перекупы</h3>
                  <p className="text-gray-400">
                    Развивай свой бизнес, покупай и продавай товары
                  </p>
                </Card>

                <Card className="p-6 bg-black/40 backdrop-blur-lg border-purple-500/20 transition-transform hover:scale-105">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Briefcase" size={24} className="text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Работяги</h3>
                  <p className="text-gray-400">
                    Найди работу по душе и зарабатывай
                  </p>
                </Card>

                <Card className="p-6 bg-black/40 backdrop-blur-lg border-purple-500/20 transition-transform hover:scale-105">
                  <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Dices" size={24} className="text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Азартные игры</h3>
                  <p className="text-gray-400">
                    Испытай удачу в казино и других играх
                  </p>
                </Card>

                <Card className="p-6 bg-black/40 backdrop-blur-lg border-purple-500/20 transition-transform hover:scale-105">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Shield" size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Администрация</h3>
                  <p className="text-gray-400">
                    Профессиональная команда поддержки
                  </p>
                </Card>
              </div>
            </section>
          </>
        )}

        {currentPage === 'about' && (
          <section className="py-20 container mx-auto px-4 min-h-[70vh]">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-white mb-8 animate-fade-in">О нас</h1>
              <Card className="p-8 bg-black/40 backdrop-blur-lg border-purple-500/20">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  AMAZING RP — это уникальный игровой проект, созданный для тех, кто ищет настоящие эмоции и незабываемый игровой опыт.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Наш проект объединяет тысячи игроков со всего мира. Здесь каждый найдет занятие по душе: от построения бизнес-империи до участия в захватывающих соревнованиях.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Присоединяйся к нашему сообществу и стань частью удивительной истории!
                </p>
              </Card>
            </div>
          </section>
        )}

        {currentPage === 'gallery' && (
          <section className="py-20 container mx-auto px-4 min-h-[70vh]">
            <h1 className="text-5xl font-bold text-white mb-12 text-center animate-fade-in">Галерея</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-video rounded-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Скриншот ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {currentPage === 'project' && (
          <section className="py-20 container mx-auto px-4 min-h-[70vh]">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-white mb-8 animate-fade-in">О проекте</h1>
              <Card className="p-8 bg-black/40 backdrop-blur-lg border-purple-500/20">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Всем привет! Наш проект это чудо в котором будет онлайн перекупы, работяги, азартные игроки, и достаточно администрации.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  На данный момент сайт разрабатывает сам "Зам.Владельца"
                </p>
              </Card>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-black/60 backdrop-blur-lg border-t border-purple-500/20 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
                AMAZING RP
              </h3>
              <p className="text-gray-400">
                Лучший игровой проект для твоих приключений
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Ссылки</h4>
              <a
                href="https://t.me/zamcrmp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Icon name="Send" size={20} />
                <span>Telegram канал зам владельца</span>
              </a>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400">
            <p>2025 AMAZING RP. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
