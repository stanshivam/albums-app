"use client";
import { useEffect, useMemo, useState } from "react";
import { endPoints } from "@/utils/endPoints";
import { superFetch } from "@/utils/superFetch";
import { GridCellParams } from "@mui/x-data-grid";
import { useRouter } from 'next/navigation';
import DataTable from "../components/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  phone: number | null;
  company: string | any;
  address: string | any;
  zipcode: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "username", headerName: "Username", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "phone",
      headerName: "Contact No.",
      width: 200,
    },
    { field: "website", headerName: "Website", width: 130 },
    { field: "company", headerName: "Company", width: 200 },
    { field: "zipcode", headerName: "Zipcode", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params: GridCellParams) => (
        <div
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => {
            router.push(`/admin/users/${params.row.id}/albums`)
          }}
        >
          View Albums
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetchUsers();
  }, []);

  const getComputedUsers = useMemo(() => {
    const computeUsers = (users: User[]): User[] => {
      return users.map((el: User) => ({
        ...el,
        company: el.company?.name,
        zipcode: el.address?.zipcode,
      }));
    };

    return computeUsers;
  }, [users]);

  const fetchUsers = async () => {
    try {
      const response = await superFetch("GET", endPoints.USERS.default);
      const users = await response.json();
      setUsers(getComputedUsers(users));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div>
      <DataTable columns={columns} rows={users} />
    </div>
  );
};

export default Users;
