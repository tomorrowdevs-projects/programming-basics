function common(a,b,c){
    let flag = true;
    let sum = 0;
    // sort arrays to have at position 0 lower number
    a.sort();
    b.sort();
    c.sort();

    /* check if in position 0 we have the same number in all three arrays and sum it, 
        otherwise we pop the lower number from his array
    */

    while (flag == true)
    {
        
        if (a.length == 0 || a.length == 0 || a.length == 0) flag = false; // when we reach at least one array without number exit
        else
        {
            
            if (a[0] == b[0] && a[0] == c[0] && b[0] == c[0])
            {
                sum += a[0];
                a.shift();
                b.shift();
                c.shift();
            }
            else if (a[0] <= b[0] && a[0] <= c[0]) a.shift();
            else if (b[0] <= a[0] && b[0] <= c[0]) b.shift();
            else if (c[0] <= a[0] && c[0] <= b[0]) c.shift();
        }
        
    }

    return sum;
} 
