import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const GradeMaterial = ({ match, subject }) => {
  const [downloadCount, setDownloadCount] = React.useState(0);

  const handleDownloadClick = () => {
    setDownloadCount(downloadCount + 1);
  };

  return (
    <div className="grade-material-page">
      <h2>{subject} Materials</h2>
      <p>Download count: {downloadCount}</p>
      <ul>
        <li>
          <Link to={`${match.url}/learning-resources`}>Learning Resources</Link>
        </li>
        <li>
          <Button variant="primary" onClick={handleDownloadClick}>
            Download Note
          </Button>
        </li>
        <li>
          <Button variant="secondary">Download Recording</Button>
        </li>
      </ul>
    </div>
  );
};

export default GradeMaterial;