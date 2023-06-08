import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface ImageData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface BasicImageListProps {
  imageData: ImageData[];
}

export const BasicImageList: React.FC<BasicImageListProps> = ({ imageData }) => {
  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} cols={5}>
      {imageData.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};


