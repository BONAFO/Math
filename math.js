const repeat = (times, string) => {
    return new Array(times + 1).join(string);
}

const reverse_element = (e) => {
    return ((e.toString()).split("").reverse()).join("")
}




const sumar_enteros = (a, b) => {


    if (a.length <= b.length) {
        const toad = b.length - a.length;
        a = repeat(toad, "0") + a;
    } else {
        const toad = a.length - b.length;
        b = repeat(toad, "0") + b;
    }

    let extra = 0;
    let result = [];



    a = reverse_element(a);
    b = reverse_element(b);



    for (let i = 0; i < b.length; i++) {
        let dig = parseInt(a[i]) + parseInt(b[i]) + extra
        extra = "";
        if (dig.toString().length > 1 && b[i + 1] != undefined) {
            dig = dig.toString();
            extra = parseInt(dig.substring(0, dig.length - 1));
            result.push(dig[dig.length - 1]);
        } else {
            result.push(dig.toString());
        }

    }

    return result.reverse().join("")
}

const multiplicacion_enteros = (nu1, nu2) => {
    let a
    let b

    if (nu2.toString().length <= nu1.toString().length) {
        a = nu1
        b = nu2
    } else {
        a = nu2
        b = nu1
    }


    a = reverse_element(a);
    b = reverse_element(b);



    const final_sum = []


    b = b.trim();
    a = a.trim()
    for (let d2 = 0; d2 < b.length; d2++) {
        const num1 = b[d2];
        const toSum = [];




        for (let d1 = 0; d1 < a.length; d1++) {
            toSum.push((a[d1] * num1).toString() + repeat(d1, '0'));

        }




        let result = "";
        for (let i = 0; i < toSum.length; i++) {

            if (i == 0) {
                result = toSum[i];
            } else {
                result = sumar_enteros(toSum[i], result)
            }

        }




        final_sum.push(result + repeat(d2, '0'))



    }



    let result = "";
    for (let i = 0; i < final_sum.length; i++) {
        if (i == 0) {
            result = final_sum[i];
        } else {

            result = sumar_enteros(final_sum[i], result)
        }
    }



    return result












}

const reemplazar_ceros = (bt) => {

    let spitto = 0;
    for (let i = 0; i < bt.length; i++) {
        if (bt[i] != 0) {
            spitto = i;
            break
        }

    }

    return bt.substring(spitto)
}


const division_enteros = (dividendo, divisor) => {
    let resto = "0";
    let cociente = "";
    let operando = "";
    dividendo = dividendo.toString();

    for (let i = 0; i < dividendo.length; i++) {
        operando += dividendo[i];

        if (BigInt(operando) >= BigInt(divisor)) {

            let bre = 0;
            let divisor_torest;

            do {

                divisor_torest = multiplicacion_enteros(divisor, bre);
                if (BigInt(divisor_torest) > BigInt(operando)) {
                    bre--
                    divisor_torest = multiplicacion_enteros(divisor, bre);
                    break
                }
                bre++


            } while (true);

            console.log(divisor_torest);

            cociente += bre;

            resto = reemplazar_ceros(resta_enteros(operando, divisor_torest));

            operando = "" + resto;




        } else {
            cociente += "0"
            resto = "" + operando;

        }

    }

    return {
        cociente: cociente,
        resto: resto
    }

}




const resta_enteros = (a, b) => {

    const sign = (BigInt(a) < BigInt(b)) ? ('-') : ('');




    if (a.length < b.length) {
        const toad = b.length - a.length;
        a = repeat(toad, "0") + a;
    } else if (b.length < a.length) {
        const toad = a.length - b.length;
        b = repeat(toad, "0") + b;
    }

    let result = [];


    if (BigInt(a) < BigInt(b)) {
        let ap = a;

        a = b;
        b = ap;
    }


    a = reverse_element(a);
    b = reverse_element(b);


    let extra = 0;

    for (let i = 0; i < a.length; i++) {
        let aP = parseInt(a[i]);
        let bP = parseInt(b[i]);
        let deb = false;
        if (aP - extra < bP) {

            aP += 10
            deb = true;
        }
        let dig = (aP - extra) - bP;

        extra = (deb) ? (1) : (0);
        result.push(dig.toString());




    }



    return `${sign}${ result.reverse().join("")}`
}




const division_enteros_test = (a, b) => {
    // console.log("COCIENTE", Math.floor(a / b));
    // console.log("RESTO", Math.floor(a % b));
    let cociente = "";
    let resto = "";
    let counter = 0;
    let inter = setInterval(() => {
        console.log('---------------------------------------');
        console.log("OPERACION:", `${resto}${a[counter]} / ${b}`);
        cociente += (Math.floor(parseInt(`${resto}${a[counter]}`) / b)).toString();
        resto = parseInt(`${resto}${a[counter]}`) % b;
        console.log("COCIENTE: ", cociente);
        console.log("RESTO: ", resto);
        counter++


        console.log('---------------------------------------');
        if (a.length == counter) {
            clearInterval(inter)
            console.log('---------------------------------------');
            console.log("COMPROBACION:");
            console.log(division_enteros(num, num2).cociente == cociente);
            console.log('---------------------------------------');
        }


    }, 10);
}