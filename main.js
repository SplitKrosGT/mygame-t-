let cube = {
    x: Math.floor(Math.random() * 370 + 100),
    y: Math.floor(Math.random() * 370 + 100),
    id: 'cube',
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'black'
}

let map = {
    x: 100,
    y: 100,
    width: 470,
    height: 470,
    color: '#f5f5f5'
}

renderMap(map);
renderCube(cube);