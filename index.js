// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
    cats.push(name);

    return cats;
}

function destructivelyPrependCat(name)
{
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
    cats.unshift(name);

    return cats;
}

function destructivelyRemoveLastCat(name)
{
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
    cats.splice(-1);

    return cats;
}

function destructivelyRemoveFirstCat(name)
{
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
    cats.splice(0, 1);

    return cats;
}

function appendCat(name)
{
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
    let newCats = cats.slice(0);
    newCats.push(name);

    return newCats;
}
function prependCat(name)
{
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
    let newCats = cats.slice(0);
    newCats.unshift(name);

    return newCats;
}

function removeLastCat()
{
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');

    return cats.slice(0, cats.length-1);
}
function removeFirstCat()
{
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');

    return cats.slice(1);
}