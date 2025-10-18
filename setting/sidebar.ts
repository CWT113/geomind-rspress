const sidebar = {
  "/frontend/vue/": [
    {
      text: "基础知识",
      items: [
        {
          text: "基础入门",
          link: "/frontend/vue/基础入门",
        },
      ],
    },
  ],

  "/frontend/vite/": [
    {
      text: "基础知识",
      items: [
        {
          text: "基础入门",
          link: "/frontend/vite/基础入门",
        },
      ],
    },
  ],

  "/gis/knowledge/": [
    {
      text: "理论知识",
      items: [
        {
          text: "坐标系与投影",
          link: "/gis/knowledge/坐标系与投影",
        },
      ],
    },
  ],

  "/gis/cesium/": [
    {
      text: "Cesium",
      items: [
        {
          text: "基础入门",
          link: "/gis/cesium/基础入门",
        },
      ],
    },
  ],

  "/gis/webgl/": [
    {
      text: "WebGL",
      items: [
        {
          text: "webgl概述",
          link: "/gis/webgl/1.webgl概述",
        },
        {
          text: "坐标系",
          link: "/gis/webgl/2.坐标系",
        },
        {
          text: "着色器",
          link: "/gis/webgl/3.着色器",
          items: [
            {
              text: "为attribute变量赋值",
              link: "/gis/webgl/3.1.为attribute变量赋值",
            },
            {
              text: "为uniform变量赋值",
              link: "/gis/webgl/3.2.为uniform变量赋值",
            },
          ],
        },
        {
          text: "缓冲区对象",
          link: "/gis/webgl/4.缓冲区对象",
        },
        {
          text: "高级变换和动画效果",
          link: "/gis/webgl/6.高级变换和动画效果",
        },
      ],
    },
  ],
};

export default sidebar as any;