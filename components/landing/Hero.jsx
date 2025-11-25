"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useRef } from "react"
import { useMediaQuery }
    from "react-responsive"
import { Button } from "../ui/button"

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


        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        })
        gsap.from(paragraphSplit.lines, {
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
            <section id='hero' className="noisy container mx-auto">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="title text-8xl md:text-[12vw] title  relative z-10">ArtMeister </h1>
                    <div className="buttons flex flex-col md:flex-row gap-5">
                        <Button variant={"art"} className="bg-black/35">
                            Explore Collection
                        </Button>
                        <Button variant={"art"}>
                            Pubish Your Art
                        </Button>
                    </div>
                </div>
                <div className="body w-full ">


                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Curated. Timeless. Unique.</p>
                            <p className="subtitle  font-bold">
                                Discover the <br />  Soul of <br /> Creativity
                            </p>
                        </div>


                    </div>
                </div>
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