"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

import "./Navbar.css";
import ProtectedRoute from "@/app/authenticated/page";
import ProfileDropDown from "@/components/ProfileDropDown/ProfileDropDown";
import { Dropdown, Space, message, Button, Modal, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

export default function Navbar() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const showMenuModal = () => {
    setIsModalOpen(true);
  };
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const [formData, setFormData] = useState({
    email: session?.user.email,
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const router = useRouter();
  const [error, setError] = useState("");

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
      password
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.push("/dashboard");
    } else {
      setError("");
    }
  };

  const handleLogout = () => {
    signOut();
  };

  const confirmLogout = () => {
    message.success("You have successfully logged out.");
    handleLogout();
  };


  const items = [
    {
      label: (
        <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
          My Account
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
          Upgrade
        </a>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <button onClick={() => signOut()}>
          Logout
        </button>
      ),
      key: '3',
    },
  ];

  const extractNameFromEmail = (email) => {
    if (!email) return "";
    const namePart = email.split("@")[0];
    return namePart
      .split(".")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/Connector", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: session.user.email }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setFormData(data.body);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [session]);

  console.log(formData.email);
  if (status === "authenticated") {
    console.log(formData.email);
  }
  else{
    console.log("You are not logged in. Please sign in.");
  }


  const menuItems = [
    { key: '1', label: <a href="/chatbot">Chat</a> },
    { key: '2', label: <a href="/pricing">Pricing</a> },
    { key: '3', label: <a href="/about">About Us</a> },
    ...(status !== "authenticated"
      ? [
          {
            key: '4',
            label: (
              <Button
                type="primary"
                onClick={showModal}
                style={{ width: '100%' }}
              >
                Login
              </Button>
            ),
          },
        ]
      : [
        {key: '5', label: (
          <div className="profile-dropdown">
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={['click']}
                  style={{zIndex: 1000, }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <div className="profile-name">
                        {extractNameFromEmail(session.user.email)}
                      </div>
                      <div className="svg-icon">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16"> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--ic"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"
                          />
                        </svg>
                      </div>
                    </Space>
                  </a>
                </Dropdown>
              </div>
        )
        },
      ]),
  ];

  return (
    <>
    {/* <ProtectedRoute> */}
    <div className="navbarr">
      <div className="navbarr-outer">
        <div className="navbarr-inner">
          <a href="/" className="navbarr-logo">
            Trippo 
          </a>
          <div className="hamburger-menu">
            <Dropdown
              menu={{ items: menuItems }}
              trigger={['click']}
              placement="bottomRight"
            >
              <Space>
              <Button
                type="text"
                icon={<MenuOutlined />}
                className="menu-icon"
              />
              </Space>
            </Dropdown>
          </div>
          <div className="navbarr-menu">
            <a href="/chatbot" className="navbarr-menu-item">
              Chat
            </a>
            <a href="/pricing" className="navbarr-menu-item">
              Pricing
            </a>
            <a href="/about" className="navbarr-menu-item">
              About Us
            </a>
            {status === "authenticated" && session?.user ? (
              <div className="profile-dropdown">
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={['click']}
                  style={{zIndex: 1000, }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <div className="profile-name">
                        {extractNameFromEmail(session.user.email)}
                      </div>
                      <div className="svg-icon">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16"> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--ic"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"
                          />
                        </svg>
                      </div>
                    </Space>
                  </a>
                </Dropdown>
              </div>
            ) : (
              <div className="navbarr-menu-item"> 
              <Button type="primary" onClick={showModal}>
                Login
              </Button>
              <Modal title="Trippo" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <div className="main">
                  <div className="container">
                    <div className="title">Log into your account</div>
                    {/* <div className="title-para" style={{display: 'flex', justifyContent: 'center'}}>Log into your account</div> */}
                    {/* <div className="form-container"> */}
                      <form onSubmit={handleSubmit}>
                        <div className="username">
                          <input
                            type="text"
                            placeholder="Email"
                            required
                            className="userName"
                          ></input>
                        </div>
                        <div className="username">
                          <input
                            type="password"
                            placeholder="Password"
                            required
                            className="password"
                          ></input>
                        </div>
                        <div className="login">
                          <button type="submit" className="button">Login</button>
                        </div>
                        <p className="error">{error && error}</p>
                      </form>
                    {/* </div> */}
                    <div className="or">or</div>
                    <div className="login-with-google">
                      <button
                        onClick={async () => {
                          await signIn("google");
                        }}
                        className="google"
                      >
                        <FcGoogle style={{ marginRight: ".5rem" }} />
                        Login with Google
                      </button>
                    </div>
                  </div>
                </div>

              </Modal>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    {/* </ProtectedRoute> */}
    </>
  );
}