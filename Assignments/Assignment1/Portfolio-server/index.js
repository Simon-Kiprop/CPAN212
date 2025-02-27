const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

const resumeData = {
    overview: "Motivated Computer Programming and Analysis student...",
    education: [
        {
            degree: "Advanced Diploma - Computer Programming and Analysis",
            institution: "Humber Polytechnic, Etobicoke",
            year: "Jan 2024 – Aug 2026"
        }
    ],
    experience: [
        {
            title: "IT Technician",
            company: "Eldoret Mozart, Kenya",
            year: "2022 – 2023",
            description: "Managed computer hardware and software setups..."
        }
    ],
    projects: [
        {
            title: "Weather Application Project",
            description: "Built a React app fetching weather data..."
        }
    ]
};

// API Endpoints
app.get("/getOverview", (req, res) => {
    res.json(resumeData.overview);
});

app.get("/getEdu", (req, res) => {
    res.json(resumeData.education);
});

app.get("/getExp", (req, res) => {
    res.json(resumeData.experience);
});

app.get("/getProjects", (req, res) => {
    res.json(resumeData.projects);
});

// Contact Form Endpoint
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log("Received Contact Form Submission:", { name, email, message });

    // Send success response
    res.json({ success: true, message: "Message received!" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
