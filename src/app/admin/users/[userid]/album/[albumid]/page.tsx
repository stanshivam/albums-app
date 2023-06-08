"use client";
import { useEffect, useState } from "react";
import { superFetch } from "@/utils/superFetch";
import { BasicImageList } from "../../../../components/BasicImageList";
import { Breadcrumbs } from "../../../../components/Breadcrumbs";
import { useRouter } from "next/navigation";
import { endPoints } from "@/utils/endPoints";

interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface AlbumPhotosProps {
  params: {
    albumid: string;
    userid: string;
  };
}

const AlbumPhotos: React.FC<AlbumPhotosProps> = ({
  params,
}: {
  params: { albumid: string, userid: string; };
}) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await superFetch(
          "get",
          endPoints.ALBUMS.albumDetails(params.albumid)
        );
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, [params.albumid]);

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
            onClick: () => {
              router.push(`/admin/users/${params.userid}/albums`);
            },
          },
          {
            title: "Album Photos",
            href: "/admin/users",
          }
        ]}
      />
      <BasicImageList imageData={photos} />
    </div>
  );
};

export default AlbumPhotos;
