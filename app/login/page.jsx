"use client";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const router = useRouter();
  const [error, setError] = useState("");
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    } else {
      router.replace("/login");
    }
  }, [status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.push("/");
    } else {
      setError("");
    }
  };

  return (
    <SessionProvider session={status}>
      <div className="flex flex-col outfit items-center mesh justify-center min-h-screen mx-4">
        <div className="md:w-[50%] w-[90%] bg-white flex border-[1px] border-gray-300 flex-col p-8 rounded-3xl shadow-black/10 shadow-2xl">
          <h3 className="md:text-6xl  text-2xl text-center md:text-left text-[var(--gr)] tracking-tight font-semibold mb-2">
            Welcome to <a className="text-[var(--b)]">Trippo.ai</a>
          </h3>
          <p className="text-[var(--g)] text-center md:text-left text-md leading-5 md:text-3xl">
            Log in with credentials
          </p>
          <hr className="my-7"></hr>
          {/* <div className="flex justify-center">Log in with credentials</div> */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center">
              Email
              <input
                type="text"
                placeholder="Email"
                required
                className="flex justify-center mt-2 mb-10 bg-[#F0EDFF] w-full rounded-lg h-9 pl-3"
              />
            </div>
            <div className="flex flex-col justify-center">
              Password
              <input
                type="password"
                placeholder="Password"
                required
                className="flex justify-center mt-2 mb-2 bg-[#F0EDFF] w-full rounded-lg h-9 pl-3"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="rounded-lg bg-blue-600 text-white font-bold px-4 py-2 w-full hover:bg-blue-500"
              >
                Login
              </button>
            </div>
            {error && (
              <p className="flex justify-center text-red-500 font-bold">
                {error}
              </p>
            )}
          </form>
          <div className="flex justify-center mt-4">or</div>
          <div className="flex justify-center mt-4">
            <button
              onClick={async () => {
                await signIn("google");
              }}
              className="flex justify-center items-center border border-[#F0EDFF] bg-white rounded-lg h-10 w-full hover:border-blue-600"
            >
              <FcGoogle className="mr-2" />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}