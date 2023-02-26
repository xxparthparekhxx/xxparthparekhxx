import React, { useState, useEffect, useRef } from 'react';

const Eye = ({ eyeRadius = 20, blackChild, Expanded }) => {
    const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
    const [corneaRadius, setCorneaRadius] = useState(eyeRadius * 0.7);
    useEffect(() => {
        const x = Expanded ? (eyeRadius * 0.7) : (eyeRadius * 0.6)
        setCorneaRadius(x)
    }, [Expanded,eyeRadius])

    const eyeRef = useRef(null);

    const eyeStyle = {
        width: `${eyeRadius * 2}px`,
        height: `${eyeRadius * 2}px`,
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'relative',
        border: '2px solid black',
        boxShadow: '0 0 5px black',
        overflow: 'hidden'
    };

    const getCorneaPosition = (x, y) => {
        const xDiff = x - eyeRadius;
        const yDiff = y - eyeRadius;
        const rotation = (Math.atan2(yDiff, xDiff) * 180) / Math.PI;
        const distance = Math.min(Math.sqrt(xDiff * xDiff + yDiff * yDiff), eyeRadius - corneaRadius);
        const corneaX = eyeRadius + (distance * Math.cos((rotation * Math.PI) / 180)) - corneaRadius;
        const corneaY = eyeRadius + (distance * Math.sin((rotation * Math.PI) / 180)) - corneaRadius;
        return {
            x: corneaX,
            y: corneaY,
            rotation
        };
    };

    const corneaPosition = getCorneaPosition(targetPosition.x, targetPosition.y);
    const corneaStyle = {
        width: `${corneaRadius * 2}px`,
        height: `${corneaRadius * 2}px`,
        borderRadius: '50%',
        backgroundColor: 'black',
        position: 'absolute',
        left: `${corneaPosition.x}px`,
        top: `${corneaPosition.y}px`,
        transform: `rotate(${corneaPosition.rotation}deg)`,
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!eyeRef.current) return;
            const { left, top } = eyeRef.current.getBoundingClientRect();
            setTargetPosition({
                x: event.clientX - left,
                y: event.clientY - top
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [eyeRadius]);

    const inflateCornea = () => {
        setCorneaRadius(eyeRadius * 0.7)
    }
    const deflateCornea = () => {
        if (!Expanded) {
            setCorneaRadius(eyeRadius * 0.6)
        }
    }

    return (
        <div onMouseEnter={inflateCornea} onMouseLeave={deflateCornea} style={eyeStyle} ref={eyeRef}>
            <div style={corneaStyle}>
                {blackChild}
            </div>
        </div>
    );
}

export default Eye