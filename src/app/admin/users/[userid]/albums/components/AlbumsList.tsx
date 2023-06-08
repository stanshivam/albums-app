import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";
import { Album } from "../page";
import { useRouter } from "next/navigation";

interface AlbumsListProps {
  albums: Album[];
  photosUrl: string;
}

const AlbumsList: React.FC<AlbumsListProps> = ({ albums, photosUrl }) => {
  const router = useRouter();
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {albums.map((album, index) => (
        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => {
            console.log(album.id);
            const fullURL = `${photosUrl}${album.id}`;
            router.push(fullURL);
          }}
          key={index}
        >
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={album.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default AlbumsList;
