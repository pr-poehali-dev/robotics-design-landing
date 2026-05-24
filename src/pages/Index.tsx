import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/79264b35-54bd-4dbd-aedd-cdcbb9352f56/files/89e3da2a-2a1c-49ce-b62d-49779f9df9a0.jpg";
const STUDENT_IMG = "https://cdn.poehali.dev/projects/79264b35-54bd-4dbd-aedd-cdcbb9352f56/files/cd8f39ca-6e95-43f9-8489-616c3c5cbfbc.jpg";

const courses = [
  {
    icon: "Bot",
    title: "Робототехника для начинающих",
    age: "7–10 лет",
    duration: "3 месяца",
    desc: "Первые шаги в мире роботов: собираем простые конструкции, учимся программировать движения и реакции.",
    color: "from-violet-100 to-purple-50",
    badge: "Популярный",
  },
  {
    icon: "Cpu",
    title: "Продвинутая робототехника",
    age: "11–14 лет",
    duration: "4 месяца",
    desc: "Сложные механизмы, Arduino, сенсоры и первые соревновательные проекты.",
    color: "from-purple-100 to-violet-50",
    badge: "",
  },
  {
    icon: "Palette",
    title: "Цифровой дизайн",
    age: "10–16 лет",
    duration: "3 месяца",
    desc: "Figma, типографика, цвет и композиция. Создаём реальные макеты сайтов и приложений.",
    color: "from-fuchsia-50 to-purple-50",
    badge: "Новинка",
  },
  {
    icon: "Gamepad2",
    title: "Разработка игр",
    age: "12–17 лет",
    duration: "4 месяца",
    desc: "Unity, игровая механика, спрайты и звук. Делаем игру с нуля до финального релиза.",
    color: "from-violet-50 to-indigo-50",
    badge: "",
  },
];

const plans = [
  {
    name: "Старт",
    price: "3 900",
    period: "в месяц",
    desc: "1 занятие в неделю",
    features: ["4 онлайн-урока", "Доступ к материалам", "Чат с педагогом", "Домашние задания"],
    highlight: false,
  },
  {
    name: "Стандарт",
    price: "6 900",
    period: "в месяц",
    desc: "2 занятия в неделю",
    features: ["8 онлайн-уроков", "Доступ к материалам", "Чат с педагогом 24/7", "Проверка проектов", "Сертификат"],
    highlight: true,
  },
  {
    name: "Интенсив",
    price: "11 900",
    period: "в месяц",
    desc: "3 занятия в неделю",
    features: ["12 онлайн-уроков", "Все материалы + архив", "Личный куратор", "Портфолио проектов", "Участие в олимпиадах", "Сертификат"],
    highlight: false,
  },
];

const reviews = [
  {
    name: "Марина Соколова",
    child: "мама Пети, 9 лет",
    text: "Петя буквально живёт этой школой! За три месяца собрал двух роботов, и теперь объясняет нам, родителям, как работают сенсоры. Педагоги — отзывчивые и внимательные.",
    stars: 5,
    avatar: "М",
  },
  {
    name: "Дмитрий Фролов",
    child: "папа Насти, 13 лет",
    text: "Настя хотела рисовать, а теперь делает дизайн в Figma и уже помогла оформить мою визитку. Курс структурированный, всё логично выстроено.",
    stars: 5,
    avatar: "Д",
  },
  {
    name: "Елена Громова",
    child: "мама Артёма, 11 лет",
    text: "Сын очень стеснялся, но здесь его быстро приняли в коллектив. Теперь они с ребятами делают совместные проекты и общаются в чате. Рекомендую всем!",
    stars: 5,
    avatar: "Е",
  },
];

const achievements = [
  { icon: "Trophy", title: "1 место", desc: "Олимпиада по робототехнике 2024, Москва", color: "text-amber-500" },
  { icon: "Medal", title: "200+ выпускников", desc: "Поступили в технические вузы и колледжи", color: "text-violet-600" },
  { icon: "Star", title: "Топ-3 школа", desc: "Рейтинг онлайн-школ России 2024", color: "text-purple-500" },
  { icon: "Rocket", title: "50 проектов", desc: "Опубликованы в открытом доступе", color: "text-fuchsia-500" },
];

