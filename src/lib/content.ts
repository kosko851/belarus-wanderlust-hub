import type { AssetKey } from "./assets";

export const CONTACT_EMAIL = "bikbu83@gmail.com";
export const CONTACT_PHONE = "+375 29 000 0000";

export const navItems = [
  { to: "/", label: "Главная" },
  { to: "/destinations", label: "Направления" },
  { to: "/lida-castle", label: "Лидский замок" },
  { to: "/tours", label: "Туры" },
  { to: "/planner", label: "Планировщик" },
  { to: "/map", label: "Карта" },
  { to: "/promotions", label: "Акции" },
  { to: "/gallery", label: "Галерея" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "О нас" },
  { to: "/contact", label: "Контакты" },
] as const;

export type Destination = {
  id: string;
  name: string;
  tag: string;
  desc: string;
  imgKey?: AssetKey;
  img?: string;
  featured?: boolean;
};

export const destinations: Destination[] = [
  {
    id: "lida",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Lida_Castle_2011.jpg/1280px-Lida_Castle_2011.jpg",
    name: "Лидский замок",
    tag: "Средневековая крепость",
    desc: "Готическая крепость XIV века — рыцарские турниры, средневековые фестивали, стрельба из лука и ночные экскурсии с факелами.",
    featured: true,
  },
  {
    id: "mir",
    imgKey: "mir",
    name: "Замки Мир и Несвиж",
    tag: "Объект ЮНЕСКО",
    desc: "Два величайших замка Восточной Европы — ренессанс и барокко среди озёр и формальных садов.",
  },
  {
    id: "nesvizh",
    imgKey: "nesvizh",
    name: "Несвижский дворец",
    tag: "Магнатская резиденция",
    desc: "Историческая резиденция рода Радзивиллов — барочный шедевр, восстановленный в былом XVII-вековом великолепии.",
  },
  {
    id: "forest",
    imgKey: "forest",
    name: "Беловежская пуща",
    tag: "Природный парк ЮНЕСКО",
    desc: "Последний первозданный лес Европы — зубры, 900-летние дубы и утренние туманы.",
  },
  {
    id: "minsk",
    imgKey: "minsk",
    name: "Минск",
    tag: "Столица",
    desc: "Широкие проспекты, сталинский ампир, скрытые кафе и тёплая атмосфера современной Беларуси.",
  },
  {
    id: "lakes",
    imgKey: "lakes",
    name: "Браславские озёра",
    tag: "Природное чудо",
    desc: "300 кристально чистых ледниковых озёр — каякинг, рыбалка и неспешные летние дни.",
  },
  {
    id: "brest",
    imgKey: "brest",
    name: "Брестская крепость",
    tag: "Исторический монумент",
    desc: "Монументальный мемориальный комплекс на границе — трогательный, масштабный и незабываемый.",
  },
];

export type MapLocation = {
  id: string;
  name: string;
  region: string;
  distanceFromMinsk: string;
  travelTime: string;
  lat: number;
  lng: number;
  desc: string;
};

export const mapLocations: MapLocation[] = [
  { id: "lida", name: "Лидский замок", region: "Гродненская обл.", distanceFromMinsk: "170 км", travelTime: "2 ч", lat: 53.887, lng: 25.299, desc: "Средневековая крепость XIV века" },
  { id: "mir", name: "Мирский замок", region: "Гродненская обл.", distanceFromMinsk: "100 км", travelTime: "1.5 ч", lat: 53.451, lng: 26.473, desc: "Объект ЮНЕСКО, ренессанс" },
  { id: "nesvizh", name: "Несвижский дворец", region: "Минская обл.", distanceFromMinsk: "120 км", travelTime: "1.5 ч", lat: 53.222, lng: 26.676, desc: "Резиденция Радзивиллов" },
  { id: "forest", name: "Беловежская пуща", region: "Брестская обл.", distanceFromMinsk: "360 км", travelTime: "4 ч", lat: 52.571, lng: 23.852, desc: "Первозданный лес, зубры" },
  { id: "minsk", name: "Минск", region: "Столица", distanceFromMinsk: "0 км", travelTime: "—", lat: 53.904, lng: 27.561, desc: "Исторический центр и музеи" },
  { id: "lakes", name: "Браславские озёра", region: "Витебская обл.", distanceFromMinsk: "250 км", travelTime: "3 ч", lat: 55.639, lng: 27.046, desc: "300 ледниковых озёр" },
  { id: "brest", name: "Брестская крепость", region: "Брестская обл.", distanceFromMinsk: "350 км", travelTime: "4 ч", lat: 52.078, lng: 23.654, desc: "Мемориальный комплекс" },
];

