import React from "react";
import { Image } from "@nextui-org/react";

export default function Hero() {
    return (
        <div className="Hero flex h-screen w-full justify-center">
            <Image
                width={300}
                alt="NextUI hero Image"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
        </div>
    );
}
