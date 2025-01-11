import { ProjectImageModel } from '@/models/ProjectModel';
import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export type Data = {
  images?: ProjectImageModel[];
  error?: string;
};

export async function GET(req: NextRequest): Promise<NextResponse<Data>> {

  const searchParams = req.nextUrl.searchParams;
  const projectId = searchParams.get("projectId");
  const projectVersion = searchParams.get("projectVersion") ?? "v1";

  const defaultImageDir = "/images/default.svg";

  if (projectId && projectVersion) {
    const dir = "/images/projects/" + projectId + "/" + projectVersion + "/";
    const directoryPath = path.join(process.cwd(), '/public', dir);

    try {
      const images = fs.readdirSync(directoryPath); // Lê os arquivos do diretório

      let response = images.map(it => {
        let url = dir + it;
        let alt = it.split('.')[0].replace(/[0-9]/g, '').replaceAll('_', ' ').replace('-', '').replace('-', ' - ');

        return {
          url,
          alt
        }
      })

      return NextResponse.json({ images: response });

    } catch (error) {
      console.error('Error reading directory:', error);
      return NextResponse.json({
        images: [{
          url: defaultImageDir,
          alt: "no-image"
        }]
      });
    }
  }

  return NextResponse.json({
    images: [{
      url: defaultImageDir,
      alt: "no-image"
    }]
  });
}
