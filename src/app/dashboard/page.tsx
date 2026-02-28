import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";

type UserPayload = {
  id: string;
  username: string;
  email: string;
};

export default async function Dashboard() {
  const user: UserPayload | null = await getCurrentUser();

  if (!user) {
    redirect("/dashboard/login");
  }

  return (
    <div> 
      <h1>Welcome, {user.username}</h1>
    </div>
  );
}

