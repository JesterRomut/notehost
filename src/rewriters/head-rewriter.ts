import { NoteHostSiteConfigFull } from '../types'
import {STRING as head} from '@/src/components/__head'

/* eslint-disable class-methods-use-this */
export class HeadRewriter {
  siteConfig: NoteHostSiteConfigFull

  constructor(siteConfig: NoteHostSiteConfigFull) {
    this.siteConfig = siteConfig
  }

  element(element: Element) {
    const { googleFont, customHeadJS, customHeadCSS } = this.siteConfig

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
