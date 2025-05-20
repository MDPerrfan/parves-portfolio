import React, { useEffect, useRef } from 'react';

const StarsBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        let moon = {
            x: window.innerWidth * 0.9,
            y: window.innerHeight * 0.15,
            radius: 40,
            glow: 20
        };

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Create stars
        const createStars = () => {
            stars = [];
            const numberOfStars = Math.floor((canvas.width * canvas.height) / 2000);
            
            for (let i = 0; i < numberOfStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    brightness: Math.random(),
                    speed: Math.random() * 0.13
                });
            }
        };

        // Draw moon
        const drawMoon = () => {
            // Moon glow
            const gradient = ctx.createRadialGradient(
                moon.x, moon.y, moon.radius,
                moon.x, moon.y, moon.radius + moon.glow
            );
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.beginPath();
            ctx.fillStyle = gradient;
            ctx.arc(moon.x, moon.y, moon.radius + moon.glow, 0, Math.PI * 2);
            ctx.fill();

            // Moon
            ctx.beginPath();
            ctx.fillStyle = '#fff';
            ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2);
            ctx.fill();

            // Moon craters
            const craters = [
                { x: -15, y: -10, radius: 8 },
                { x: 10, y: 5, radius: 5 },
                { x: -5, y: 15, radius: 6 }
            ];

            craters.forEach(crater => {
                ctx.beginPath();
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.arc(
                    moon.x + crater.x,
                    moon.y + crater.y,
                    crater.radius,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            });
        };

        // Draw stars
        const drawStars = () => {
            stars.forEach(star => {
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();

                // Twinkle effect
                star.brightness += star.speed;
                if (star.brightness > 1 || star.brightness < 0) {
                    star.speed = -star.speed;
                }
            });
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw background gradient
            const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            bgGradient.addColorStop(0, '#0a0a2a');
            bgGradient.addColorStop(1, '#1a1a3a');
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drawStars();
            drawMoon();
            
            animationFrameId = requestAnimationFrame(animate);
        };

        // Handle resize
        const handleResize = () => {
            setCanvasSize();
            createStars();
        };

        // Initialize
        setCanvasSize();
        createStars();
        animate();

        // Event listeners
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
};

export default StarsBackground; 