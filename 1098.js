let i = 0 
let j = 0;
let frac = 0;

    for (i = 0; i <= 20; i += 2) {
        frac = i / 10
        ;
        for (j = 1; j <= 3; ++j)
            console.log(`I=${frac} J=${j + frac}`);
    }


