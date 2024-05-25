import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { IProject } from '@/types/project'
import Image from 'next/image'

export default async function SingleWorkPage({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'projects',
    `${slug}.mdx`
  )
  const postFile = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(postFile)
  const { about, role, tagline, thumbnail, title, tools, timeline } =
    data as IProject
  return (
    <main className="flex flex-col container">
      <article className="space-y-6">
        <div>
          <Image
            src={thumbnail}
            alt={title}
            height={326}
            width={600}
            className="w-full h-52 object-cover"
          />
        </div>
        <h1 className="text-4xl">{title}</h1>
        <div className="flex items-start gap-10">
          <div>
            <div className="uppercase text-accent">Role</div>
            <div>{role}</div>
          </div>
          <div>
            <div className="uppercase text-accent">TIMELINE</div>
            <div>{timeline}</div>
          </div>
          <div>
            <div className="uppercase text-accent">TOOLS</div>
            <div className="flex flex-col">
              {tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-secondary/20 w-full " />
        <MDXRemote
          source={content}
          components={{
            p: ({ children }) => <p className="text-primary/70">{children}</p>
          }}
        />
      </article>
    </main>
  )
}
