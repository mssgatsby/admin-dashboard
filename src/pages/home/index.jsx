import { Card, Typography } from "@material-tailwind/react";

export default function HomePage() {
  return (
    <>
      <div className="mx-auto max-w-screen-md py-12">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          Welcome to the Admin Dashboard!
        </Typography>
        <Typography color="gray" className="font-normal">
          As an admin, you have access to manage the content and users within
          the system. Use the following options to keep everything running
          smoothly:
          <li>
            <b>View and manage posts:</b> Monitor, edit, and approve posts
            submitted by users.
          </li>
          <br />
          <li>
            <b>Explore Posts from Others:</b> Stay engaged with what’s happening
            around you by browsing through posts from other users. Discover new
            perspectives and connect with like-minded people.
          </li>
          <br />
          <li>
            <b>Keep track of system statistics:</b> View insights such as total
            users, posts, and activity.
          </li>
          <br />
          Feel free to explore the dashboard, and if you have any questions,
          reach out to the support team. Your efforts ensure the platform
          operates smoothly for everyone!
        </Typography>
      </div>
    </>
  );
}
