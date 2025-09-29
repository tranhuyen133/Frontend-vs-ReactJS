import type { ImageData } from "../types";

interface Props {
  image: ImageData;
}

export default function ThumbnailView({ image }: Props) {
  return (
    <div>
      <img src={image.url} alt={image.description} width={100} />
      <p>{image.description}</p>
    </div>
  );
}
