const runEcho = function (args) {
  if (args.join(" ") === "shrutika") {
    return "idiot bosale"
  }
  if (args.join(" ") === "aman") {
    return "***mandan poda pull vala ninnk buddhi iill stupid mad bavlat murkh mand pagal*** ";
  }
  if (args.join(" ") === "sujoy") {
    return "***aman ka chamcha*** ";
  }
  if (args.join(" ") === "anushri" || args.join(" ") === "crunchi") {
    return "crunchi"
  }
  return args.join(" ");
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