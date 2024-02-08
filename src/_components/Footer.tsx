import Icons from './Icons';

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
                <Icons />
            </div>
        </footer>
    );
}