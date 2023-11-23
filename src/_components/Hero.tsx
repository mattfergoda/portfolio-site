import React from "react";
import { Image } from "@nextui-org/image";

/** Hero presentational component
 *
 * app -> Hero
 */

export default function Hero() {
    return (
        <div className="max-w-5xl container m-auto min-h-screen flex items-center">

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-6">

                <Image
                    className="w-3/4 rounded-full mx-auto mb-6"
                    alt="Photo of Matt"
                    src="/headshot_cropped.jpg"
                />

                <div>
                    <p className="text-5xl text-center">
                        Hi, I'm Matt. <br/><br/>
                        I'm a full stack software and ML engineer.
                    </p>
                    <br/>
                    <p className="text-2xl p-3">
                        <br/>
                        I love digging into new technologies and finding creative solutions to tough problems.
                    </p>
                </div>
            </div>
        </div >
    );
}
