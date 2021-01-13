import MoviePic from '../../assets/MoviePic.png';

function Background() {
  var backgroundStyle = {
    height: "43vh",
    width: "100vw",
    opacity: 0.8,
    backgroundImage: `url(${MoviePic})`
  };

  return (
    <div style={backgroundStyle}>
    </div>
  );
}

export default Background;
