---
id: mdx
title: Powered by MDX
---

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#ffffff',
      padding: '0.2rem',
    }}> {children} </span> );

<Highlight color="#000000">Black</Highlight> and <Highlight color="#000000">White</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!
