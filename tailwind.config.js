/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat, sans-serif'],
        inter: ['Inter, sans-serif'],
        roboto: ['Roboto Serif, serif'],
      },
      // backgroundImage: (theme) => ({
      //   'hero-img': "url('./src/assets/svg/heroBanner.svg')",
      //   'booking-img1': "url('./src/assets/svg/bookingImg1.svg')",
      //   'booking-img2': "url('./src/assets/svg/bookingImg2.svg')",
      //   'booking-img3': "url('./src/assets/svg/bookingImg3.svg')",
      // }),
    },
  },
  plugins: [],
}

