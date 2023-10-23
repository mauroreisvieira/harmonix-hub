import spawn from "cross-spawn";

spawn.sync("npm", ["run", "build"], { stdio: "inherit" });
spawn.sync("npx", ["publish"], { stdio: "inherit" });
