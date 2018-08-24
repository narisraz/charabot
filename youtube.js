const ytdl = require('ytdl-core');
var search = require('youtube-search');

require('dotenv').config();


module.exports = {
    getByVid: vid => ytdl.getBasicInfo(vid, (err, info) => {
        if (err) throw err;
        return ytdl.filterFormats(info.formats, { container: 'webm' });
    }),
    searchByKeyword: keyword => search(keyword, opts, function(err, results) {
        if(err) return console.log(err);
        console.log(results);
        return results;
    })
}