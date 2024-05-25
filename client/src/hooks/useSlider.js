import React, { useEffect, useState } from 'react'

export default function useSlider(sliders = []) {
    const [activeSlide, setSlide] = useState(0);

    const previous = () => {

        setSlide(prev => {
            prev = prev - 1;
            return prev < 0 ? (sliders.length-1) : prev;
        })
    }
    const next = () => {
        setSlide(next => {
            next = next + 1;
            return next > (sliders.length-1)  ? 0 : next;
        })
    }
    return (
        [activeSlide, previous, next]
    )
}
