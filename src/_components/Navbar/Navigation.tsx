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
    <Navbar className={styles.navigation} isBlurred={false}>
      <NavbarBrand>
        <Link href="/">
          <p className="text-xl font-bold">
            {`<MattFergoda/>`}
          </p>
        </Link>
      </NavbarBrand>
      <NavbarItem>
        <Link href="/projects">Projects</Link>
      </NavbarItem>
      <NavbarItem>
        <ThemeSwitcher />
      </NavbarItem>

    </Navbar>
  );
}