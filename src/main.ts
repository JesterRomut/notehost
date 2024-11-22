import { initializeReverseProxy } from '@/src/reverse-proxy-init'

export function googleTag(googleTagId: string) {
  return `
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${googleTagId}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${googleTagId}');
  </script>
  `
}

export function main (){initializeReverseProxy(new function(){
  this.domain = "jesterromut.icu";

  // Twitter handle, optional
  // twitterHandle: '',
  // URL to custom favicon.ico
  // siteIcon: '',
  // Additional safety: avoid serving extraneous Notion content from your website
  // Use the value from your Notion settings => Workspace => Settings => Domain
  this.notionDomain = "jesterromut";
  // Map slugs (short page names) to Notion page IDs
  // Empty slug is your main page
  const mainPage = "55b1800f943d4462a5a068276298bee6";
  const artPage = "12520e7ce893801ea4f4f85814bc2266";
  const chrPage = "0e9caf61163a49b78d634497fa5cff8d";
  const wldPage = "84eb2b57a5884e45b7cdd371736918ec";
  const wikiPage = "11720e7ce8938011bf0fda2644779e1f"

  this.slugToPage = {
      "": mainPage,
      "wiki": wikiPage,
      "artworks": artPage,
      "characters": chrPage,
      "worldviews": wldPage
    };

  const jester = "嘉登糖尿病";
  // Metatags, optional
  // For main page link preview
  this.siteName = "华丽终幕 | 嘉登糖尿病的个人网站";
  this.siteDescription = "震惊！嘉登糖半夜三更在家有些孤独，打开电脑输入了JvavScript，几月不见，竟成为TypeScript大玉？！";
  this.siteImage = "https://jesterromut.github.io/worms/%E5%90%9E%E6%98%9F%E4%B9%8B%E5%85%BD.png"

  this.siteLanguage = 'zh-Hans'

  // Rewrite meta tags for specific pages
  // Use the Notion page ID as the key
  this.pageMetadata = {
    [mainPage]: {
      title: "华丽终幕 | 嘉登糖尿病的个人网站",
      description: "震惊！嘉登糖半夜三更在家有些孤独，打开电脑输入了JvavScript，几月不见，竟成为TypeScript大玉？！",
      image: this.siteImage,
      author: jester,
      //keyword: `${jester}, 个人网站`
    },
    [artPage]: {
      title: '华丽终幕 | 嘉登糖尿病的作品集',
      description: '震惊！原创故事无人问，一朝发病天下知！扣1即看《钨合之众》发条电子血肉三傻波一的奇妙冒险故事……',
      image: this.siteImage,
      author: jester,
      //keyword: `${jester}, 作品集, 艺作`
    },
    [chrPage]: {
      title: '华丽终幕 | 嘉登糖尿病的角色',
      description: '震惊！是拥有怎样的精神状态，才能让一未成年小孩在家设计出如此这般这般的角色？！那个钨尔维克为何天天炸膛，那个总爱视奸人的麦克白究竟又有何来头？关注嘉登糖尿病，让我们跟随镜头走进无敌发条战士的内心世界……',
      image: this.siteImage,
      author: jester,
      //keyword: `${jester}, oc, 角色设定`
    },
    [wldPage]: {
      title: '华丽终幕 | 嘉登糖尿病的世界观',
      description: '震惊！嘉登糖的世界观中竟隐藏着上层叙事的激斗、失落的文明、与那穿梭时间的禁忌？！扣2即看《钨合之众》惊爆内幕！',
      image: this.siteImage,
      author: jester,
      //keyword: `${jester}, oc, 世界观`
    },
    [wikiPage]: {
      title: '闪耀开场 | 嘉登糖尿病的个人网站',
      description: '震惊！深入嘉登糖的维基，竟发现它以极致细节阐述了如何把一根废旧电线变成无敌钨尔维克大玉的核心力量？！“悲伤中的幽默”与“狂欢中的孤独”原来在这处并存！',
      image: this.siteImage,
      author: jester,
      //keyword: `${jester}, 个人网站`
    }
  };
  // Subdomain redirects are optional
  // But it is recommended to have one for www
  this.subDomains = {
    www: {
      redirect: `"https://${this.domain}`
    }
  };
  // The 404 (not found) page is optional
  // If you don't have one, the default 404 page will be used
  this.fof = {
    page: "14320e7ce89380428815f033916a38b6",
    slug: "404", // default
  }
  // Google Font name, you can choose from https://fonts.google.com
  // googleFont: 'Roboto',
  // Custom JS for head and body of a Notion page
  // customHeadCSS: ``,
  this.customHeadJS = googleTag("G-Y91TMDN1PB");
  // customBodyJS: PAGE_SCRIPT_JS_STRING,
})}
