
const fetch = require("node-fetch");
const fs = require("fs");

async function fetchData() {
    const urls = [
        "https://raw.githubusercontent.com/your-username/history-mcq/main/data/ancient-history.json",
        "https://raw.githubusercontent.com/your-username/history-mcq/main/data/medieval-history.json",
        "https://raw.githubusercontent.com/your-username/history-mcq/main/data/modern-history.json"
    ];
    for (const url of urls) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

fetchData();
