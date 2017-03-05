document.write(' <div class="main">');
for (var k = 8; k > 0; k--) {
    document.write(k + '<br>');
}
for (var i = 0; i <= 7; i++) {
    document.write('<div class="row">');
    for (var j = 0; j <= 7; j++) {
        document.write('<div class="cell"></div>');
    }
    document.write('</div>');
}
document.write('a' + 'b' + 'c' + 'd' + 'e' + 'f' + 'g' + 'h');
document.write('</div>');