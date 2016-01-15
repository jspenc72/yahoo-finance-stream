var freq = 5000;
var stocks = require('../index.js')({ frequency: freq });
 
stocks.watch('jblu');
stocks.watch('anac');
stocks.watch('fit');
stocks.watch('aan');
stocks.watch('s');
stocks.watch('cnx');
stocks.watch('crm');
stocks.watch('sq');
 
stocks.on('data', function(stock) {
	var now = new Date().toISOString()
  // console.log("Updated At: "+ now);
  console.log('%s: %d', stock.symbol, stock.bid);
});