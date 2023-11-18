import { Link, Navbar, NavbarBrand, NavbarItem } from "@nextui-org/react";

/** Navigation presentational component
 *
 * app -> Navigation
 */

export default function Navigation() {
    return (
        <Navbar>
          <NavbarBrand>
            <Link href="/">Matt Fergoda</Link>
          </NavbarBrand>
          <NavbarItem>
            <Link href="/projects">Projects</Link>
          </NavbarItem>

        </Navbar>
    )
}