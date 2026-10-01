// Nastavenie Tailwindu – z neho sa generuje styles.css (spusti css-build.cmd)
module.exports = {
  content: ['./*.html'],
  future: { hoverOnlyWhenSupported: true }, // hover len pri myši/touchpade – na mobile sa ťuknutím „neprilepí“
  theme: {
    extend: {
      colors: {
        primary:   { 500: '#3D2217' },
        secondary: { 500: '#F0E9D5' },
        neutral:   { 500: '#764B2A', 600: '#6B4426' },
        accent:    { 300: '#F6E0EF', 500: '#F1D1E7', 600: '#ECC0DE' },
        tertiary:  { 300: '#DEE1B7', 500: '#B8BA87' },
        yellow:    { 50: '#FDEDD3', 500: '#F5AA33' }
      }
    }
  }
}
