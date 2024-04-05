function Calcular(){
    let n = parseFloat(document.getElementById("num1").value)
    let n2 = parseFloat(document.getElementById("num2").value)
    document.getElementById('resultado').innerHTML= n +n2
    let r = n + n2
    console.log(r)
}