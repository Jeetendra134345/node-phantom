var phantom=require('../phantom-node');

exports.testPhantomInjectJs=function(beforeExit,assert) {
	phantom.create(function(error,ph){
		assert.ifError(error);
		ph.injectJs('test/files/injecttest.js',function(err){
			assert.ifError(err);
			ph.exit();
		});
	});
};