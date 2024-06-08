const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { spawn } = require("child_process");
const os = require("os");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Client connected");

  let shell;
  if (os.platform() === "win32") {
    shell = "powershell.exe"; // or 'cmd.exe'
  } else {
    shell = "bash";
  }


  const shellProcess = spawn(shell, shell === "bash" ? ["-i"] : [], {
    stdio: ["pipe", "pipe", "pipe"],
  });

  shellProcess.stdout.on("data", (data) => {
    console.log(data.toString());
    socket.emit("output-success", data.toString());
  });

  shellProcess.stderr.on("data", (data) => {
    console.log(data.toString());
    socket.emit("output-error", data.toString());
  });

  socket.on("input", (data) => {
    shellProcess.stdin.write(data + "\n");
  });

  socket.on("disconnect", () => {
    shellProcess.kill();
    console.log("Client disconnected");
  });
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
