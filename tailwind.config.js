export default {
    content: [
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',  // ReactのTSXファイル対象
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
