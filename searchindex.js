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
   this[database_length++] = new SearchPage("index.html", "BogdanSite2014", " ", "");
   this[database_length++] = new SearchPage("ПОБЕГ-ОТ-СОБКЕ.html", "ПОБЕГ ОТ СОБКИ", "1 ЧАСТЬ  1 СЕРИЯ  2 СЕРИЯ  ТРЕЙЛЕРЫ   ", "");
   this[database_length++] = new SearchPage("Social.html", "BogdanSite2014 Social", " ", "");
   this[database_length++] = new SearchPage("page1.html", "YOU ARE AN IDIOT!!!", " ", "");
   this[database_length++] = new SearchPage("404.html", "404", "Упсс! Вы попали на страницу 404!  Но можете здесь посмотреть флешку   ЧТОБЫ ФЛЕШ ЗАРАБОТАЛ СКАЧАЙТЕ  https //chromewebstore.google.com/detail/ruffle-flash-emulator/donbcfbmhbcapadipfkeojnmajbakjdc?hl=ru  На главную   ", "");
   return this;
}
