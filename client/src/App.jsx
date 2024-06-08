import React, { useState, useEffect } from "react";
import "./App.css";
import { socket } from "./socket/socket";
import Terminal, {
  ColorMode,
  TerminalInput,
  TerminalOutput,
} from "react-terminal-ui";

export default function App() {
  const [termialUIIO, setTerminalUIIO] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const handleConnect = () => {
      console.log("Connected to server");
      setIsConnected(true);
    };

    const handleDisconnect = () => {
      console.log("Disconnected from server");
      setIsConnected(false);
    };

    const handleSuccessOutput = (data) => {
      console.log(data);
      setTerminalUIIO((prev) => [
        ...prev,
        <TerminalOutput>{data}</TerminalOutput>,
      ]);
    };

    const handleErrorOutput = (data) => {
      console.log(data);
      setTerminalUIIO((prev) => [
        ...prev,
        <TerminalOutput>
          <div className="text-rose-500">{data}</div>
        </TerminalOutput>
      ]);
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("output-success", handleSuccessOutput);
    socket.on("output-error", handleErrorOutput);

    // Clean up event listeners on unmount
    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("output-success", handleSuccessOutput);
      socket.off("output-error", handleErrorOutput);
    };
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-[#252a33] relative">
        <Terminal
          name="CloudShell: The Web Terminal"
          scrollToPosition={true}
          colorMode={ColorMode.Dark}
          onInput={(terminalCommand) => {
            console.log(terminalCommand);
            setTerminalUIIO((prev) => [
              ...prev,
              <TerminalInput>{terminalCommand}</TerminalInput>,
            ]);
            socket.emit("input", terminalCommand);
          }}
        >
          {termialUIIO}
        </Terminal>
      </div>
      <div
        className={`absolute flex flex-row justify-center items-center gap-1 ${
          isConnected ? "text-emerald-400" : "text-rose-500 animate-pulse"
        } text-xs font-medium top-2 right-2 px-3 py-1 border rounded-full ${
          isConnected ? "border-emerald-400" : "border-rose-500"
        }`}
      >
        <div
          className={`w-1.5 h-1.5 rounded-full ${
            isConnected ? "bg-emerald-400" : "bg-rose-500"
          }`}
        ></div>
        {isConnected?"Connected":"Disconnected"}
      </div>
    </>
  );
}
