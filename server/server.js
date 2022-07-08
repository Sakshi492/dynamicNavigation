const express = require("express");
const cors = require("cors");
const server = express();

// Extract args
const args = process.argv.slice(2);
const rLoginDelayOverride = args[0];
const rLoginSuccessOverride = args[1];
const rFetchExperimentsDelayOverride = args[2];
const rFetchExperimentsSuccessOverride = args[3];
const rSubmitSelectionDelayOverride = args[4];
const rSubmitSelectionSuccessOverride = args[5];

// Random value helper
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Uuid generater
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Available routes
const screensInExperiment = ["screenB1", "screenB2", "screenB3", "noScreenB"];

// CORS
server.use(cors());

// Start server
server.listen(3000, () => {
  console.log("Server listening on port 3000");
  console.log(
    `\nrLogin:            ${rLoginDelayOverride} / ${rLoginSuccessOverride}`
  );
  console.log(
    `rFetchExperiments: ${rFetchExperimentsDelayOverride} / ${rFetchExperimentsSuccessOverride}`
  );
  console.log(
    `rSubmitSelection:  ${rSubmitSelectionDelayOverride} / ${rSubmitSelectionSuccessOverride}`
  );
  console.log(`\nUsage:\n  node server.js x y u v a b\n`);
  console.log(`  x - override for rLogin delay`);
  console.log(`  y - override for rLogin success`);
  console.log(`  u - override for rFetchExperiments delay`);
  console.log(`  v - override for rFetchExperiments success`);
  console.log(`  a - override for rSubmitSelection delay`);
  console.log(`  b - override for rSubmitSelection success`);
});

// Resolving helper
function processRequest(
  type,
  result,
  delayOverride,
  successOverride,
  successBlock
) {
  const delaySeconds =
    typeof delayOverride === "string"
      ? parseInt(delayOverride)
      : getRandomInt(16);
  const success =
    typeof successOverride === "string"
      ? successOverride === "true"
        ? true
        : false
      : getRandomInt(1) === 1;
  console.log(
    `==> Handling '${type}' with delay of '${delaySeconds}' seconds and success '${
      success ? "true" : "false"
    }'`
  );
  setTimeout(() => {
    if (success) {
      successBlock();
    } else {
      result.status(500).send("Something went wrong");
    }
  }, delaySeconds * 1000);
}

// Configure rLogin
server.get("/rLogin", (request, result, next) => {
  processRequest(
    "/rLogin",
    result,
    rLoginDelayOverride,
    rLoginSuccessOverride,
    () => {
      result.json({ sessionId: uuidv4() });
    }
  );
});

// Configure rFetchExperiments
server.get("/rFetchExperiments", (request, result, next) => {
  processRequest(
    "/rFetchExperiments",
    result,
    rFetchExperimentsDelayOverride,
    rFetchExperimentsSuccessOverride,
    () => {
      const assignedExperiment = getRandomInt(screensInExperiment.length);
      result.json(screensInExperiment[assignedExperiment]);
    }
  );
});

// Configure rSubmitSelection
server.get("/rSubmitSelection", (request, result, next) => {
  processRequest(
    "/rSubmitSelection",
    result,
    rSubmitSelectionDelayOverride,
    rSubmitSelectionSuccessOverride,
    () => {
      result.status(200).send();
    }
  );
});
