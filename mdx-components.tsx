import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: (props) => <h1 className="text-2xl mb-3 mt-5 first-of-type:mt-3 font-semibold" {...props} />,
        h2: (props) => <h2 className="text-xl mb-3 mt-5 first-of-type:mt-3 font-normal" {...props} />,
        h3: (props) => <h3 className="text-lg mb-3 mt-5 first-of-type:mt-3 font-normal" {...props} />,
        ...components,
    }
}