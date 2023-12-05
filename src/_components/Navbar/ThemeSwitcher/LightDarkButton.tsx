import { Button } from "@nextui-org/button";
import LightModeButton from "./LightModeButton";
import DarkModeButton from "./DarkModeButton";
import { LightDarkButtonProps } from "@/types";


/** Light Mode / Dark Mode switching button presentational component
 *
 * Props:
 * - handleClick: called in parent.
 *
 * ThemeSwitcher -> LightDarkButton
 */

export default function LightDarkButton({ handleClick, dark }: LightDarkButtonProps) {

  return (
    <Button isIconOnly variant="light" onClick={handleClick}> {
      dark
        ? <LightModeButton />
        : <DarkModeButton />
    }
    </Button>
  );
}