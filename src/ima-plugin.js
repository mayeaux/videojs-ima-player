
import './ima-player.js';

// basic plugin is enough for this purpose
videojs.registerPlugin('ima', function(options) {
	// inits contrib-ads asap
	this.ads(Object.assign({
		debug: options.debug||false,
		timeout: options.timeout||5000,
		prerollTimeout: options.prerollTimeout||5000,
	}, options.contribAdsSettings || {}));

	this.ima = this.addChild('imaPlayer', options);
});
