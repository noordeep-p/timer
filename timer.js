let input = process.argv.slice(2);

const timer = function(input) {
  for (let i = 0; i < input.length; i++) {
    if (!(input[i] < 0 || isNaN(input[i]))) {
      setTimeout(() =>
        process.stdout.write('beep'), Number(input[i] * 1000));
    }
  }
};

timer(input);