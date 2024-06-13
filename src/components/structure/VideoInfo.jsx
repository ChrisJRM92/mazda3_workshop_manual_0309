import { LuCircuitBoard } from "react-icons/lu";

const VideoInfo = () => {
  return (
    <a href="/public/content/WiringDiagram.html" target="contentIframe">
      <div className="container_items">
        <p className="content_icon"><LuCircuitBoard /></p>
        <span className="content_description_1">Cableado eléctrico</span>
      </div>
    </a>
  )
}

export default VideoInfo