export type Tour = {
  id: string;
  name: string;
  duration: string;
  durationDays: number;
  difficulty: string;
  category: "castles" | "nature" | "combined";
  price: number;
  featured: boolean;
  highlights: string[];
};

export const tours: Tour[] = [
  {
    id: "castle",
    name: "Замковый экспресс",
    duration: "3 дня",
    durationDays: 3,
    difficulty: "Лёгкий",
    category: "castles",
    price: 450,
    featured: false,
    highlights: ["Мирский замок", "Несвижский дворец и сады", "Старый Минск", "Традиционный ужин"],
  },
  {
    id: "nature",
    name: "Природа и история",
    duration: "5 дней",
    durationDays: 5,
    difficulty: "Средний",
    category: "combined",
    price: 790,
    featured: true,
    highlights: ["Рассвет в Беловежской пуще", "Зубровый заказник", "Мир и Несвиж", "Брестская крепость", "Фермерский дом"],
  },
  {
    id: "grand",
    name: "Большая Беларусь",
    duration: "7 дней",
    durationDays: 7,
    difficulty: "Средний",
    category: "combined",
    price: 1150,
    featured: false,
    highlights: ["Все объекты ЮНЕСКО", "Каякинг на Браславских озёрах", "Минск — полный день", "Мастер-класс народного творчества", "Дегустация вина и мёда"],
  },
  {
    id: "lida",
    name: "Лидский замок + Мир",
    duration: "2 дня",
    durationDays: 2,
    difficulty: "Лёгкий",
    category: "castles",
    price: 320,
    featured: false,
    highlights: ["Лидский замок — полный день", "Рыцарский турнир или стрельба", "Мирский замок", "Трансфер из Минска"],
  },
];

export const tourExtras = [
  { id: "transfer", name: "Трансфер из аэропорта", price: 20 },
  { id: "guide", name: "Персональный гид", price: 80 },
  { id: "photo", name: "Фотосессия", price: 50 },
  { id: "dinner", name: "Ужин в замке", price: 35 },
  { id: "insurance", name: "Страховка", price: 15 },
] as const;

export const plannerSpots = [
  { id: "lida", name: "Лидский замок", days: 1, pricePerDay: 55, category: "Замки" },
  { id: "mir", name: "Мирский замок", days: 1, pricePerDay: 45, category: "Замки" },
  { id: "nesvizh", name: "Несвижский дворец", days: 1, pricePerDay: 40, category: "Замки" },
  { id: "forest", name: "Беловежская пуща", days: 2, pricePerDay: 60, category: "Природа" },
  { id: "minsk", name: "Минск", days: 1, pricePerDay: 35, category: "Города" },
  { id: "lakes", name: "Браславские озёра", days: 2, pricePerDay: 55, category: "Природа" },
  { id: "brest", name: "Брестская крепость", days: 1, pricePerDay: 40, category: "История" },
];

export const promotions = [
  {
    id: "early",
    title: "Раннее бронирование",
    discount: 15,
    desc: "Забронируйте тур за 60 дней до поездки и получите скидку 15%.",
    code: "RANNIE15",
    validUntil: "31.12.2026",
    badge: "−15%",
  },
  {
    id: "family",
    title: "Семейный отдых",
    discount: 20,
    desc: "При бронировании для семьи от 4 человек — скидка 20% на детские места.",
    code: "SEMYA20",
    validUntil: "31.08.2026",
    badge: "−20%",
  },
  {
    id: "lida",
    title: "Лидский замок — выходные",
    discount: 10,
    desc: "Специальная цена на тур «Лидский замок + Мир» по промокоду.",
    code: "LIDA10",
    validUntil: "30.09.2026",
    badge: "−10%",
  },
  {
    id: "first",
    title: "Первый визит",
    discount: 10,
    desc: "Скидка 10% для тех, кто впервые путешествует с нами.",
    code: "PERVIY10",
    validUntil: "31.12.2026",
    badge: "−10%",
  },
];

