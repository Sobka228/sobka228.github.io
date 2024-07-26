// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "BogdanSite2014", " Мой Youtube    ПОБЕГ ОТ СОБКЕ    Мой ДС    Sobka Coin Web    Старый Сайт   ЕСЛИ У ЮЗЕРОВ ЯНДЕКСА ИЛИ SAFARI НЕ РАБОТАЕТ SHOUTBOX ТО ЗАПУСТИТЕ EDGE ЛИБО ДРУГОЙ БРАУЗЕР  Добавляй наш баннер на свой сайт! Мне будет приятно  3  Баннер будет выглядить вот так  Кто я?  Обычный челик который создает контент на ютубе или создаю модельки или что-то другое О сайте   Новости или какой-то блог с приколюхами и с приколами  Моя аська  4933681        Если вы хотите со мной связаться быстро то нажмите на эту кнопку   Мой Любимые Радио    HTM сайты которые на моем диске   СПИСОК СТРАНИЦ ЗАКАНЧИВАЕТЬСЯ!!!   Хотите еще страниц?    ", "");
   this[database_length++] = new SearchPage("ПОБЕГ-ОТ-СОБКЕ.html", "ПОБЕГ ОТ СОБКИ", "1 ЧАСТЬ  1 СЕРИЯ  2 СЕРИЯ  ТРЕЙЛЕРЫ  3 СЕРИЯ  4 СЕРИЯ  5 СЕРИЯ   ", "");
   this[database_length++] = new SearchPage("YOU-ARE-AN-IDIOT!!!.html", "YOU ARE AN IDIOT!!!", " ", "");
   this[database_length++] = new SearchPage("radio.html", "Радиошки", "1 Юмор ФМ Проста шутки и музыка     http //pub0101.101.ru 8000/stream/reg/mp3/128/region_humor_16 Поток  99,5 FM  2 Radio Energy Проста радио с музыкой  http //pub0101.101.ru 8000/stream/reg/mp3/128/region_energy_90 Поток  89,1 FM  3 Маяк НОВАСТИ ЕЕЕЕЕЕ  http //radio.tvtomsk.ru 8000/mayak Поток  106,6 FM  Чтобы радио не слушать в браузере вот вам приложуха http //vinda.dax.ru/ronline.htm Если у вас илифон то просто берите поток радио в приложений   ", "");
   this[database_length++] = new SearchPage("list.html", "ЛИСТ СТРАНИЦ", " HTM сайты которые на моем диске    Старый Сайт    Sobka Coin Web    Мой Любимые Радио    ПОБЕГ ОТ СОБКЕ   Список Страниц   ", "");
   this[database_length++] = new SearchPage("404.html", "404", "Упсс! Вы попали на страницу 404!  Но можете здесь посмотреть флешку   ЧТОБЫ ФЛЕШ ЗАРАБОТАЛ СКАЧАЙТЕ  https //chromewebstore.google.com/detail/ruffle-flash-emulator/donbcfbmhbcapadipfkeojnmajbakjdc?hl=ru  На главную   ", "");
   this[database_length++] = new SearchPage("500.html", "500", "ОШИБКА 500  500 Internal Server Error   ", "");
   this[database_length++] = new SearchPage("405.html", "405", "Упсс! Вы попали на страницу 405!  Но можете здесь посмотреть флешку   ЧТОБЫ ФЛЕШ ЗАРАБОТАЛ СКАЧАЙТЕ  https //chromewebstore.google.com/detail/ruffle-flash-emulator/donbcfbmhbcapadipfkeojnmajbakjdc?hl=ru   ", "");
   this[database_length++] = new SearchPage("OldSites.htm", "HTM или HTML сайты которые у меня есть на каком-то диске", "HTM или HTML сайты которые у меня есть на каком-то диске  boygirlsms.htm  http //stars.net.ua/ https //web.archive.org/web/20060612200034/http //stars.net.ua/   ", "");
   return this;
}
