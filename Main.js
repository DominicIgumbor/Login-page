
//showNumbers(10);

showNumbers(10);
function showNumbers(limit){
    let i = 0;

    while (i <= limit){
        i++;
        if (i % 2 == 0){
            console.log(i + ": Even")
        }
        else
        console.log(i + ": Odd")
    }

}