export const seasonTips = [
  { season: "Весна", months: "Март–Май", icon: "🌸", tips: ["Несвиж и Мир без толп", "Первая зелень в пуще", "Пасхальные ярмарки"], bestFor: "Замки и прогулки" },
  { season: "Лето", months: "Июнь–Август", icon: "☀️", tips: ["Рыцарские турниры в Лиде", "Купание на Браславских озёрах", "Фестивали под открытым небом"], bestFor: "Семьи и активный отдых" },
  { season: "Осень", months: "Сентябрь–Ноябрь", icon: "🍂", tips: ["Золотые леса Беловежья", "Сбор урожая и дегустации", "Тёплые вечера в замках"], bestFor: "Фото и гастрономия" },
  { season: "Зима", months: "Декабрь–Февраль", icon: "❄️", tips: ["Зимние сказки в замках", "Катание на санях", "Новогодние программы"], bestFor: "Романтика и уют" },
];

export const lidaActivities = [
  { title: "Рыцарский турнир", desc: "Ежегодные исторические реконструкции с рыцарями в доспехах, конными боями и средневековыми играми.", season: "Июль–август" },
  { title: "Стрельба из лука", desc: "Мастер-класс на территории замка — научитесь стрелять как настоящий лучник XIV века.", season: "Круглый год" },
  { title: "Ночная экскурсия с факелами", desc: "Тайны крепости после заката — мистические легенды, подземные ходы и звёздное небо.", season: "Май–сентябрь" },
  { title: "Средневековый банкет", desc: "Ужин по рецептам XIV века в зале замка — медовуха, мясо на вертеле, живая музыка.", season: "По запросу" },
  { title: "Мастер-класс кузнеца", desc: "Создайте свой сувенир в кузнице замка под руководством мастера.", season: "Круглый год" },
  { title: "Экскурсия по башням", desc: "Подъём на донжон с панорамным видом на город Лида и окрестности.", season: "Круглый год" },
  { title: "Детский рыцарский лагерь", desc: "Интерактивная программа для детей 6–14 лет — костюмы, игры, истории.", season: "Июнь–август" },
  { title: "Фотосессия в костюмах", desc: "Профессиональная съёмка в средневековых нарядах на фоне крепостных стен.", season: "Круглый год" },
];

export const lidaTours = [
  { name: "Экспресс-визит", duration: "3 часа", price: 25, highlights: ["Обзорная экскурсия", "Подъём на башню", "Сувенирная лавка"] },
  { name: "Полный день в Лиде", duration: "8 часов", price: 55, highlights: ["Экскурсия с гидом", "Стрельба из лука", "Средневековый обед", "Мастер-класс кузнеца"] },
  { name: "Ночная крепость", duration: "4 часа", price: 40, highlights: ["Экскурсия с факелами", "Легенды замка", "Горячий чай у костра"] },
  { name: "Семейный тур", duration: "5 часов", price: 75, highlights: ["Детская программа", "Рыцарские игры", "Фотосессия", "Обед для всей семьи"], family: true },
];

export const faqItems = [
  { q: "Как забронировать тур?", a: "Заполните форму на странице «Контакты» или нажмите «Забронировать» на карточке тура. Мы ответим в течение 24 часов." },
  { q: "Какие способы оплаты принимаются?", a: "Банковский перевод, карта (Visa/Mastercard), наличные при встрече. Предоплата 30% при бронировании." },
  { q: "Можно ли изменить даты после бронирования?", a: "Да, бесплатное изменение дат за 14 дней до начала тура. При более позднем изменении — удержание 10%." },
  { q: "Есть ли трансфер из аэропорта?", a: "Да, трансфер из аэропорта Минска включён во все многодневные туры. Для однодневных — по запросу за доплату 20 BYN." },
  { q: "Подходят ли туры для детей?", a: "Большинство туров подходят для семей с детьми от 6 лет. Лидский замок имеет специальную детскую программу." },
  { q: "На каком языке проводятся экскурсии?", a: "На русском, белорусском и английском. Другие языки — по запросу." },
  { q: "Как использовать промокод?", a: "Укажите промокод в поле «Сообщение» при бронировании или на странице «Акции». Скидка применяется при подтверждении." },
  { q: "Можно ли составить свой маршрут?", a: "Да! Используйте «Планировщик маршрута» — выберите места, и мы рассчитаем стоимость и длительность." },
];

export function formatPrice(amount: number): string {
  return `${Math.round(amount).toLocaleString("ru-BY")} BYN`;
}

export function applyDiscount(price: number, discountPercent: number): number {
  return Math.round(price * (1 - discountPercent / 100));
}

export function getMapEmbedUrl(lat: number, lng: number, zoom = 12): string {
  const delta = 0.08 / (zoom / 10);
  const bbox = `${lng - delta}%2C${lat - delta}%2C${lng + delta}%2C${lat + delta}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
}
