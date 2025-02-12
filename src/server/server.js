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

    console.log({ req: req.body });

    for (const [name, version] of Object.entries(dependencies)) {
      const response = await axios.post("https://api.osv.dev/v1/query", {
        package: {
          name,
          ecosystem: "npm",
        },
        version,
      });

      if (response?.data && response?.data?.vulnerabilities) {
        result.push({
          name,
          version,
          vulnerabilities: response?.data?.vulnerabilities,
        });
      }
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to check vulnerabilities" });
  }
});

const PORT = 8089;
app.listen(PORT, () => {
  console.log(`Server is running on PROT:http://localhost:${PORT}`);
});
