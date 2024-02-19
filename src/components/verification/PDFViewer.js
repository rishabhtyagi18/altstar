import React from 'react';

const PDFViewer = ({ url }) => (
  <div>
    <iframe src={url} width="100%" height="600px" title="PDF Viewer" allowfullscreen webkitallowfullscreen frameborder="0" />
  </div>
);

export default PDFViewer;
