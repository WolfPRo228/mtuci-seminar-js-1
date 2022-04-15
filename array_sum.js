let Massiv = [1, 2, 3, 4];

function masssumm(Massiv)
{
    let sum = 0;
    Massiv.forEach(item => 
        {
            sum = sum + item;
        });
        return sum;
}

console.log(masssumm(Massiv))