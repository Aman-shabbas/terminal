const runEcho = function (args) {
  const message = args.join(" ").replaceAll("\"", "");
  return message;
}

const runCommand = function (commandString) {
  const [command, ...args] = commandString.split(" ");
  switch (command) {
    case "echo": return runEcho(args);
  }
}

const runShell = function () {
  const promptMessage = "amanshabbas@Amans-MacBook-Pro ~ %"
  while (true) {
    const commandString = prompt(promptMessage)
    const executionMessage = runCommand(commandString);
    console.log(executionMessage);
  }
}

runShell()