import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KoKo.AI',
    short_name: 'KoKo.AI',
    description: 'Smart AI agent for automated bookkeeping and financial analysis.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: '/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/icon-500x500.png',
        sizes: '500x500',
        type: 'image/png',
      },
    ],
  }
}