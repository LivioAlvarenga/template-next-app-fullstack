import { Heading } from '@/styles/theme/components/Heading'
import { Wrapper } from '@/styles/theme/components/Wrapper'

export default function Home() {
  return (
    <main>
      <Wrapper>
        <Heading as="h1" size="3xl" className="text-center font-serif400">
          Template FULLSTACK com Nextjs 13 App Router
        </Heading>
      </Wrapper>
    </main>
  )
}
