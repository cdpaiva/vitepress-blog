module.exports = {
    lang: 'en-US',
    title: 'Carlos Damiani Paiva',
    description: 'A personal blog to document public learning Vue.js and frontend development',
    head: [
        ['script', 
        {'async src': 'https://www.googletagmanager.com/gtag/js?id=G-LDKM6H7G23'}
        ],
        ['script',{},
            `    window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
        
            gtag('config', 'G-LDKM6H7G23', { 'cookieFlags': 'SameSite=None; Secure' });`
        ]
    ],
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