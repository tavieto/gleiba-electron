const { app, BrowserWindow } = require('electron')

function createWindow(){
  let win = new BrowserWindow({
      width: 800,
      height: 800,
      webPreferences: {
          nodeIntegration: true
      }
  }); 

  win.loadFile('index.html')
  win.removeMenu()
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})