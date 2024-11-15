// server.js
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// Initial simulated memory usage (in percentage)
let memoryUsage = 50;

// Function to simulate dynamic memory usage
function getRandomMemoryUsage() {
    // Fluctuate memory usage randomly within a range (40-80%)
    const fluctuation = (Math.random() * 10 - 5); // Random change between -5% and +5%
    memoryUsage = Math.min(80, Math.max(40, memoryUsage + fluctuation)); // Keep within 40-80%
    return memoryUsage.toFixed(2);
}

// Endpoint to get memory usage data
app.get("/stats", (req, res) => {
    res.json({
        memoryUsage: getRandomMemoryUsage() // Dynamically generated memory usage
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
