import {
  platform as _platform,
  arch,
  hostname as _hostname,
  cpus,
  totalmem,
  freemem,
  uptime as _uptime,
  type,
  release,
  networkInterfaces
} from "os";
import { writeFile } from "fs/promises";

async function getSystemInfo() {
  const cpuInfo = cpus() || [];

  const systemInfo = {
    platform: _platform(),
    architecture: arch(),
    hostname: _hostname(),
    cpuModel: cpuInfo.length > 0 ? cpuInfo[0].model : "Unknown",
    cpuCores: cpuInfo.length,
    totalMemory: `${(totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
    freeMemory: `${(freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
    uptime: `${(_uptime() / 3600).toFixed(2)} hours`,
    osType: type(),
    osRelease: release(),
    network: networkInterfaces(),
  };

  return systemInfo;
}

async function saveSystemInfo() {
  try {
    const systemInfo = await getSystemInfo();

    // Format text output
    const output = Object.entries(systemInfo)
      .map(([key, value]) =>
        typeof value === "object" ? `${key}: ${JSON.stringify(value, null, 2)}` : `${key}: ${value}`
      )
      .join("\n");

    // Write text file
    await writeFile("system-info.txt", output);
    console.log("✅ System info saved to system-info.txt");

    // Write JSON file
    await writeFile("system-info.json", JSON.stringify(systemInfo, null, 2));
    console.log("✅ System info saved to system-info.json");

    // Print to console
    console.log("\n📋 System Information:\n");
    console.log(output);
  } catch (err) {
    console.error("❌ Error writing file:", err);
  }
}

saveSystemInfo();
