import React from "react";
import { Image } from "@nextui-org/image";

/**
 *
 */

export default function About() {
    return (
        <div id="about" className="max-w-5xl container m-auto min-h-screen flex items-center">

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-6">

                <div>
                    <h1 className="text-5xl text-center">
                        About
                    </h1>
                    <p className="text-2xl p-3">
                        I'm a full-stack web developer and machine learning engineer
                    </p>
                </div>

                <Image
                    className="w-3/4 rounded-full  mx-auto mt-10"
                    alt="Photo of Matt running across a finish line"
                    src="/running.JPG"
                />

            </div>
        </div >
    );
}