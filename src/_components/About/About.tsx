import React from "react";
import { Image } from "@nextui-org/image";

/** Presentational component for the About section
 *
 * Home -> About
 */

export default function About() {
    return (
        <div id="about" className="max-w-5xl container m-auto min-h-screen flex items-center p-4">

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-6">

                <div>
                    <h1 className="text-5xl text-center text-primary">
                        About
                    </h1>
                    <p className="text-2xl p-3">
                        I'm a full-stack web developer with applied machine learning experience. <br/><br/>
                        I spent three years as a data scientist building ML models for companies in manufacturing and healthcare before deciding to become an engineering generalist. <br/><br/>
                        I enjoy working across the tech stack and leveraging my ML experience on new projects.<br/><br/>
                        In my non-engineering life, I love running in the mountains and playing music. <br/><br/>
                    </p>
                </div>

                <Image
                    className="w-3/4 rounded-full mx-auto mt-2"
                    alt="Photo of Matt running across a finish line"
                    src="/running.JPG"
                />

            </div>
        </div >
    );
}