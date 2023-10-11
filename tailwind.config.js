/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // FOR STEP FORM
    // colors: {
    //   marineBlue: "hsl(213, 96%, 18%)",
    //   purplishBlue: "hsl(243, 100%, 62%)",
    //   pastelBlue: "hsl(228, 100%, 84%)",
    //   lightBlue: "hsl(206, 94%, 87%)",
    //   strawberryRed: "hsl(354, 84%, 57%)",
    //   coolGray: "hsl(231, 11%, 63%)",
    //   lightGray: "hsl(229, 24%, 87%)",
    //   magnolia: "hsl(217, 100%, 97%)",
    //   alabaster: "hsl(231, 100%, 99%)",
    //   white: "hsl(0, 0%, 100%)",
    // },

    //FOR URL SHORTENER
    colors: {
      cyan: "hsl(180, 66%, 49%)",
      darkViolet: "hsl(257, 27%, 26%)",
      gray: "hsl(0, 0%, 85%)",
      darkGray: "hsl(0, 0%, 55%)",
      grayishViolet: "hsl(257, 7%, 63%)",
      veryDarkBlue: "hsl(255, 11%, 22%)",
      verDarkViolet: "hsl(260, 8%, 14%)",
      white: "hsl(0, 0%, 100%)",
      red: "hsl(354, 84%, 57%)",
    },

    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
