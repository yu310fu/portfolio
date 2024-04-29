const Palette = {
    content: {
        parimary: '#26241F',
        secondary: '#888680',
        tertiary: '#D0CBBA',
        inverted: '#FFF',
        link: '#347EED'
    },
    surface: {
        lowest: '#FBFAF8',
        low: '#F4F2ED',
        high: '#FFF',
        overlay: 'rgba(0, 0, 0, .36)',
        hover: 'rgba(0, 0, 0, .15)'
    },
    label: {
        primary: '#FF6F1E',
        secondary: '#23BB9F',
        tertiary: '#E2BE00',
        other: '#E8E6E0'
    }
} as const;

export default Palette;