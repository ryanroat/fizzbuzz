function fizzbuzz(end) {
  let i = 0;
  let fizz, buzz = false;
  for (i = 1; i <= end; i++) {
    fizz = i % 3;
    buzz = i % 5;
    if ((!fizz) && (!buzz)) {
      document.writeln(`fizz-buzz`);
    }
    else if (!fizz) {
      document.writeln(`fizz`);
    }
    else if (!buzz) {
      document.writeln(`buzz`);
    }
    else {
      document.writeln(i);
    }
  }
}

fizzbuzz(100);