import { NoteHostSiteConfigFull } from '../types'
import {STRING as head} from '@/src/components/__head'

/* eslint-disable class-methods-use-this */
export class HeadRewriter {
  siteConfig: NoteHostSiteConfigFull

  url: URL

  constructor(siteConfig: NoteHostSiteConfigFull, url: URL) {
    this.siteConfig = siteConfig
    this.url = url
  }

  element(element: Element) {
    const { googleFont, customHeadJS, customHeadCSS, siteLanguage, pageMetadata } = this.siteConfig

    const page = this.url.pathname.slice(-32)

    if (googleFont) {
      element.append(
        `<link href='https://fonts.googleapis.com/css?family=${googleFont.replace(
          ' ',
          '+',
        )}:Regular,Bold,Italic&display=swap' rel='stylesheet'>
          <style>* { font-family: "${googleFont}" !important; }</style>`,
        {
          html: true,
        },
      )
    }

    if (siteLanguage) {
      element.setAttribute('lang', siteLanguage)
    }

    element.append(
      `
        ${head}

        ${customHeadCSS ?? ''}

        ${customHeadJS ?? ''}`,
      {
        html: true,
      },
    )
  }
}
