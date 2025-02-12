interface Affected {
  package: {
    name: string;
    ecosystem: string;
  };
  versions: string[];
}

interface Vulnerabilities {
  id: string;
  summary: string;
  severity: string;
  modified: string;
  published: string;
  schema_version: string;
  affected: Affected[];
}

export interface Vulnerability {
  name: string;
  version: string;
  vulnerabilities: Vulnerabilities[];
}
