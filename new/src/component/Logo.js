// import React from "react"
// import './Nav.css'
// import '../App.css';



// export default Logo;










// // // const canvas = document.getElementById("myCanvas");
// // //         const ctx = canvas.getContext("2d");

// // //         // Set initial position, size, rotation, velocity, and gravity of the block
// // //         let x = canvas.width / 2;
// // //         let y = canvas.height / 2;
// // //         let size = 50;
// // //         let rotation = 0;
// // //         let velocityX = 2;
// // //         let velocityY = 0;
// // //         const gravity = 0.2;

// // //         // Function to draw the rotating square
// // //         function drawSquare() {
// // //             ctx.clearRect(0, 0, canvas.width, canvas.height);

// // //             // Translate the canvas to the block's center point
// // //             ctx.translate(x, y);

// // //             // Rotate the canvas
// // //             ctx.rotate((rotation * Math.PI) / 180);

// // //             // Draw the square
// // //             ctx.fillStyle = "blue";
// // //             ctx.fillRect(-size / 2, -size / 2, size, size);

// // //             // Reset the canvas transformations
// // //             ctx.rotate((-rotation * Math.PI) / 180);
// // //             ctx.translate(-x, -y);
// // //         }

// // //         // Function to update the position, rotation, and velocity of the block
// // //         function update() {
// // //             // Apply gravity
// // //             velocityY += gravity;

// // //             // Update position
// // //             x += velocityX;
// // //             y += velocityY;

// // //             // Update rotation
// // //             rotation += 2;

// // //             // Check if the block hits the ground
// // //             if (y + size / 2 > canvas.height) {
// // //                 // Reverse vertical velocity to make it bounce
// // //                 velocityY = -velocityY * 0.8;

// // //                 // Apply friction to slow down horizontal movement
// // //                 velocityX *= 0.9;
// // //             }

// // //             // Redraw the block
// // //             drawSquare();

// // //             // Call update() function repeatedly
// // //             requestAnimationFrame(update);
// // //         }

// // //         // Start the animation when the canvas is clicked
// // //         canvas.addEventListener("click", function () {
// // //             x = canvas.width / 2;
// // //             y = canvas.height / 2;
// // //             velocityX = 2;
// // //             velocityY = 0;
// // //             rotation = 0;
// // //             update();
// // //         });

// // //         // Initial draw
// // //         drawSquare();
    