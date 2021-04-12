const purgeEnabled = process.env.NODE_ENV === "production"

console.log("\n")
console.log(`   TailwindCSS \n`)
console.log(`   ----------- \n`)
console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`)

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.jsx"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        kat: {
          primary:"#3797EF",
          secondary:"#3085D3",
        },
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active','focus'],
      borderColor: ['focus-visible', 'first','active'],
      textColor: ['visited','active'],
      borderWidth: ['hover','focus','active'],
    }
  },
  plugins: []
}
