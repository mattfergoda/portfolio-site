import { Button } from "@nextui-org/button";
import LightModeButton from "./LightModeButton";
import DarkModeButton from "./DarkModeButton";

interface LightDarkButtonProps {
  handleClick: () => void;
  dark: boolean;
}

/** Light Mode / Dark Mode switching button presentational component
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