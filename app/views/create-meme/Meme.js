var observable = require("data/observable");

var imageManipulation = require("../../shared/image-manipulation/image-manipulation");
var localStorage = require("../../shared/local-storage/local-storage");
var utilities = require("../../shared/utilities");
var analyticsMonitor = require("../../shared/analytics");

var _ = require("lodash");

function Meme() {
	var that = this;
	var debouncedRefresh = _.debounce(function() {
		that.refresh();
	}, 10, { leading: true });

	// Add an event listener to refresh the memeImage every time there is a change to the properties
	this.addEventListener(observable.Observable.propertyChangeEvent, function(changes) {
		// skip if memeImage changes
		if (changes.propertyName === "memeImage" || !that.image) {
			return;
		}

		// Call refresh meme, but make sure it doesn't get called more often than every 10ms
		debouncedRefresh();
	});
}

Meme.prototype = new observable.Observable();

Meme.prototype.destroy = function() {
	this.removeEventListener(observable.Observable.propertyChangeEvent);
};

Meme.prototype.reset = function() {
	this.set("topText", "");
	this.set("bottomText", "");
	this.set("fontSize", 50);
	this.set("isBlackText", false);
};

Meme.prototype.setImage = function(image) {
	this.set("memeImage", image);
	this.reset();
	this.image = image;
	this.uniqueImageName = utilities.generateUUID() + ".png";
};

Meme.prototype.refresh = function() {
	var image = imageManipulation.addText({
		image: this.image,
		topText: this.topText,
		bottomText: this.bottomText,
		fontSize: this.fontSize,
		isBlackText: this.isBlackText
	});

	this.set("memeImage", image);
};

Meme.prototype.save = function() {
	analyticsMonitor.trackFeature("CreateMeme.SaveLocally");
	this.refresh();
	return localStorage.saveLocally(this.uniqueImageName, this.memeImage);
};

module.exports = Meme;
