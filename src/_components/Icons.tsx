import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from "@nextui-org/link";

/** Icons presentational component
 *
 * { Hero, Footer } -> Icons
 */

export default function Icons() {
    return (
        <div className="flex justify-center space-x-4 my-4">
            <Link href="https://github.com/mattfergoda" target="_blank">
                <GitHubIcon fontSize="large" />
            </Link>
            <Link href="https://www.linkedin.com/in/matt-fergoda/" target="_blank">
                <LinkedInIcon fontSize="large" />
            </Link>
            <Link href="/MattFergoda_Resume.pdf" download>
                <DescriptionIcon fontSize="large" />
            </Link>
        </div>
    );
}