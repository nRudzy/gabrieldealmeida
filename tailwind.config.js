module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'hero-bg': "url('/src/images/hero-bg.jpg')",
                'bg-pp': "url('/src/images/profile_picture.jpg')",
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
