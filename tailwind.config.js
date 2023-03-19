/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["*.{html,js}"],
    theme: {
      extend: {
        // フォントを追加
        fontFamily: {
          notoSans: ["Noto Sans JP", "sans-serif"]
        },
        screens: {
          'sp': '413px',
          // => @media (min-width: 413px) { ... }
          'desktop': '1000px',
          // => @media (min-width: 1280px) { ... }
        },
      },
    mode: 'jit',
    corePlugins: {
      preflight: false,
    },
    plugins: [],
  }
}