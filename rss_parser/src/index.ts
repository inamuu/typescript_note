import Parser from 'rss-parser';

type CustomItem = {
  description: string,
  bookmarkcount: number
}

const parser: Parser<CustomItem> = new Parser({
  customFields: {
    item: ['description','hatena:bookmarkcount']
  }
});

(async () => {
  const feed = await parser.parseURL('http://b.hatena.ne.jp/hotentry/it.rss')
  //console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item)
    console.log(item.title);
    console.log(item.description);
  })
})();
