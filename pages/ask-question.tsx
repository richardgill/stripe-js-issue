import type { NextPage } from 'next'
import Head from 'next/head'

const AskQuestion: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ask your question</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">Ask us!</h1>
      <iframe
        src="https://tally.so/embed/w4MNbn?alignLeft=1&hideTitle=1&transparentBackground=1"
        width="100%"
        height="500"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Ask your accounting question"
      ></iframe>
    </div>
  )
}

export default AskQuestion
