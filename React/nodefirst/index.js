// import {
//   platform as _platform,
//   arch,
//   hostname as _hostname,
//   cpus,
//   totalmem,
//   freemem,
//   uptime as _uptime,
//   type,
//   release,
//   networkInterfaces
// } from "os";
// import { writeFile } from "fs/promises";

// async function getSystemInfo() {
//   const cpuInfo = cpus() || [];

//   const systemInfo = {
//     platform: _platform(),
//     architecture: arch(),
//     hostname: _hostname(),
//     cpuModel: cpuInfo.length > 0 ? cpuInfo[0].model : "Unknown",
//     cpuCores: cpuInfo.length,
//     totalMemory: `${(totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
//     freeMemory: `${(freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
//     uptime: `${(_uptime() / 3600).toFixed(2)} hours`,
//     osType: type(),
//     osRelease: release(),
//     network: networkInterfaces(),
//   };

//   return systemInfo;
// }

// async function saveSystemInfo() {
//   try {
//     const systemInfo = await getSystemInfo();

//     // Format text output
//     const output = Object.entries(systemInfo)
//       .map(([key, value]) =>
//         typeof value === "object" ? `${key}: ${JSON.stringify(value, null, 2)}` : `${key}: ${value}`
//       )
//       .join("\n");

//     // Write text file
//     await writeFile("system-info.txt", output);
//     console.log("✅ System info saved to system-info.txt");

//     // Write JSON file
//     await writeFile("system-info.json", JSON.stringify(systemInfo, null, 2));
//     console.log("✅ System info saved to system-info.json");

//     // Print to console
//     console.log("\n📋 System Information:\n");
//     console.log(output);
//   } catch (err) {
//     console.error("❌ Error writing file:", err);
//   }
// }

// saveSystemInfo();
import express from 'express';
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Query params example: /user?name=John&id=1234
app.get("/user", (req, res) => {
  const { name, id } = req.query;
  res.send(`Hello, this is ${name} with ID ${id}`);
});

// Route params example: /user/1234
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Hello, this is user with ID ${id}`);
});

// Route params example: /user/1234
app.get("/user/:id/orders", (req, res) => {
  const { id } = req.params;
  res.send(`Hello, this is order with ID ${id}`);
});

app.use('/user',(req,res,next)=>{
  const { name,role } = req.body;
  if(role === "USER"){
    req.access = "User access"
  }
  else if(role === "ADMIN"){
    req.access = "Admin access"
  } 
  else{
    req.access = "Unkown! Please login"
  }
  
  next()
})
// Body example (use POST for body)
app.post("/user", (req, res) => {
  const { id, name, username, password,role } = req.body;
  res.send(`Hello, this is ${name} (username: ${username}) -> ${req.access}`);
});


app.use("/users",(req,res,next)=>{
  console.log(req.method)
  
  next()
})

// Another route
app.get("/users", (req, res) => {
  res.send("Hello, this is users page");
});
// Another route
app.get("/", (req, res) => {
  res.send("Hello, this is Home page");

});



app.listen(port, () => {
  console.log(`Dummy app listening at http://localhost:${port}`);
});
