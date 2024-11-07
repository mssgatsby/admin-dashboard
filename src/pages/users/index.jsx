import { useQuery } from "react-query";
import { api } from "../../utils/axios";
import { Card, Typography } from "@material-tailwind/react";

export default function UsersPage() {
  const getPosts = () => api.get("/posts").then((res) => res.data);

  const { data: posts, isLoading, isError } = useQuery("posts", getPosts);

  const getUsers = () => api.get("/users").then((res) => res.data);

  const { data: users } = useQuery("users", getUsers);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data.</p>;

  return (
    <>
      {users.map((user, index) => (
        <Card key={index} className="max-w-[24rem] overflow-hidden m-5 p-5">
          <Typography variant="h4" color="blue-gray">
            User number {index + 1}
          </Typography>{" "}
          <br />
          <h1>
            Name: <span className="text-blue-500">{user.name}</span>
          </h1>
          <p>
            Username: <span className="text-blue-500">{user.username}</span>
          </p>
          <p>
            Password: <span className="text-blue-500">{user.password}</span>
          </p>{" "}
          <br />
        </Card>
      ))}
    </>
  );
}
