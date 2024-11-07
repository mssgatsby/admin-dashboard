import { Button, Input, Textarea } from "@material-tailwind/react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../utils/axios";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function EditPost() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { id } = useParams();

  const getPost = () => api.get(`/posts/${id}`).then((res) => res.data);
  const { data: post, isLoading, isError } = useQuery("postEdit", getPost);

  const getUser = () => api.get(`/users/${id}`).then((res) => res.data);
  const {
    data: user,
    isLoading: userLoading,
    isError: userError,
  } = useQuery("user", getUser);

  if (isLoading || userLoading) return <p>Loading...</p>;
  if (isError || userError) return <p>Error loading data.</p>;

  // Set form values once post data is available
  useEffect(() => {
    if (post) {
      setValue("title", post.title);
      setValue("image", post.image);
      setValue("body", post.body);
    }
  }, [post, setValue]);

  const submitData = (data) => {
    return api.put(`/posts/${id}`, data);
  };

  const mutation = useMutation({ mutationFn: submitData });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const date = {
      ...data,
      createdAt: post.createdAt, // Keep original createdAt
      userId: user.id,
    };
    mutation.mutate(date, {
      onSuccess: () => {
        toast.success("Post updated!");
        navigate("/allposts");
      },
    });
  };

  return (
    <>
      <h1 className="m-5">Edit Post</h1>
      <form
        className="flex gap-2 m-5 flex-wrap"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          label="Title"
          defaultValue={post.title}
          {...register("title", {
            required: "Title is required",
            maxLength: 100,
          })}
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <Input
          type="text"
          label="Image"
          defaultValue={post.image}
          {...register("image", { required: "Image URL is required" })}
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        <Textarea
          variant="outlined"
          label="Body"
          defaultValue={post.body}
          {...register("body", { required: "Body is required" })}
        />
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}

        <Button type="submit" disabled={mutation.isLoading}>
          Update
        </Button>
      </form>
    </>
  );
}
