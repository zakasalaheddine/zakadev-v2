import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { IProject } from '@/types/project'
import Image from 'next/image'
import Link from 'next/link'

export default async function Projects() {
  const directoryPath = path.join(process.cwd(), 'src', 'content', 'projects')
  const postFilePaths = fs.readdirSync(directoryPath).filter((postFilePath) => {
    return path.extname(postFilePath).toLowerCase() === '.mdx'
  })
  const postPreviews = []
  for (const postFilePath of postFilePaths) {
    const filePath = path.join(directoryPath, postFilePath)
    const postFile = fs.readFileSync(filePath, 'utf8')
    const serializedPost = await serialize(postFile, {
      parseFrontmatter: true
    })

    postPreviews.push({
      ...serializedPost.frontmatter,
      slug: postFilePath.replace('.mdx', '')
    } as IProject)
  }
  return (
    <section className="my-10">
      <h3 className="uppercase text-4xl mb-5">Work</h3>
      <div className="flex flex-col md:grid grid-cols-2 gap-6">
        {postPreviews.map((postPreview) => (
          <Link
            className="flex flex-col items-start gap-6 flex-1"
            href={`/work/${postPreview.slug}`}
            key={postPreview.slug}
          >
            <div className='h-72 relative overflow-hidden'>
              <Image
                src={postPreview.thumbnail}
                alt={postPreview.title}
                height={326}
                width={628}
                className="object-cover"
              />
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent from-60% to-background/30' />
            </div>
            <div className="flex flex-col items-start gap-2">
              <h4 className="text-2xl">{postPreview.title}</h4>
              <h5 className="text-primary/70 text-sm">{postPreview.tagline}</h5>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
