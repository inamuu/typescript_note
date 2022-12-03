import Parser from 'rss-parser';

type CustomItem = {
  'hatena:bookmarkcount': number
}

const parser: Parser<CustomItem> = new Parser({
  customFields: {
    item: ['hatena:bookmarkcount'],
  }
});

(async () => {
  const feed = await parser.parseURL('http://b.hatena.ne.jp/hotentry/it.rss')
  //console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item)
    console.log('bookmarkcount: ' + item['hatena:bookmarkcount']);
  })
})();
