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
   this[database_length++] = new SearchPage("page1.html", "BogdanSite2014-404", "404   ", "");
   this[database_length++] = new SearchPage("index.html", "BogdanSite2014", "!Сайт еще доделываеться!   ", "");
   this[database_length++] = new SearchPage("page2.htm", "robots.txt", "РОБОТЫ ЗАХВАТИТЬ МИР   ", "");
   return this;
}
