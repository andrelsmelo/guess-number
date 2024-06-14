'use client'

import Button from "@/components/Button";
import { useState } from "react";

const Never = () => {
    const [iframe, setIframe] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");

    const videoLinks = [
        "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
        "https://www.youtube.com/embed/Cf97SV0zMi?autoplay=1&t=50",
    ];

    const getRandomVideo = () => {
        const randomIndex = Math.floor(Math.random() * videoLinks.length);
        return videoLinks[randomIndex];
    };

    const handleClick = () => {
        setVideoSrc(getRandomVideo());
        setIframe(true);
    };

    return (
        <main className="relative">
            <Button variant="secondary" className="fixed text-[10px] right-0 top-0" onClick={handleClick}>
                ?
            </Button>
            {iframe && (
                <iframe
                    className="fixed inset-0 w-full h-full bg-black z-50"
                    src={videoSrc}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </main>
    );
}

export default Never;