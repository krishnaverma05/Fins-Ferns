document.addEventListener("DOMContentLoaded", () => {
    // Mock sensor data (replace with actual data fetching)
    const sensorData = {
        temperature: 24.5,
        humidity: 60,
        ph: 6.8,
        waterLevel: 15,
        photoUrl: "https://via.placeholder.com/300"
    };

    // Update sensor data on the page
    document.getElementById("temperature").innerText = sensorData.temperature;
    document.getElementById("humidity").innerText = sensorData.humidity;
    document.getElementById("ph").innerText = sensorData.ph;
    document.getElementById("water-level").innerText = sensorData.waterLevel;
    document.getElementById("live-photo").src = sensorData.photoUrl;

    // Control buttons
    document.getElementById("fan-control").addEventListener("click", () => {
        // Toggle fan (send command to backend)
        alert("Fan toggled!");
    });

    document.getElementById("grow-light-control").addEventListener("click", () => {
        // Toggle grow light (send command to backend)
        alert("Grow light toggled!");
    });

    document.getElementById("humidifier-control").addEventListener("click", () => {
        // Toggle humidifier (send command to backend)
        alert("Humidifier toggled!");
    });
});
