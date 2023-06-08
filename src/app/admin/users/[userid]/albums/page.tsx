"use client";
import { endPoints } from "@/utils/endPoints";
import { superFetch } from "@/utils/superFetch";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "../../../components/Breadcrumbs";

interface Album {
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

  const router = useRouter();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await superFetch(
          "get",
          endPoints.ALBUMS.default(params.userid)
        );
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [params.userid]);

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
      <ul>
        {albums.map((album) => (
          <li
            onClick={() => {
              router.push(`/admin/users/${params.userid}/album/${album.id}`);
            }}
            style={{ cursor: "pointer" }}
            key={album.id}
          >
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbums;
