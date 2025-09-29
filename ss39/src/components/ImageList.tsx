import type { ImageData } from "../types";

interface Props {
  images: ImageData[];
  onDelete: (id: string) => void;
}

export default function ImageList({ images, onDelete }: Props) {
  return (
    <div>
      {images.map((img) => (
        <div key={img.public_id} style={{ marginBottom: "10px" }}>
          <img src={img.url} alt={img.description} width={200} />
          <p>{img.description}</p>
          <button onClick={() => onDelete(img.public_id)}>Xoá</button>
        </div>
      ))}
    </div>
  );
}
