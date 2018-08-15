const cheerio = require("cheerio");
const superagent = require("superagent");
const fs = require('fs');
let data = [];
let promiseArr = [];

function writeGoodsList(data) {
    let dataStr = JSON.stringify(data);
    let path = __dirname + '/data/goods.json';
    fs.writeFile(path, dataStr, (err) => {
        if (err) throw err;
        console.log('write successfully~');
    });
}

function fetchGoodsListData(num) {
    return new Promise((resolve, reject) => {
        getGoodsListData(num, resolve);
    })
}

function getGoodsListData(num, resolve) {
    superagent.get("https://www.tomtop.com/smart-device-safety-10322/" + num + '.html')
        .end(function(err, res) {
            if (err) {
                return next(err);
            }
            let $ = cheerio.load(res.text);
            let ul = $('.lbBox.categoryProductList');
            let li = ul.children();
            li.each((idx, item) => {
                let obj = {
                    sku: $(item).find('.productSKU').html().substring(4),
                    imgUrl: $(item).find('.productImg img').attr('data-original'),
                    discountNo: $(item).find('.productImg .icon_sale em').html(),
                    title: $(item).find('.productTitle').html(),
                    discountPrice: $(item).find('.priceWarp .GAPrice').html(),
                    originalPrice: $(item).find('.priceWarp .productCost').html(),
                    commentNo: $(item).find('.product_evaluate .reviews_c span').html(),
                    likedNo: $(item).find('.product_evaluate .like_c .addHeartNum').html(),
                    countryImg: 'https:' + $(item).find('.warehouseList .lineBlock.active img').attr('src'),
                };
                data.push(obj);
            });
            resolve();
        });
}
for (let i = 1; i <= 32; i++) {
    promiseArr.push(fetchGoodsListData(i));
}
Promise.all(promiseArr)
    .then(_ => {
        // console.log(data.length)
        // writeGoodsList(data);
    })