import React from 'react';
import { render } from '@testing-library/react';
import { BasicImageList, BasicImageListProps } from '../BasicImageList';
import '@testing-library/jest-dom/extend-expect';

describe('BasicImageList', () => {
  const imageData: BasicImageListProps['imageData'] = [
    {
      albumId: 1,
      id: 1,
      title: 'Image 1',
      url: 'https://example.com/image1.jpg',
      thumbnailUrl: 'https://example.com/image1-thumbnail.jpg',
    },
    {
      albumId: 1,
      id: 2,
      title: 'Image 2',
      url: 'https://example.com/image2.jpg',
      thumbnailUrl: 'https://example.com/image2-thumbnail.jpg',
    },
    // Add more image data as needed
  ];

  it('renders the correct number of images', () => {
    const { getAllByRole } = render(<BasicImageList imageData={imageData} />);
    const images = getAllByRole('img');
    expect(images).toHaveLength(imageData.length);
  });

  it('displays the correct image alt text', () => {
    const { getAllByRole } = render(<BasicImageList imageData={imageData} />);
    const images = getAllByRole('img');

    imageData.forEach((image, index) => {
      expect(images[index]).toHaveAttribute('alt', image.title);
    });
  });
});
