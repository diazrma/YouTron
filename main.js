const { app, BrowserWindow, globalShortcut, window, dialog} = require('electron');
const ipc = require('electron').ipcMain
const {ipcControl} =require('./ipc');

function createWindow() {

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        transparent: true,
        icon:'logo.ico',
        webPreferences: {
            nodeIntegration: true
        }
    })


    win.loadFile('index.html');


    globalShortcut.register('CommandOrControl+shift+i', async function () {

        win.webContents.openDevTools();
    
      });
    
    
    ipcControl(BrowserWindow,window,ipc,dialog);
}


app.whenReady().then(createWindow)


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
