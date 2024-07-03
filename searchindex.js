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
   this[database_length++] = new SearchPage("index.html", "BogdanSite2014", " Мой Youtube    ПОБЕГ ОТ СОБКЕ    Мой ТГК    Sobka Coin Web    Старый Сайт   ЕСЛИ У ЮЗЕРОВ ЯНДЕКСА ИЛИ SAFARI НЕ РАБОТАЕТ SHOUTBOX ТО ЗАПУСТИТЕ EDGE ЛИБО ДРУГОЙ БРАУЗЕР  Добавляй наш баннер на свой сайт! Мне будет приятно  3  Баннер будет выглядить вот так  Кто я?  Обычный челик который создает контент на ютубе или создаю модельки или что-то другое О сайте   Новости или какой-то блог с приколюхами и с приколами   Для Старых Браузеров    Для WAP    ", "");
   this[database_length++] = new SearchPage("ПОБЕГ-ОТ-СОБКЕ.html", "ПОБЕГ ОТ СОБКИ", "1 ЧАСТЬ  1 СЕРИЯ  2 СЕРИЯ  ТРЕЙЛЕРЫ  3 СЕРИЯ  4 СЕРИЯ  5 СЕРИЯ   ", "");
   this[database_length++] = new SearchPage("YOU-ARE-AN-IDIOT!!!.html", "YOU ARE AN IDIOT!!!", " ", "");
   this[database_length++] = new SearchPage("404.html", "404", "Упсс! Вы попали на страницу 404!  Но можете здесь посмотреть флешку   ЧТОБЫ ФЛЕШ ЗАРАБОТАЛ СКАЧАЙТЕ  https //chromewebstore.google.com/detail/ruffle-flash-emulator/donbcfbmhbcapadipfkeojnmajbakjdc?hl=ru  На главную   ", "");
   this[database_length++] = new SearchPage("500.html", "500", "ОШИБКА 500  500 Internal Server Error   ", "");
   this[database_length++] = new SearchPage("405.html", "405", "Упсс! Вы попали на страницу 405!  Но можете здесь посмотреть флешку   ЧТОБЫ ФЛЕШ ЗАРАБОТАЛ СКАЧАЙТЕ  https //chromewebstore.google.com/detail/ruffle-flash-emulator/donbcfbmhbcapadipfkeojnmajbakjdc?hl=ru   ", "");
   this[database_length++] = new SearchPage("old-version.htm", "BogdanSite2014", " Мой Youtube    ПОБЕГ ОТ СОБКЕ    Мой ТГК    Sobka Coin Web    Старый Сайт   ЕСЛИ У ЮЗЕРОВ ЯНДЕКСА ИЛИ SAFARI НЕ РАБОТАЕТ SHOUTBOX ТО ЗАПУСТИТЕ EDGE ЛИБО ДРУГОЙ БРАУЗЕР  Добавляй наш баннер на свой сайт! Мне будет приятно  3  Баннер будет выглядить вот так  Кто я?  Обычный челик который создает контент на ютубе или создаю модельки или что-то другое О сайте   Новости или какой-то блог с приколюхами и с приколами   ", "");
   this[database_length++] = new SearchPage("ПОБЕГ-ОТ-СОБКЕ-old.htm", "ПОБЕГ ОТ СОБКИ", "1 ЧАСТЬ  1 СЕРИЯ  2 СЕРИЯ  ТРЕЙЛЕРЫ  3 СЕРИЯ  4 СЕРИЯ  5 СЕРИЯ   ", "");
   this[database_length++] = new SearchPage("wap.htm", "Untitled Page", "Кто я?  Обычный челик который создает контент на ютубе или создаю модельки или что-то другое О сайте   Новости или какой-то блог с приколюхами и с приколами   ПОБЕГ ОТ СОБКЕ    Sobka Coin Web    Старый Сайт    Мой ТГК    Мой Youtube    ", "");
   this[database_length++] = new SearchPage("ПОБЕГ-ОТ-СОБКЕ-wap.htm", "ПОБЕГ ОТ СОБКИ", "1 ЧАСТЬ  1 СЕРИЯ  2 СЕРИЯ  3 СЕРИЯ  4 СЕРИЯ  5 СЕРИЯ   ", "");
   return this;
}
