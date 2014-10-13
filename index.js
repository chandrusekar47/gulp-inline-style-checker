var through = require("through2"),
	gutil = require("gulp-util");

module.exports = function (param) {
	"use strict";

	if (!param) {
		throw new gutil.PluginError("gulp-inline-style-checker", "No param supplied");
	}

	function inlineStyleChecker(file, enc, callback) {
        var error;
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {

			this.emit("error",
				new gutil.PluginError("gulp-inline-style-checker", "Stream content is not supported"));
			return callback();
		}

		if (file.isBuffer()) {

			var contents = file.contents;
            var $ = cheerio.load(contents);
            if ($("style").length > 0) {
                error = new gutil.PluginError(PLUGIN_NAME, "style tag present in " + file.name);
            } else if ($("[style]").length > 0) {
                debugger;
                error = new gutil.PluginError(PLUGIN_NAME, "inline style attribute present in " + file);
            }
			this.push(file);

		}
		return cb(error, file);
	}

	return through.obj(inlineStyleChecker);
};
