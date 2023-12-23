"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarItem
} from "@nextui-org/navbar";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";
import { Link } from "@nextui-org/link";
import styles from "./styles.module.css";

/** Navigation presentational component
 *
 * app -> Navigation
 */

export default function Navigation() {

  return (
    <Navbar
      isBordered
      isBlurred={false}
      className={styles.navigation}>

      <NavbarBrand>
        <Link href="/#">
          <p className={`text-2xl ${styles.link}`}>
            {"<MattFergoda/>"}
          </p>
        </Link>
      </NavbarBrand>

      <NavbarItem>
        <Link href="/#about" className={`text-xl hidden sm:flex ${styles.link}`}>About</Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="/#projects" className={`text-xl hidden sm:flex ${styles.link}`}>Projects</Link>
      </NavbarItem>
      <NavbarItem>
        <ThemeSwitcher />
      </NavbarItem>

    </Navbar>
  );
};