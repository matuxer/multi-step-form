/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024",
        xl: "1440px",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sansserif"],
      },
      colors: {
        marineBlue: {
          1: "hsl(213, 96%, 18%)",
          2: "hsl(213, 96%, 30%)"
        },
        purplishBlue: {
          1: "hsl(243, 100%, 62%)",
          2: "hsl(243, 100%, 75%)",
        },
        pastelBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        strawberryRed: "hsl(354, 84%, 57%)",
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
};
