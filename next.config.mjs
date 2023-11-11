/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: { unoptimized: true }
}
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import fauxRemarkEmbedder from '@remark-embedder/core'
import fauxOembedTransformer from '@remark-embedder/transformer-oembed'
const remarkEmbedder = fauxRemarkEmbedder.default
const oembedTransformer = fauxOembedTransformer.default
import createMDX from '@next/mdx'
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      [remarkEmbedder, { transformers: [oembedTransformer] }],
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: 'frontmatter' }]
    ],
    rehypePlugins: [
      rehypeAutolinkHeadings,
      rehypePrettyCode,
      rehypeKatex,
      rehypeHighlight,
    ],
  },
})
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
