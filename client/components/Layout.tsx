import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from "@emotion/styled";

const StyledBody = styled.body`
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
`

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" /> */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    <StyledBody>
      {children}
    </StyledBody>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
