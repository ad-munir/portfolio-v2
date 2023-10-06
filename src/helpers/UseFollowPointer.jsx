import React, { useState, useEffect, useRef } from "react";

export function UseFollowPointer() {
    const [point, setPoint] = useState({ x: 0, y: 0 });
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({ clientX, clientY }) => {
            const element = ref.current;

            const x = clientX - element.offsetLeft - element.offsetWidth / 2;
            const y = clientY - element.offsetTop - element.offsetHeight / 2;
            setPoint({ x, y });
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [ref]);

    return [point, ref];
}
