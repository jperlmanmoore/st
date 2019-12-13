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




// export default class YouTubePlayer extends React.Component {
//     state ={
//         youtubeId: "https://www.youtube.com/embed/f6dnI1WsFrA"
//     }

//     render() {
//         return (
//             <div
//                 className="video"
//                 style={{
//                     position: "relative",
//                     paddingBottom: "56.25%" /* 16:9 */,
//                     paddingTop: 25,
//                     height: 0
//                 }}
//             >
//                 <iframe
//                     title="youtube"
//                     style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         width: "100%",
//                         height: "100%"
//                     }}
//                     src={this.state.youtubeId}
//                     frameBorder="0"
//                 />
//             </div>
//         );
//     };
// }
//   https://medium.com/@kevinsimper/full-width-youtube-embed-with-react-js-responsive-embed-509de7e7c3bf