var helper = require('../helper.js')
var cheerio = require('cheerio');

exports.food = function(req, res) {
	var url = "https://www.zomato.com/id/bangalore/indiranagar-restaurants?category=3";
	helper.get_page_secure(url, function(data) {
		if(data) {
			var $ = cheerio.load(data);
			
			var list = []	
			$(".resZS").each(function(i, e) {
				list.push({
					name : $(e).find('article').children().children().next().children().text(),
					search_page_text : $(e).find('search_result').text(),
					search_result_address : $(e).find('.search-result-address').text(),
					upc : $(e).find('div.search_grid_left.search_grid_100').children().next().text(),
				});
			});
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(JSON.stringify(list));
		} else {
			console.log("error");
		}
	});
}
