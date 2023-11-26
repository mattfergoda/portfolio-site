import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from "@nextui-org/link";

/** Footer presentational component
 *
 * Home -> Footer
 */

export default function Footer() {
    return (
        <footer className="container mx-auto max-w-7xl py-12 px-1">
            <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-sm text-default-400">
                    ©2023 Matt Fergoda. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4 my-4">
                        <Link href="https://github.com/mattfergoda" target="_blank">
                            <GitHubIcon fontSize="large" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/matt-fergoda/" target="_blank">
                            <LinkedInIcon fontSize="large" />
                        </Link>
                        <Link href="/resume.pdf" download>
                            <DescriptionIcon fontSize="large" />
                        </Link>
                    </div>
            </div>
        </footer>
    );
}