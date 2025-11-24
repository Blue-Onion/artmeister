"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useRef } from "react"
import { useMediaQuery }
    from "react-responsive"

const Hero = () => {
    const videoRef = useRef(null)
    const isMobile = useMediaQuery({ maxWidth: 768 })

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        const heroSplit = new SplitText(".title", {
            type: "chars, words",
        })

        const paragraphSplit = new SplitText(".subtitle", {
            type: "lines",
        })

        // Apply text-gradient class once before animating
        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        })



        const video = videoRef.current
        if (!video) return

        const setupScrollTrigger = () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".video",
                    start: "top top",
                    endTrigger: "#feature",
                    end: "bottom bottom",
                    scrub: true,
                    pin: true,
                }
            })
                .fromTo(video, { currentTime: 0 }, { currentTime: video.duration || 1 })
        }

        if (video.readyState >= 1) {
            setupScrollTrigger()
        } else {
            video.onloadedmetadata = setupScrollTrigger
        }

    }, [])

    return (
        <>
            <section id='hero'>
                <h1 className="title text-8xl md:text-[12vw] title  relative z-10">ArtMaster </h1>
            </section>
            <div className="video absolute inset-0 w-full h-full z-[-1]">
                <video
                    src="/videos/output.mp4"
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="auto"
                    ref={videoRef}
                />
            </div>
        </>
    )
}

export default Hero