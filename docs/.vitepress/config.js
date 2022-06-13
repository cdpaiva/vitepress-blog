module.exports = {
    lang: 'en-US',
    title: 'Carlos Damiani Paiva',
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
                        text: 'Project Manager',
                        link: '/projects/vue-project-manager'
                    },
                    {
                        text: 'Vue Puzzle Slider',
                        link: '/projects/vue-puzzle-slider'
                    },
                    {
                        text: 'Vue Weather',
                        link: '/projects/vue-weather',
                    },
                    {
                        text: 'React Time Tracker Dashboard',
                        link: '/projects/react-time-tracking-dashboard',
                    },
                    {
                        text: 'Fylo Landing Page',
                        link: '/projects/fylo-landing-page',
                    }
                ]
            },

            { text: 'Notes', link: '/notes/' }

        ]
    }
}