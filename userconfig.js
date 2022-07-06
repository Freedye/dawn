const CONFIG = new Config({
  temperature: {
    location: 'Matão, São Paulo',
    scale: 'C'
  },
  clock: 'h:i p',
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  disabled: [],
  tabs: [
    {
      name: 'boards',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'Weeb shit',
        links: [
          {
            url: 'https://4chan.org/a/',
            name: '/a/',
            icon: 'device-tv'
          },
          {
            name: '/c/',
            url: 'https://4chan.org/c/',
            icon: 'heart'
          },
          {
            name: '/jp/',
            url: 'https://4chan.org/jp/',
            icon: 'currency-yen'
          },
          {
            name: '/m/',
            url: 'https://4chan.org/m/',
            icon: 'robot'
          },
          {
            name: '/w/',
            url: 'https://4chan.org/w/',
            icon: 'camera'
          }
        ]
      },
      {
        name: 'Comfy',
        links: [
          {
            name: '/kawaii/',
            url: 'https://sushigirl.us/kawaii/'
          },
          {
            name: '/comfy/',
            url: 'https://anon.cafe/comfy/catalog.html'
          },
          {
            name: '/lounge/',
            url: 'https://sushigirl.us/lounge/'
          },
          {
            name: '/wsg/',
            url: 'https://4chan.org/wsg/'
          }
        ]
      },
      {
        name: 'Technology',
        links: [
          {
            name: '/λ/',
            url: 'https://lainchan.org/lambda/',
            icon: 'device-desktop'
          },
          {
            name: '/g/',
            url: 'https://4chan.org/g/',
            icon: 'device-laptop'
          },
          {
            name: '/prog/',
            url: 'https://boards.420chan.org/prog/',
            icon: 'code'
          },
          {
            name: '/sec/',
            url: 'https://www.lainchan.org/sec/catalog.html',
            icon: 'devices-pc'
          }
        ]
      }
      ]
    },
    {
      name: 'music',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud'
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube'
            },
            {
              url: 'https://spotify.com',
              icon: 'brand-spotify'
            },
          ]
        },
        {
          name: 'music boards',
          links: [
            {
              name: '/music/',
              url: 'https://lainchan.org/music/',
              icon: 'disc'
            },
            {
              name: '/mu/',
              url: 'https://boards.4channel.org/mu/',
              icon: 'music'
            }
          ]
        }
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: 'coding sites',
          links: [
            {
              name: 'つき',
              url: 'https://systemspace.network/'
            },
            {
              name: 'codeacademy',
              url: 'https://codecademy.com/'
            },
            {
              name: 'github',
              url: 'https://github.com/Freedye'
            },
            {
              name: 'scotch.io',
              url: 'https://scotch.io/'
            },
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'drive',
              url: 'https://drive.google.com/'
            },
            {
              name: 'stallaman',
              url: 'https://stallman.org/'
            }
          ]
        }
      ]
    },
    {
      name: 'Social',
      background_url: 'src/img/banners/bg-4.gif',
      categories: [
        {
          name: 'meta',
          links: [
            {
              name: 'facebook',
              url: 'https://facebook.com/',
              icon: 'brand-facebook'
            },
            {
              name: 'instagram',
              url: 'https://instagram.com/',
              icon: 'brand-instagram'
            }
          ]
        },
        {
          name: 'Google',
          links: [
            {
              name: 'gmail',
              url: 'https://mail.google.com/mail/u/0/',
              icon: 'brand-gmail'
            },
            {
              name: 'youtube',
              url: 'https://youtube.com/',
              icon: 'brand-youtube'
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'anilist',
              url: 'https://anilist.co/'
            },
            {
              name: 'reddit',
              url: 'https://reddit.com/'
            },
            {
              name: 'tumblr',
              url: 'https://tumblr.com/'
            },
            {
              name: 'twitter',
              url: 'https://twitter.com/'
            },
          ]
        }
      ]
    }]
});
