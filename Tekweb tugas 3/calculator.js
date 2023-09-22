// Hitung deret Fibonacci
function calculateFibonacci() {
    const n = parseInt(document.getElementById("fibonacci-number").value);
    if (n <= 0) {
        document.getElementById("fibonacci-result").textContent = "Deret Fibonacci ke-N: 0";
        return;
    }
    let a = 0;
    let b = 1;
    let result = 0;
    if (n === 1) {
        document.getElementById("fibonacci-result").textContent = `Deret Fibonacci ke-1: 0`;
        return;
    }
    document.getElementById("fibonacci-result").textContent = `Deret Fibonacci ke-1: 0, Deret Fibonacci ke-2: 1`;
    for (let i = 3; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
        document.getElementById("fibonacci-result").textContent += `, Deret Fibonacci ke-${i}: ${result}`;
    }
}

// Hitung volume berdasarkan bentuk
function calculateVolume(shape) {
    const dimension1 = parseFloat(document.getElementById("panjang").value);
    const dimension2 = parseFloat(document.getElementById("lebar").value);
    const dimension3 = parseFloat(document.getElementById("tinggi").value);
    const sisi = parseFloat(document.getElementById("sisi").value);
    const r = parseFloat(document.getElementById("r").value);
    const t = parseFloat(document.getElementById("t").value);

    let volume = 0;

    switch (shape) {
        case "balok":
            volume = dimension1 * dimension2 * dimension3;
            document.getElementById("demo").innerText = "Volume Balok = " + volume + " cm^3";
            break;
        case "kubus":
            volume = sisi ** 3;
            document.getElementById("demokubus").innerText = "Volume Kubus = " + volume + " cm^3";
            break;
        case "tabung":
            volume = Math.PI * r ** 2 * t;
            document.getElementById("pdemo").innerText = "Volume Tabung = " + volume + " cm^3";
            break;
    }
}