const videos = [
  { title: "Робот-сортировщик", author: "Миша, 12 лет", thumb: "🤖" },
  { title: "Мобильное приложение", author: "Катя, 15 лет", thumb: "📱" },
  { title: "Умный дом", author: "Даниил, 13 лет", thumb: "🏠" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", age: "", course: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 font-display font-bold text-lg text-purple-900">
            <span className="w-8 h-8 gradient-violet rounded-lg flex items-center justify-center text-white text-sm">Р</span>
            РобоАрт
          </button>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Курсы", id: "courses" },
              { label: "О школе", id: "about" },
              { label: "Абонементы", id: "plans" },
              { label: "Отзывы", id: "reviews" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="nav-link text-sm font-medium text-gray-600 hover:text-purple-700">
                {item.label}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTo("plans")}
            className="hidden md:flex gradient-violet text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Записаться
          </button>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-purple-800" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-purple-100 px-4 py-4 flex flex-col gap-3">
            {[
              { label: "Курсы", id: "courses" },
              { label: "О школе", id: "about" },
              { label: "Абонементы", id: "plans" },
              { label: "Отзывы", id: "reviews" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="text-left text-gray-700 font-medium py-1 hover:text-purple-700">
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo("plans")}
              className="gradient-violet text-white px-5 py-2.5 rounded-full text-sm font-semibold mt-2">
              Записаться
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="pt-16 min-h-screen flex flex-col">
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              <Icon name="Sparkles" size={16} />
              Набор открыт — 2024 / 2025
            </div>
            <h1 className="hero-title font-display text-purple-950">
              Твой ребёнок
              <br />
              <span className="text-gradient">создаёт будущее</span>
              <br />
              уже сегодня
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Онлайн-школа робототехники и цифрового дизайна для детей 7–17 лет. Реальные проекты, живые занятия, опытные педагоги.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("courses")}
                className="gradient-violet text-white px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-all animate-pulse-ring">
                Посмотреть курсы
              </button>
              <button onClick={() => scrollTo("about")}
                className="border-2 border-purple-200 text-purple-800 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-purple-50 transition-colors">
                О школе
              </button>
            </div>
            <div className="flex gap-8 pt-2">
              {[["500+", "учеников"], ["4.9", "рейтинг"], ["3 года", "на рынке"]].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-purple-900">{num}</div>
                  <div className="text-sm text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {!submitted ? (
              <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 gradient-violet rounded-xl flex items-center justify-center">
                    <Icon name="Gift" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-purple-900 text-base">Бесплатный пробный урок</div>
                    <div className="text-xs text-violet-500 font-medium">Запись займёт 1 минуту</div>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Имя родителя</label>
                    <input
                      type="text"
                      required
                      placeholder="Например, Анна"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-violet-400 outline-none text-sm text-gray-800 transition-colors placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Телефон</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-violet-400 outline-none text-sm text-gray-800 transition-colors placeholder:text-gray-300"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Возраст ребёнка</label>
                      <select
                        required
                        value={form.age}
                        onChange={(e) => setForm({ ...form, age: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-violet-400 outline-none text-sm text-gray-800 transition-colors bg-white"
                      >
                        <option value="">Выбрать</option>
                        <option>7–9 лет</option>
                        <option>10–12 лет</option>
                        <option>13–15 лет</option>
                        <option>16–17 лет</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Направление</label>
                      <select
                        required
                        value={form.course}
                        onChange={(e) => setForm({ ...form, course: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-violet-400 outline-none text-sm text-gray-800 transition-colors bg-white"
                      >
                        <option value="">Выбрать</option>
                        <option>Робототехника</option>
                        <option>Цифровой дизайн</option>
                        <option>Разработка игр</option>
                        <option>Не знаю пока</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-violet text-white py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity mt-2"
                  >
                    Записаться на урок бесплатно
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="#" className="text-violet-500 hover:underline">политикой конфиденциальности</a>
                  </p>
                </form>
                <div className="flex items-center gap-4 mt-5 pt-5 border-t border-purple-50">
                  {[["🏆", "500+ учеников"], ["⭐", "Рейтинг 4.9"], ["🎓", "С 7 до 17 лет"]].map(([emoji, text]) => (
                    <div key={text} className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span>{emoji}</span> {text}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 p-10 text-center flex flex-col items-center gap-5">
                <div className="w-20 h-20 gradient-violet rounded-full flex items-center justify-center animate-pulse-ring">
                  <Icon name="CheckCircle" size={40} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">Отлично, {form.name}!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Мы получили вашу заявку. Наш менеджер свяжется с вами в течение 15 минут и согласует время пробного урока.
                  </p>
                </div>
                <div className="bg-violet-50 rounded-2xl px-6 py-4 w-full text-left">
                  <div className="text-xs text-violet-500 font-semibold mb-1">Что дальше?</div>
                  <ul className="space-y-1">
                    {["Звонок от менеджера", "Выбор удобного времени", "Бесплатный пробный урок"].map((s, i) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-5 h-5 gradient-violet rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{i + 1}</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full gradient-violet-soft py-6 border-t border-purple-100">
          <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center md:justify-between gap-6">
            {["LEGO Education", "Arduino", "Figma", "Unity", "Python", "Scratch"].map((tech) => (
              <span key={tech} className="text-purple-700 font-semibold text-sm opacity-70 hover:opacity-100 transition-opacity">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <img src={STUDENT_IMG} alt="Ученик" className="w-full max-w-md mx-auto rounded-3xl shadow-xl object-cover h-[450px]" />
                <div className="absolute top-6 -right-4 bg-violet-600 text-white rounded-2xl p-4 shadow-lg">
                  <Icon name="Award" size={28} />
                  <div className="text-sm font-bold mt-1">Лучшая</div>
                  <div className="text-xs opacity-80">школа 2024</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-violet-600 font-semibold text-sm uppercase tracking-widest">О школе</div>
              <h2 className="section-title text-purple-950">
                Мы растим инженеров
                <br />
                и дизайнеров будущего
              </h2>
              <p className="text-gray-600 leading-relaxed">
                РобоАрт — онлайн-школа, где дети и подростки осваивают технологии через практику. Никаких скучных лекций: только живые занятия, реальные проекты и радость от результата.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { icon: "Users", title: "Малые группы", desc: "До 8 человек на курсе" },
                  { icon: "Video", title: "Живые уроки", desc: "Общение с педагогом" },
                  { icon: "ShieldCheck", title: "Опытные педагоги", desc: "Стаж от 5 лет" },
                  { icon: "TrendingUp", title: "Понятный прогресс", desc: "Отчёты для родителей" },
                ].map((item) => (
                  <div key={item.title} className="bg-violet-50 rounded-2xl p-4">
                    <Icon name={item.icon} size={22} className="text-violet-600 mb-2" />
                    <div className="font-semibold text-purple-900 text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="py-24 gradient-violet-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <div className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">Каталог курсов</div>
            <h2 className="section-title text-purple-950">Выбери своё направление</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Все курсы ведут опытные педагоги-практики. Занятия проходят в живом формате с обратной связью.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div key={course.title} className={`card-hover bg-gradient-to-br ${course.color} rounded-3xl p-6 border border-purple-100 relative`}>
                {course.badge && (
                  <span className="absolute top-4 right-4 bg-violet-600 text-white text-xs px-2.5 py-1 rounded-full font-semibold">
                    {course.badge}
                  </span>
                )}
                <div className="w-12 h-12 gradient-violet rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={course.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-purple-900 text-base mb-1">{course.title}</h3>
                <div className="flex gap-3 mb-3">
                  <span className="text-xs text-violet-600 font-semibold bg-white/70 px-2 py-0.5 rounded-full">{course.age}</span>
                  <span className="text-xs text-gray-500 font-medium">{course.duration}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{course.desc}</p>
                <button className="w-full gradient-violet text-white py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
                  Подробнее
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <div className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">Достижения</div>
            <h2 className="section-title text-purple-950">Наши ученики побеждают</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a) => (
              <div key={a.title} className="card-hover text-center bg-white rounded-3xl p-8 border border-purple-100 shadow-sm">
                <Icon name={a.icon} size={36} className={`${a.color} mx-auto mb-4`} />
                <div className="text-2xl font-bold text-purple-900 mb-1">{a.title}</div>
                <div className="text-sm text-gray-500">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO WORKS */}
      <section className="py-24 gradient-violet-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <div className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">Работы учеников</div>
            <h2 className="section-title text-purple-950">Смотри, что они создали</h2>
            <p className="text-gray-500 mt-3">Реальные проекты наших студентов — от роботов до приложений</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.title} className="card-hover bg-white rounded-3xl overflow-hidden shadow-sm border border-purple-100 group">
                <div className="h-48 gradient-violet flex items-center justify-center text-7xl relative">
                  {v.thumb}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Icon name="Play" size={28} className="text-violet-700 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-bold text-purple-900 mb-1">{v.title}</div>
                  <div className="text-sm text-violet-600 font-medium">{v.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <div className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">Абонементы</div>
            <h2 className="section-title text-purple-950">Выбери формат обучения</h2>
            <p className="text-gray-500 mt-3">Гибкие планы под любой темп. Можно сменить тариф в любое время.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name}
                className={`rounded-3xl p-8 border-2 relative flex flex-col ${plan.highlight ? "gradient-violet text-white border-violet-600 shadow-2xl shadow-violet-200 scale-105" : "border-purple-100 bg-white"}`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs px-4 py-1 rounded-full font-bold">
                    Самый популярный
                  </div>
                )}
                <div className={`text-sm font-semibold uppercase tracking-wider mb-2 ${plan.highlight ? "text-violet-200" : "text-violet-500"}`}>{plan.name}</div>
                <div className="mb-1">
                  <span className="text-4xl font-bold">{plan.price} ₽</span>
                  <span className={`text-sm ml-2 ${plan.highlight ? "text-violet-200" : "text-gray-400"}`}>{plan.period}</span>
                </div>
                <div className={`text-sm mb-6 ${plan.highlight ? "text-violet-200" : "text-gray-400"}`}>{plan.desc}</div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <Icon name="Check" size={16} className={plan.highlight ? "text-violet-200" : "text-violet-500"} />
                      <span className={plan.highlight ? "text-white/90" : "text-gray-700"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition-all text-sm ${plan.highlight ? "bg-white text-violet-700 hover:bg-violet-50" : "gradient-violet text-white hover:opacity-90"}`}>
                  Выбрать план
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 gradient-violet-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <div className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">Отзывы</div>
            <h2 className="section-title text-purple-950">Родители доверяют нам</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="card-hover bg-white rounded-3xl p-7 border border-purple-100 shadow-sm flex flex-col gap-4">
                <div className="flex">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm flex-1">«{r.text}»</p>
                <div className="flex items-center gap-3 pt-2 border-t border-purple-50">
                  <div className="w-10 h-10 gradient-violet rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-purple-900 text-sm">{r.name}</div>
                    <div className="text-xs text-gray-400">{r.child}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 gradient-violet">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Первый урок — бесплатно!
          </h2>
          <p className="text-violet-200 text-lg mb-8">
            Запишитесь на пробное занятие и убедитесь, что это именно то, что нужно вашему ребёнку.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="text"
              placeholder="Ваш телефон или e-mail"
              className="px-6 py-3.5 rounded-xl text-sm font-medium outline-none border-none w-full sm:w-72 text-gray-800"
            />
            <button className="bg-white text-violet-700 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-violet-50 transition-colors whitespace-nowrap">
              Записаться на урок
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTS & MAP */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <div className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">Контакты</div>
            <h2 className="section-title text-purple-950">Мы рядом</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {[
                { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Технологическая, д. 12, оф. 301" },
                { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                { icon: "Mail", label: "E-mail", value: "hello@roboart.ru" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–20:00, Сб: 10:00–18:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-violet rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-0.5">{c.label}</div>
                    <div className="font-semibold text-purple-900">{c.value}</div>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 pt-4">
                {[
                  { icon: "MessageCircle", label: "Telegram" },
                  { icon: "Phone", label: "WhatsApp" },
                  { icon: "Instagram", label: "Instagram" },
                ].map((s) => (
                  <button key={s.label}
                    className="flex items-center gap-2 border border-purple-200 text-purple-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-violet-50 transition-colors">
                    <Icon name={s.icon} size={16} />
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-purple-100 h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.975965540929!2d37.61761731579516!3d55.75399998055538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1647248400000!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта школы"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-purple-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm">Р</span>
            РобоАрт
          </div>
          <div className="text-violet-300 text-sm">© 2024 РобоАрт. Все права защищены.</div>
          <div className="flex gap-6 text-sm text-violet-300">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Оферта</a>
          </div>
        </div>
      </footer>
    </div>
  );
}