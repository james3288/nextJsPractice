import Link from "next/link";
import React from "react";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
  { title: "Dashboard", path: "/dashboard" },
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

const Links = () => {
  return (
    <div>
      {/* {links?.map((link) => {
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>;
      })} */}
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
