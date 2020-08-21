const { downloadVideo } = require('./download');
exports.ipcControl = (BrowserWindow, window, ipc, dialog) => {
    ipc.on('min', (event, args) => {
        let min = args;
        if (min) {

            let window = BrowserWindow.getFocusedWindow();
            window.minimize();
            // window.hide();
        }

    });

    ipc.on('max', (event, args) => {
        let max = args;
        if (max) {

        

            var window =BrowserWindow.getFocusedWindow();
            window.isMaximized() ? window.unmaximize() : window.maximize();

        }

    });

    ipc.on('close', (event, args) => {
        let close = args;
        if (close) {
            let window = BrowserWindow.getFocusedWindow();
            window.close();

        }

    });

    ipc.on('download', (event, args) => {

        let url = args;

        const matchYoutubeUrl = (url) => {
            var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            var matches = url.match(p);
            if (matches) {
                return matches[1];
            }
            return false;
        }


        const check = (url) => {

            var id = matchYoutubeUrl(url);
            if (id != false) {
                downloadVideo(url);
            } else {
                dialog.showMessageBox({
                    type: 'error',
                    buttons: ['Cancel'],
                    defaultId: 2,
                    title: 'Link do Youtube incorreto',
                    message: 'Verifique se o link esta correto e tente novamente!',

                });

            }
        }

        check(url);


    });


}
