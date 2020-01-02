import React from 'react';

export default function YouTubePlayer(props) {
    return (
            <div
                className="video"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0,
                }}
            >
                <iframe
                    title="youtube"
                    style={{
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    src={props.link}
                    frameBorder="0"
                />
            </div>
        );
  };

