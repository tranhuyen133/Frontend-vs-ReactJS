import ThumbnailView from "../components/ThumbnailView";
import type { ImageData } from "../types";

export default function ThumbnailPage() {
  const mock: ImageData = {
    url: "https://via.placeholder.com/150",
    public_id: "demo",
    description: "Ảnh demo thumbnail",
  };

  return (
    <div>
      <h1>Thumbnail Page</h1>
      <ThumbnailView image={mock} />
    </div>
  );
}
