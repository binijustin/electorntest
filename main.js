const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//global reference to window object
let win;

//__dirname = current directory
function createWindow (){
    //create browser window
    win = new BrowserWindow({width:800, height:600, icon:__dirname+'/img/gear.jpeg'});

    //load index.html
    win.loadURL(url.format({
        pathname:path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes:true
    }))

    //open devtools
    win.webContents.openDevTools();

    //if closed make the window null
    win.on('closed', () => {
        win = null;
    })
}

//run create window fucntion if the app is ready
app.on('ready', createWindow);

//Quit when all windows are closed
app.on('window-all-closed', () => {
    //for mac
    if(process.platform !== 'darwin'){
        app.quit();
    }


})
