export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'zcj',
            link: '/en-us/docs/demo-zcj.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '这是一个大表哥',
        children: [
          {
            title: '示例1',
            link: '/zh-cn/docs/demo1.html',
          },
          {
            title: '示例2',
            link: '/zh-cn/docs/demo2.html',
          },
          {
            title:'张长江',
            link:'/zh-cn/docs/demo-zcj.html'
          },
          {
            title: '目录',
            opened: true,
            children: [
              {
                title: '示例3',
                link: '/zh-cn/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: '文档',
  },
};
