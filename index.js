let i = 10
let f = 20.5
let b = true
let s = 'Hà Nội'

document.write('i = ' + i);
document.write('<br>');
document.write('f = ' + f);
document.write('<br>');
document.write('b = ' + b);
document.write('<br>');
document.write('s = ' + s + '<br>');

let width = 20
let height = 10
let area = width * height
document.write('Chieu dai hcn :' + width + '</br>');
document.write('Chieu cao hcn :' + height + '</br>');
document.write('dien tich hcn :' + area + '</br>');

function showMessage(){
    let inputa;
    let inputb;

    inputa = prompt('Nhập giá trị A:');
    inputb = prompt('Nhập giá trị B');
    
    let a = parseInt(inputa);
    let b = parseInt(inputb);
    let c = a % b;
    if (c == 0) {
        document.write('A chia hết cho B')
    }
    else {
        document.write('A không chia hết cho B')
    }
}