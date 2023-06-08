import * as React from "react";
import Image from "next/image";

interface ImageData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface BasicImageListProps {
  imageData: ImageData[];
}

export const BasicImageList: React.FC<BasicImageListProps> = ({
  imageData,
}) => {
  return (
    <div className="image-grid">
      {imageData.map((item) => (
        <Image
          key={item.id}
          src={`${item.url}`}
          alt={item.title}
          width={200}
          height={200}
        />
      ))}
    </div>
  );
};
