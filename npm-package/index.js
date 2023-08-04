#!/usr/bin/env node
const { existsSync, readFileSync, writeFileSync } = require("fs");
const { execSync } = require("child_process");
const { join } = require("path");

const hookTemplates = {
  "pre-push": "./data/pre-push.txt",
};

function createHook(hookType) {
  const destDirpath = join(process.cwd(), ".git/hooks");
  if (!existsSync(destDirpath)) {
    console.log("Command should be run in the root directory of the git repository");
    return;
  }

  const sourceFile = join(__dirname, hookTemplates[hookType]);
  const destinationFile = join(destDirpath, hookType);

  try {
    const sourceContent = readFileSync(sourceFile, "utf8");

    try {
      writeFileSync(destinationFile, sourceContent);
      const command = `chmod +x ${destinationFile}`;
      execSync(command);

      console.log("Successfully made hook file an executable");
      console.log(`Hook file '${destinationFile}' successfully populated.`);
    } catch (error) {
      console.error("Error: destination file not found.");
    }
  } catch (error) {
    console.error("Error: Source file not found.");
  }
}

function createAllHooks() {
  for (const hookType in hookTemplates) {
    createHook(hookType);
  }
}

createAllHooks();