//function to insert new items at different locations
function newImage(asset,left,bottom){
    let item = document.createElement('img')
    item.src = asset
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)
    return item
}

//function to insert and collect items
//function newItem(asset,left,bottom){
//    let item = newImage(asset,left,bottom)
//    document.body.append(item)

//    item.addEventListener('dblclick', () => {
//        item.remove()
//    })
//}

//function tile(url, left, bottom, width, height){
//    for(let h = 0; h < height; h++){
//        for(let w = 0; w < width; w++){
//            newImage(url, left + w*100, bottom+h*100)
//        }
//    }
//}

//Game Background
//let horizon = innerHeight / 1.75
//let sky = innerHeight - horizon
//let grass = horizon

//tile('assets/sky.png',0,horizon,window.innerWidth/100,sky/100)
//tile('assets/grass.png',0,0,window.innerWidth/100,grass/100)

//Images to be inserted
//newImage('assets/green-character.gif', 100, 100)
//newImage('assets/pine-tree.png', 450, 200)
//newImage('assets/tree.png', 200, 300)
//newImage('assets/pillar.png', 350, 100)
//newImage('assets/crate.png', 150, 200)
//newImage('assets/well.png', 500, 425)

//Items to insert and collect
//newItem('assets/sword.png', 500, 405)
//newItem('assets/sheild.png', 165, 185)
//newItem('assets/staff.png', 600, 100)
let inventory

function newItem(asset, left, bottom){
    let item = newImage(asset, left, bottom)
    item.addEventListener('click', function(){
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = asset
        inventory.append(inventoryItem)
    })
    return inventory
}

function newInventory(){
    inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}

newInventory()
newImage('assets/green-character.gif', 100, 250)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)

newItem('assets/sword.png', 500, 555)
newItem('assets/sheild.png', 165, 335)
newItem('assets/staff.png', 600, 250)

