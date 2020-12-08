const _map = new Map()
ipcRenderer.on('get-all-music', (event, arg) => {
    const cb = _map.get(arg.symbol)

    if (typeof cb === 'function') {
        _map.delete(arg.symbol)
        cb(arg.data)
    }
})
const allMusic = (type, data) => {
    const _symbol = Date.now()
    return new Promise(resolve => {
        _map.set(_symbol, data => {
            resolve(data)
        })
        
        ipcRenderer.send('get-all-music', { _symbol })
    })
}
export {
    allMusic
}