import axios from "axios";

type Props = {
  dependencies: Record<string, string>;
};

const corsApiUrl = "http://localhost:8089/api/dependencies-checker";

export const checkDependencyVulnerability = async ({ dependencies }: Props) => {
  try {
    const response = await axios.post(corsApiUrl, dependencies, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return response.data || {};
  } catch (error) {
    console.error("Error checking dependency vulnerability", error);
    return {};
  }
};
