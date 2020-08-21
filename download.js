const fs = require('fs');
const ytdl = require('ytdl-core');

exports.downloadVideo = (url) =>{
ytdl(url)
  .pipe(fs.createWriteStream('./output/video.flv'));

}