module.exports = {
    title: 'Carlos Damiani Paiva',
    lang: 'en-US',
    description: 'A personal blog to document public learning Vue.js and frontend development',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Projects', link: '/projects/' },
            { text: 'Notes', link: '/notes/' },
            { text: 'About', link: '/about/' }
        ],
        sidebar: [
            {
                text: 'Projects',
                children: [
                    {
                        text: 'Vue Weather',
                        link: '/projects/vue-weather',
                    },
                    {
                        text: 'Project Manager',
                        link: '/projects/vue-project-manager'
                    },
                    {
                        text: 'Vue Puzzle Slider',
                        link: '/projects/vue-puzzle-slider'
                    },
                ]
            },

            { text: 'Notes', link: '/notes/' }

        ]
    }
}