"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import { message } from "antd";

function ProtectedRoute(props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated" && session?.user) {
    return (
      <>
        <p>Email: {session.user.email}</p>
        <p>Name: {session.user.name}</p>
        {props.children}
      </>
    );
  }

  return null;
}

export default ProtectedRoute;