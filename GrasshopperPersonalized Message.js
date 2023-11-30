function greet (name, owner) {
    return name.trim()===owner.trim()?  'Hello boss' : 'Hello guest'

}

console.log(greet('Daniel', 'Daniel'))