import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'slskdn',
  title: 'slskdN',
  license: 'AGPL-3.0',
  packageRepo: 'https://github.com/snapetech/slskdn-startos',
  upstreamRepo: 'https://github.com/snapetech/slskdn',
  marketingUrl: 'https://github.com/snapetech/slskdn',
  donationUrl: 'https://ko-fi.com/snapetech',
  description: { short, long },
  volumes: ['main', 'downloads', 'music'],
  images: {
    'slskdn': {
      source: { dockerTag: 'docker.io/snapetech/slskdn:2026092517-slskdn.325' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
