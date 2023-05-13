import fs from 'fs'
import path from 'path'

export interface IMetaData {
  title: string
}
export const getMds = (dirPath: string): IMetaData[] => {
  debugger
  const fileNames = fs.readdirSync(dirPath)
  const mds = fileNames.filter((fileName) => {
    const extName = path.extname(fileName)
    return path.basename(fileName, extName)
  })
  const metaData = mds.map((md) => {
    const filePath = path.join(dirPath, md)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const titleMatch = fileContent.match(/---\r?\ntitle: (.+)\r?\n---/)
    const title = titleMatch ? titleMatch[1] : md.replace('.mdx', '')
    return { title }
  })
  return metaData
}
