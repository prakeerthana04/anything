document.addEventListener("DOMContentLoaded", function() {

    let selectedPlant = null;

    // 🌱 Plant Care Tips Button
    document.getElementById("tipsBtn").addEventListener("click", function() {
        document.getElementById("tips").innerHTML = `
            <h2>🌱 Plant Care Tips</h2>
            <p>💧 Water plants early in the morning or late evening.</p>
            <p>🌞 Ensure 6-8 hours of sunlight daily.</p>
            <p>🌿 Trim dead leaves regularly.</p>
            <p>🌱 Use organic fertilizers for better growth.</p>
            <p>🪴 Repot plants every 6-12 months to refresh soil nutrients.</p>
            <p>🦠 Check for pests and treat with natural remedies.</p>
        `;
        document.getElementById("tips").style.display = "block";
    });

    // 📸 Analyze Image (Shows health only)
    function analyzeImage() {
        const fileInput = document.getElementById("imageUpload");
        const previewDiv = document.getElementById("imagePreview");
        const resultDiv = document.getElementById("result");

        if (fileInput.files.length === 0) {
            resultDiv.innerHTML = "⚠️ Please upload an image first!";
            return;
        }

        // Show the uploaded image preview
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            previewDiv.innerHTML = `<img src="${event.target.result}" alt="Uploaded Image" style="max-width:100%; border-radius:12px;">`;
        };
        reader.readAsDataURL(file);

        // Simulated plant data
        const plantData = [
            { name: "Neem Tree", disease: "Powdery Mildew", health: "🔴 Unhealthy" },
            { name: "Aloe Vera", disease: "Leaf Spot", health: "🔴 Unhealthy" },
            { name: "Rose Plant", disease: "No Disease", health: "🟢 Healthy" },
            { name: "Mango Tree", disease: "Anthracnose", health: "🔴 Unhealthy" },
            { name: "Basil Plant", disease: "No Disease", health: "🟢 Healthy" }
        ];

        // Select a random plant
        selectedPlant = plantData[Math.floor(Math.random() * plantData.length)];

        // Display health status only
        setTimeout(() => {
            resultDiv.innerHTML = `<h2>${selectedPlant.health}</h2>`;
            document.getElementById("plantNameBtn").disabled = false;
            document.getElementById("diseaseBtn").disabled = false;
        }, 2000);
    }

    // 🌱 Show Plant Name
    document.getElementById("plantNameBtn").addEventListener("click", function() {
        document.getElementById("plantName").innerHTML = `<h2>🌿 Plant: ${selectedPlant.name}</h2>`;
        document.getElementById("plantName").style.display = "block";
    });

    // 🦠 Show Disease
    document.getElementById("diseaseBtn").addEventListener("click", function() {
        document.getElementById("disease").innerHTML = `<p>🦠 Disease: ${selectedPlant.disease}</p>`;
        document.getElementById("disease").style.display = "block";
    });

    // 🧹 Clear Button
    document.getElementById("clearBtn").addEventListener("click", function() {
        location.reload();
    });

    // Expose function
    window.analyzeImage = analyzeImage;
});
