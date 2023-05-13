import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getMds } from '@/utils/getMds'
import path from 'path'
import Link from 'next/link'
import { IMetaData } from '@/utils/getMds'
interface IHomeProps {
  metaData: IMetaData[]
}

export default function Home({ metaData }: IHomeProps): JSX.Element {
  return (
    <div>
      {metaData.map((md) => (
        <div key={md.title}>
          <Link href={`/md/${md.title}`}>{md.title}</Link>
          {/* <a href={`/md/${md.title}`}>{md.title}</a> */}
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const metaData = getMds(path.join(process.cwd(), 'pages', 'md'))
  return { props: { metaData } }
}
