/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-shadow': "url('/Ellipse_3.png')",
        'team-background': "url('/Team/Layer_2.png')",
        'team-bottom-background': "url('/Team/Layer_3.png')",
        'careers-hero-background': "url('/careers/Why-work-for-adzado-2.png')",
      },
      colors: {
        'adzado': 'var(--color-adzado)',
        'adzado-black': 'var(--color-adzado-black)',
        'primary-blue': 'var(--color-primary-blue)',
        'secondary-blue': 'var(--color-secondary-blue)',
        'midnight-blue': 'var(--color-midnight-blue)',
        'primary-gray': 'var(--color-primary-gray)',
        'secondary-gray': 'var(--color-secondary-gray)',
        'medium-gray': 'var(--color-medium-gray)',
        'medium-dark-gray': 'var(--color-medium-dark-gray)',
        'primary-orange': 'var(--color-primary-orange)',
        'adzadobg':'var(--color-adzadobg)',
        'lightblue':'var(--color-light-blue)',
        'signblue':'var(--color-sign-blue)',
        'cardcolor':'var(--color-blue-dark: #051D43)',
        'text-light':'var(--color-text-light: #4889B8)',
        'secondary-green':'var(--color-secondary-green: #45DE2633)',
        'dark-green':'var(--color-dark-green: #45DE26)',
        'lightgry':'var(--color-light-gry: #ffffff66)',
        'lightorange':'var(--color-light-orange: #DEC12633)',
        'orange':'var(--color-orange: #FF770D)',
        'charttext':'var(--color-charttext: #ffffff66;)',
        'inputfild': '#021536',
        light: 'var(--color-light)',
      },
      fontFamily: {
        'roboto': `'Roboto', sans-serif`,
        'inter': `'Inter', sans-serif`,
        'Exo': `'Exo', sans-serif`,
        'Nunito': `'Nunito', sans-serif`
      },
      maxWidth: {
        '1000px': '1000px',
      },
    },
  },
  plugins: [],
}
