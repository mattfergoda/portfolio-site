import {
  Navbar,
  NavbarBrand,
  NavbarItem
} from "@nextui-org/navbar";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Link } from "@nextui-org/link";

/** Navigation presentational component
 *
 * app -> Navigation
 */

export default function Navigation() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <p className="text-xl font-bold">
            {`<Matt Fergoda/>`}
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