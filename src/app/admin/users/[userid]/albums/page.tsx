"use client";
import { endPoints } from "@/utils/endPoints";
import { superFetch } from "@/utils/superFetch";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import AlbumsList from "./components/AlbumsList";

export interface Album {
  id: number;
  userId: number;
  title: string;
}

interface UserAlbumsProps {
  params: {
    userid: string;
  };
}

const UserAlbums: React.FC<UserAlbumsProps> = ({
  params,
}: {
  params: { userid: string };
}) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        setLoading(true);
        const response = await superFetch(
          "get",
          endPoints.ALBUMS.default(params.userid)
        );
        const data = await response.json();
        setAlbums(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [params.userid]);

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            title: "Users",
            href: "/admin/users",
            onClick: () => {
              router.push("/admin/users");
            },
          },
          {
            title: "User Albums",
            href: "/admin/users",
          },
        ]}
      />
      <h2>User Albums</h2>
      <AlbumsList photosUrl={`/admin/users/${params.userid}/album/`} albums={albums} />
    </div>
  );
};

export default UserAlbums;
