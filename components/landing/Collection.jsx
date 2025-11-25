"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const Collection = () => {
    const containerRef = useRef(null)
    const slideRefs = useRef([])

    const slideData = [
        { title: "Ethereal Dreams", img: "/images/slider-image/1.png" },
        { title: "Urban Symphony", img: "/images/slider-image/2.png" },
        { title: "Silent Whispers", img: "/images/slider-image/3.png" },
        { title: "Abstract Reality", img: "/images/slider-image/1.png" },
        { title: "Vivid Emotions", img: "/images/slider-image/3.png" }
    ]

    let isAnimating = false;
    let frontSliderIndex = 0;

    const handleUpScroll = () => {
        console.log("scrolling up")
        // add slide animations here
    }

    const handleDownScroll = () => {
        console.log("scrolling down")
        // add slide animations here
    }

    const handleSlideChange = (direction) => {
        if (isAnimating) return;
        isAnimating = true;

        if (direction === "up") handleUpScroll()
        if (direction === "down") handleDownScroll()

        setTimeout(() => { isAnimating = false }, 1200)
    }

    useGSAP(() => {
        const container = containerRef.current
        const slides = slideRefs.current

        if (!container || slides.length === 0) return;

        // SplitText
        slides.forEach((slide) => {
            const title = slide.querySelector(".slide-title")
            new SplitText(title, { type: "words", mask: "words" })
        })

        // Initial GSAP positioning
        slides.forEach((slide, i) => {
            gsap.set(slide, {
                y: -15 + 15 * i + "%",
                z: 15 * i,
                opacity: 1
            })
        })

        // Wheel events
        let wheelAcc = 0;
        const wheelThreshold = 100;
        let isWheelActive = false;

        const wheelHandler = (e) => {
            e.preventDefault();
            if (isAnimating || isWheelActive) return;

            wheelAcc += Math.abs(e.deltaY);
            if (wheelAcc >= wheelThreshold) {
                wheelAcc = 0;
                isWheelActive = true;

                const direction = e.deltaY > 0 ? "down" : "up"
                handleSlideChange(direction)

                setTimeout(() => (isWheelActive = false), 1200)
            }
        }

        container.addEventListener("wheel", wheelHandler, { passive: false })

        // Touch events
        let startY = 0;
        let isTouchActive = false;
        const touchThreshold = 50;

        const touchStart = (e) => {
            if (isAnimating || isTouchActive) return;
            startY = e.touches[0].clientY;
        }

        const touchEnd = (e) => {
            const endY = e.changedTouches[0].clientY;
            const deltaY = startY - endY;

            if (Math.abs(deltaY) > touchThreshold) {
                isTouchActive = true;

                const direction = deltaY > 0 ? "down" : "up"
                handleSlideChange(direction)

                setTimeout(() => (isTouchActive = false), 1200)
            }
        }

        container.addEventListener("touchstart", touchStart)
        container.addEventListener("touchend", touchEnd)

        // Cleanup on unmount
        return () => {
            container.removeEventListener("wheel", wheelHandler)
            container.removeEventListener("touchstart", touchStart)
            container.removeEventListener("touchend", touchEnd)
        }
    }, [])

    return (
        <section id="collection" ref={containerRef}>
            <div className="slider">
                {slideData.map((slide, index) => (
                    <div
                        className="slide"
                        key={index}
                        ref={(el) => (slideRefs.current[index] = el)}
                    >
                        <img src={slide.img} className="slide-image" alt={slide.title} />
                        <h2 className="slide-title">{slide.title}</h2>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Collection
