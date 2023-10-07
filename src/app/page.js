import Main from "./components/Main";
import Row from "./components/Row";
import request from "./Request";

export default function Home() {
  return (
    <>
      <div className="">
        <Main />
        <Row rowID="1" title="Up Coming" fetchURL={request.requestUpComing} />
        <Row
          rowID="2"
          title="Now Playing"
          fetchURL={request.requestNowPlaying}
        />
        <Row rowID="3" title="Popular" fetchURL={request.requestPopular} />
        <Row rowID="4" title="Top Rated" fetchURL={request.requestTopRated} />
        <Row rowID="5" title="Trending" fetchURL={request.requestTrending} />
      </div>
    </>
  );
}
