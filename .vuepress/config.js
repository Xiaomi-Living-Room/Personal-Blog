module.exports = {
  title: "小米的生活间",
  description: "该网站用于记录学习生活和分享日常",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home"
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date"
      },
      {
        text: "文档",
        icon: "reco-message",
        items: [
          {
            text: "vuepress-reco",
            link: "/docs/theme-reco/"
          }
        ]
      },
      {
        text: "联系",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/Xiaomi-Living-Room",
            icon: "reco-github"
          }
        ]
      }
    ],
    sidebar: {
        "/docs/courses/": [
			{
				title: '教程',
				sidebarDepth: 3, 
				collapsable: true,
				children: [
					{ title: 'Blog网站搭建笔记', path: './web/Blog_Web_Build_Note'},
				],
			},
        ],
        "/docs/others/": [
	   			{
				title: '杂记',
				sidebarDepth: 3, 
				collapsable: true,
				children: [
					{ title: '赚钱秘籍', path: './others'},
				],
			},
		],
    },
	activeHeaderLinks: false,
    type: "blog",
    blogConfig: {
		category: {
		location: 2,
		text: "分类"
		},
		tag: {
		location: 3,
		text: "标签"
		}
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com"
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    logo: "/myAvatar.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "小米",
    authorAvatar: "/myAvatar.png",
    record: "西安",
    startYear: "2021"
  },
  markdown: {
    lineNumbers: true
  }
}