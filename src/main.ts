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
  // Metatags, optional
  // For main page link preview
  this.siteName = "华丽终幕 | 嘉登糖尿病的个人网站";
  this.siteDescription = "嘉登糖尿病的个人网站，扣1即看《钨合之众》发条电子血肉三傻波一的奇妙冒险故事……";
  this.siteImage = "https://jesterromut.github.io/worms/%E5%90%9E%E6%98%9F%E4%B9%8B%E5%85%BD.png"
  // Twitter handle, optional
  // twitterHandle: '',
  // URL to custom favicon.ico
  // siteIcon: '',
  // Additional safety: avoid serving extraneous Notion content from your website
  // Use the value from your Notion settings => Workspace => Settings => Domain
  this.notionDomain = "jesterromut";
  // Map slugs (short page names) to Notion page IDs
  // Empty slug is your main page
    this.slugToPage = {
    "": process.env.MAINPAGE,
    "wiki": process.env.WIKIPAGE,
    "artworks": process.env.ARTPAGE,
    "characters": process.env.CHRPAGE,
    "worldviews": process.env.WORLDPAGE
  };
  // Rewrite meta tags for specific pages
  // Use the Notion page ID as the key
  this.pageMetadata = {
    [process.env.ARTPAGE]: {
      title: '华丽终幕 | 嘉登糖尿病的作品集',
      description: '嘉登糖尿病的个人网站，扣1即看《钨合之众》发条电子血肉三傻波一的奇妙冒险故事……',
      image: this.siteImage,
      author: 'Jester Romut',
    },
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
  // fof: {
  //   page: "NOTION_PAGE_ID",
  //   slug: "404", // default
  // },
  // Google Font name, you can choose from https://fonts.google.com
  // googleFont: 'Roboto',
  // Custom JS for head and body of a Notion page
  // customHeadCSS: ``,
  this.customHeadJS = googleTag(process.env.GOOGLE_TAG);
  // customBodyJS: PAGE_SCRIPT_JS_STRING,
})}
