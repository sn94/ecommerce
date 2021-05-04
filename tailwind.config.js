module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

     
    extend: {
      colors: {
        'primary': 'var(--primary-color)',
         "neutral-color1": "var(--neutral-color1)",
         "neutral-color2": "var(--neutral-color2)",
         "neutral-color3": "var(--neutral-color3)",
         "neutral-color4": "var(--neutral-color4)",
         "accent-color": "var(--accent-color)",
         "alert-color": "var(--alert-color)",
         "success-color": "var(--success-color)",
         "warning-color": "var(--warning-color)",
         "info-color": "var(--info-color)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
