import { Metadata } from "next"

import metaData from "@/lib/data/meta.json"

export const getBasicPath = (path: string) => {
  return `${process.env.NEXT_PUBLIC_FRONT_URL || ""}${path}`
}

export const getStaticMeta = (pageName: keyof typeof metaData): Metadata => {
  const meta = metaData[pageName]

  const baseUrl = process.env.NEXT_PUBLIC_FRONT_URL || ""

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      siteName: meta.title,
      type: "website",
      url: getBasicPath(pageName),
      images: "https://term-cat.ru/_next/static/media/logo.6b56f61b.svg"
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      images: "https://term-cat.ru/_next/static/media/logo.6b56f61b.svg"
    },
    metadataBase: new URL("/", baseUrl),
    alternates: {
      canonical: `${baseUrl}${pageName}`
    }
  }
}
