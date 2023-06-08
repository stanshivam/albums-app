import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AlbumsList from './AlbumsList';
import '@testing-library/jest-dom/extend-expect';
import { useRouter } from 'next/navigation';


jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
  }));

describe('AlbumsList', () => {
  const albums = [
    { id: 1, title: 'Album 1', userId: 1 },
    { id: 2, title: 'Album 2', userId: 2 },
    { id: 3, title: 'Album 3', userId: 3 },
  ];

  const photosUrl = '/photos/';

  it('renders the list of albums', () => {
    (useRouter as jest.Mock).mockReturnValueOnce({
      push: jest.fn(),
    });

    const { getByText } = render(<AlbumsList albums={albums} photosUrl={photosUrl} />);
    albums.forEach((album) => {
      const albumTitleElement = getByText(album.title);
      expect(albumTitleElement).toBeInTheDocument();
    });
  });

  it('navigates to the correct URL when an album is clicked', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValueOnce({
      push: pushMock,
    });

    const { getByText } = render(<AlbumsList albums={albums} photosUrl={photosUrl} />);

    const albumElement = getByText(albums[1].title);
    fireEvent.click(albumElement);

    expect(pushMock).toHaveBeenCalledWith(`${photosUrl}${albums[1].id}`);
  });
});
