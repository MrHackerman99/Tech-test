import vulnerabilities from "../data/vulnerabilitiesData";
import { Link } from "react-router-dom";
import Button from "./Button";

function VulnerabilityDetail() {
  const vulnerabilityId = Number(window.location.pathname.split("/").pop());
  const vulnerability = vulnerabilities.find((v) => v.id === vulnerabilityId);

  if (!vulnerability) {
    return (
      <div>
        <p>Vulnerability not found.</p>
        <Button>
          <Link to="/">Back</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h1>{vulnerability.title}</h1>
      <p>{vulnerability.description}</p>
      <Button>
        <Link to="/">Back</Link>
      </Button>
    </div>
  );
}

export default VulnerabilityDetail;
