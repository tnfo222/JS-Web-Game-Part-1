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
//Images to be inserted
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//function to insert and collect items
function newItem(asset,left,bottom){
    let item = newImage(asset,left,bottom)
    document.body.append(item)

    item.addEventListener('dblclick', () => {
        item.remove()
    })
}

//Items to insert and collect
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)