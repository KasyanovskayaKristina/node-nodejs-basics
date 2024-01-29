const parseArgs = () => {
  const args = process.argv.slice(2);
  const argNames = args.filter((arg) => arg.startsWith("--"));
  const argValues = args.filter((arg) => !arg.startsWith("--"));

  if (argNames.length !== argValues.length) {
    console.error("Error: Number of argument names and values does not match.");
    return;
  }

  const result = argNames.map((arg, index) => `${arg} is ${argValues[index]}`);
  console.log(result.join(", "));
};

parseArgs();
