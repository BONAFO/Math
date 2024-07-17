// const a = 12;
// const b = 9;

const a = 520123213201;
const b = 1235412311231;



console.log((a * b).toExponential(1));
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
            // result += dig[dig.length - 1];
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


    // console.log(result);










    // for (let d2 = 0; d2 < b.length; d2++) {

    //     const num1 = b[d2];
    //     const toSum = [];
    //     for (let d1 = 0; d1 < a.length; d1++) {
    //         toSum.push((a[d1] * num1).toString() + repeat(d1, '0'));
    //     }


    //     let result = "";
    //     for (let i = 0; i < toSum.length; i++) {
    //         if (i == 0) {
    //             result = toSum[i];
    //         } else {
    //             result = sumar_enteros(toSum[i], result)
    //         }

    //     }

    //     final_sum.push(result + repeat(d2, '0'))
    // }

    // let result = "";
    // for (let i = 0; i < final_sum.length; i++) {
    //     if (i == 0) {
    //         result = final_sum[i];
    //     } else {
    //         result = sumar_enteros(final_sum[i], result)
    //     }

    // }

    // console.log(result);
}

multiplicacion_enteros(a, b)


const division_enteros = (dividendo, divisor) => {
    let resto = "0";
    let cociente = "";
    let operando = "";
    dividendo = dividendo.toString();

    for (let i = 0; i < dividendo.length; i++) {
        operando += dividendo[i];
        if (parseInt(operando) >= divisor) {
            operando = parseInt(operando);
            cociente += (parseInt(operando / divisor)).toString();
            resto = (operando % divisor);
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