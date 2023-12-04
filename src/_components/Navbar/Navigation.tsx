"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/navbar";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";
import { Link } from "@nextui-org/link";
import styles from "./styles.module.css";
import React, { SyntheticEvent, useState } from "react";

/** Navigation presentational component
 * State:
 * - isMenuOpen: Boolean for toggleable menu.
 *
 * app -> Navigation
 */

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log(e);
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Navbar
      isBordered
      className={styles.navigation}
      isBlurred={false}
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden text-black dark:text-white"
      />
      <NavbarBrand>
        <Link href="/#">
          <p className={`text-2xl font-bold ${styles.link}`}>
            {"<MattFergoda/>"}
          </p>
        </Link>
      </NavbarBrand>
      <NavbarItem>
        <Link href="/#about" className={`text-xl hidden sm:flex ${styles.link}`} onClick={handleScroll}>About</Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="/#projects" className={`text-xl hidden sm:flex ${styles.link}`} onClick={handleScroll}>Projects</Link>
      </NavbarItem>
      <NavbarItem>
        <ThemeSwitcher />
      </NavbarItem>

      <NavbarMenu >
        <NavbarMenuItem >
          <Link
            href="/#about"
            className="text-lg"
            onPress={() => setIsMenuOpen(false)}>
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem >
          <Link
            href="/#projects"
            className="text-lg"
            onPress={() => setIsMenuOpen(false)}>
            Projects
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>


    </Navbar>
  );
};