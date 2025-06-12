"use client";
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = e.currentTarget.hash.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      const yOffset = -80; // height of your sticky navbar
      const y = elem.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};

export default ScrollLink;
