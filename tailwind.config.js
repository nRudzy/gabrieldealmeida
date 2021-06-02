module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'hero-bg': "url('/src/images/hero-bg.jpg')",
                'bg-pp': "url('/src/images/profile_picture.jpg')",
                'me-z': "url('/src/images/me-z.jpg')",
                'z': "url('/src/images/z.jpg')",
                'goku': "url('/src/images/goku.jpg')",
                'naruto': "url('/src/images/naruto.jpg')",
            }),
        },
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
