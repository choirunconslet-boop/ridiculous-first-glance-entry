// Ridiculous at First Glance, Real by the Second
// Writes one sentence (<= 200 characters) pitching a bizarre startup
// idea to /output/entry.txt. Pure Node stdlib, no network, no reads
// outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "We sell funerals for dead houseplants: grieving owners pay $29 for a tiny coffin, a eulogy, and a certificate, then return with the next fern, because tossing one in the bin feels like murder.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
