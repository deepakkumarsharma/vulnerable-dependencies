import cors from "cors";
import axios from "axios";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/dependencies-checker", async (req, res) => {
  try {
    const result = [];
    const dependencies = req.body;

    for (const [name, version] of Object.entries(dependencies)) {
      if (!name || !version) continue;

      const response = await axios.post("https://api.osv.dev/v1/query", {
        package: {
          name,
        },
        version,
      });

      if (response?.data?.vulns?.length > 0) {
        result.push({
          name,
          version,
          vulnerabilities: response?.data?.vulns,
        });
      }
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Failed to check vulnerabilities" });
  }
});

const PORT = 8089;
app.listen(PORT, () => {
  console.log(`Server is running on PROT:http://localhost:${PORT}`);
});
