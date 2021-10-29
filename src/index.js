function drawFilledHourglass(n) {
    console.log('Preparing to draw a dimensional filled hourglass of ' + n + ' Lines');
    let len_space_between = 0
    let len_spaces = 0
    let line
    let len_sharps
    for (let i = 1; i <= n; i++) {
        if (i < 10)
            line = '0' + i + '.#';
        else
            line = i + '.#';
        switch (true) {
            case i == 1:
            case i == n - 1:
            case i == n:
                for (let j = 1; j <= n - 1; j++) {
                    line += '#';
                }
                break;
            case i > 1 && i <= (n / 2):
                let space_bt = '';
                for (let k = 1; k <= len_space_between; k++) {
                    space_bt += ' ';
                }

                line += space_bt + '#';

                len_spaces = n - i - 2 - len_space_between;
                for (let k = 1; k <= len_spaces; k++) {
                    line += ' ';
                }

                line += '#' + space_bt + '#';
                len_space_between += 1
                break;

            case i > 2 && i > (n / 2):
                len_spaces = n - i - 1;
                len_sharps = (len_spaces + 1) * 2;


                for (let k = 1; k <= len_spaces; k++) {
                    line += ' ';
                }

                for (let j = 1; j <= n - len_sharps; j++) {
                    line += '#';
                }
                for (let k = 1; k <= len_spaces; k++) {
                    line += ' ';
                }
                line += '#';
                break;


        }
        console.log(line);
    }
}

function drawUnFilledHourglass(n) {
    console.log('Preparing to draw a dimensional hourglass of ' + n + ' Lines');
    let len_space_between = 0
    let len_spaces
    let line
    let len_sharps
    for (let i = 1; i <= n; i++) {
        line = '#';
        switch (true) {
            case i == 1:
            case i == 2:
            case i == n:
                for (let j = 1; j <= n - 1; j++) {
                    line += '#';
                }
                break;
            case i > 2 && i <= (n / 2):
                len_spaces = i - 2;
                len_sharps = (len_spaces + 1) * 2;
                for (let k = 1; k <= len_spaces; k++) {
                    line += ' ';
                }
                for (let j = 1; j <= n - len_sharps; j++) {
                    line += '#';
                }
                for (let k = 1; k <= len_spaces; k++) {
                    line += ' ';
                }
                line += '#';
                break;
            case i > 2 && i > (n / 2):
                len_spaces = n - i - 1;
                for (let k = 1; k <= len_spaces; k++) {
                    line += ' ';
                }

                let space_bt = '';
                for (let k = 1; k <= len_space_between; k++) {
                    space_bt += ' ';
                }

                line += '#' + space_bt + '#';

                for (let k = 1; k <= len_spaces; k++) {
                    line += ' ';
                }
                line += '#';
                len_space_between += 2
                break;


        }
        console.log(line);
    }
}
function drawHourglass(n, fill = 'N') {
    console.log('Fillllllll:' + fill.toUpperCase());
    if (fill.toUpperCase() == 'S')
        drawFilledHourglass(n);
    else
        drawUnFilledHourglass(n);
}


const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Informe o parâmetro de desenho da ampulheta: ", function (n) {
    if (n < 20) {
        console.log('[ERRO] O parâmetro de desenho deve ser ou igual a 20');
    } else {
        input.question("Deseja exibir a ampulheta preenchida [S,N]?", function (fill) {
            drawHourglass(n, fill);
            input.close();
        });

    }

});


input.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
