import React from "react";
import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="max-w-5xl container m-auto min-h-screen flex items-center">

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-6">

                <Image
                    className="w-3/4 rounded-full pb-3 md:p-0"
                    alt="Photo of Matt"
                    src="/headshot_6_3_19_cropped.jpg"
                />

                <div>
                    <p className="text-5xl text-center">
                        Hi, I'm Matt. <br/><br/>
                        I'm a full stack software and ML engineer.
                    </p>
                    <br/>
                    <p className="text-2xl">
                        <br/>
                        I love digging into new technologies and finding creative solutions to tough problems.
                    </p>
                </div>
            </div>
        </div >
    );
}
