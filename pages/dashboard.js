import { useEffect } from "react";

import { useAuth } from "@/lib/auth";

import { useRouter } from "next/router";

const Dashboard = () => {
  const auth = useAuth();
  const router = useRouter();
  const { user } = auth;

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <div>
      <h1>Profile</h1>
      <div>
        {auth?.user && <button onClick={() => auth.signout()}>SingOut</button>}
        {/* <button onClick={() => auth.signout()}>SingOut</button>s */}
      </div>
    </div>
  );
};
export default Dashboard;
