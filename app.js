const { exec } = require("child_process");
const cron = require("node-cron");

cron.schedule("*/5 * * * * *", () => {
  console.log("Running a task every 5 seconds");
  exec("python ./printHello.py", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
  });
});
