import React, { useEffect } from 'react';

const InstagramEmbed = ({ profileUrl, iframelyUrl }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//iframely.net/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="iframely-embed">
      <div
        className="iframely-responsive"
        style={{ height: '140px', paddingBottom: 0 }}
      >
        <a href={profileUrl} data-iframely-url={iframelyUrl}></a>
      </div>
    </div>
  );
};

export default InstagramEmbed;