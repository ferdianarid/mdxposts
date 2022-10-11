/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "gilroy-bold": ["gilroy-bold", "sans-serif"],
                "gilroy-semibold": ["gilroy-semibold", "sans-serif"],
                "gilroy-medium": ["gilroy-medium", "sans-serif"],
                "gilroy-normal": ["gilroy-normal", "sans-serif"],
                "gilroy-light": ["gilroy-light", "sans-serif"],
                "gilroy-extralight": ["gilroy-extralight", "sans-serif"],
                "gilroy-thin": ["gilroy-thin", "sans-serif"]
            },
            fontSize: {
                "heading-1": ["64px", "1.2"],
                "heading-2": ["48px", "1.2"],
                "heading-3": ["40px", "1.2"],
                "heading-4": ["32px", "1.3"],
                "heading-5": ["24px", "1.5"],
                "heading-6": ["20px", "1.5"],
                "heading-7": "16px",
            },
            colors: {
                primary: {
                    main: "#131221",
                    surface: "#EFF0F6",
                    hover: "#2d2b45",
                    pressed: "#131221",
                    focus: "#CCD2E2",
                    border: "#808EB7",
                    dark: "#6638FA"
                },
                neutral: {
                    10: "#FFFFFF",
                    20: "#F7F7F8",
                    30: "#E7E8EB",
                    40: "#B9BDC6",
                    50: "#868D9D",
                    60: "#6D7689",
                    70: "#555F75",
                    80: "#3D4961",
                    90: "#24324E",
                    100: "#0C1B3A"
                },
            }
        },
    },
    plugins: [],
}