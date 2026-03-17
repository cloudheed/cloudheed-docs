import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      {/* Light mode: use dark logo (dark text on light bg) */}
      <img
        src="/logo-dark.png"
        alt="Cloudheed"
        height={24}
        className="dark:hidden"
        style={{ height: 24 }}
      />
      {/* Dark mode: use light logo (light text on dark bg) */}
      <img
        src="/logo.png"
        alt="Cloudheed"
        height={24}
        className="hidden dark:block"
        style={{ height: 24 }}
      />
    </>
  ),
  head: (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Cloudheed Docs'
    }
  },
  project: {
    link: 'https://github.com/cloudheed/cloudheed-docs',
  },
  docsRepositoryBase: 'https://github.com/cloudheed/cloudheed-docs/tree/main',
  primaryHue: 0,
  primarySaturation: 80,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  footer: {
    text: `© ${new Date().getFullYear()} Cloudheed. All rights reserved.`,
  },
  navigation: true,
}

export default config
