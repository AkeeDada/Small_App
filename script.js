// Wait for the HTML document to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Get the canvas element and its 2D rendering context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
  
    // Function to generate a random number within a given range
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    // Function to draw a filled rectangle on the canvas
    function drawRectangle(x, y, width, height) {
      ctx.fillRect(x, y, width, height);
    }
  
    // Function to draw a filled circle on the canvas
    function drawCircle(x, y, radius) {
      // Begin a new path to draw the circle
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI); // Draw a full circle
      ctx.fill(); // Fill the circle with the current fill style
    }
  
    // Function to check if two rectangles are intersecting
    function checkIntersection(rect1, rect2) {
      return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
      );
    }
  
    // Function to generate an array of random rectangles and circles
    function generateShapes() {
      const rectangles = [];
      const circles = [];
  
      // Generate 100 random rectangles
      for (let i = 0; i < 100; i++) {
        rectangles.push({
          x: getRandomNumber(0, canvas.width - 50),
          y: getRandomNumber(0, canvas.height - 50),
          width: getRandomNumber(20, 50),
          height: getRandomNumber(20, 50),
        });
      }
  
      // Generate 50 random circles
      for (let i = 0; i < 50; i++) {
        circles.push({
          x: getRandomNumber(0, canvas.width - 30),
          y: getRandomNumber(0, canvas.height - 30),
          radius: getRandomNumber(10, 30),
        });
      }
  
      return { rectangles, circles };
    }
  
    // Function to draw the generated rectangles and circles on the canvas
    function drawShapes(rectangles, circles) {
      // Clear the entire canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw each rectangle
      rectangles.forEach((rect) => {
        drawRectangle(rect.x, rect.y, rect.width, rect.height);
      });
  
      // Draw each circle
      circles.forEach((circle) => {
        drawCircle(circle.x, circle.y, circle.radius);
      });
    }
  
    // Function to calculate intersection points between rectangles and circles
    function calculateIntersections(rectangles, circles) {
      const intersections = [];
  
      // Check for intersections between each rectangle and circle
      rectangles.forEach((rect1) => {
        circles.forEach((circle) => {
          if (checkIntersection(rect1, circle)) {
            intersections.push({ x: rect1.x, y: rect1.y });
          }
        });
      });
  
      return intersections;
    }
  
    // Main function to orchestrate the application logic
    function main() {
      // Generate random rectangles and circles
      const { rectangles, circles } = generateShapes();
  
      // Draw the generated shapes on the canvas
      drawShapes(rectangles, circles);
  
      // Calculate and log intersection points
      const intersections = calculateIntersections(rectangles, circles);
      console.log("Intersection Points:", intersections);
    }
  
    // Call the main function to start the application
    main();
  });
  