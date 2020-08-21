
const ipc = require('electron').ipcRenderer,

    max = document.getElementById('max');

max.addEventListener('click', () => {
    ipc.sendSync('max', true);

});

min = document.getElementById('min');

min.addEventListener('click', () => {
    ipc.sendSync('min', true);

});

close = document.getElementById('close');

close.addEventListener('click', () => {
    ipc.sendSync('close', true);

});



download = document.getElementById('download');

download.addEventListener('click', () => {

    url = document.getElementById('url').value;
    ipc.sendSync('download', url);

});




openFolder = document.getElementById('openFolder');

openFolder.addEventListener('click', () => {
   
    ipc.sendSync('openFolder', true);

});