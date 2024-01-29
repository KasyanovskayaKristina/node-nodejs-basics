import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const path = "./files/script.js";
  const url = new URL(path, import.meta.url);

  const childProcess = fork(url, args, { silent: true });
  childProcess.on("error", (error) => {
    console.error("Child process error:", error.message);
  });

  childProcess.on("exit", (code, signal) => {
    if (code !== 0) {
      console.error(
        `Child process exited with code ${code} and signal ${signal}`
      );
    } else {
      console.log("Child process exited successfully");
    }
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess();
