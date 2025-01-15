import { ProjectImageModel } from '@/models/ProjectModel';
import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export type Data = {
  images?: ProjectImageModel[];
  error?: string;
};

export async function GET(request: Request): Promise<NextResponse<Data>> {
  const { searchParams } = new URL(request.url);

  const projectId = searchParams.get("projectId");
  const projectVersion = searchParams.get("projectVersion") ?? "v1";
  const mobile = searchParams.get("mobile");

  const dir =
    projectId && projectVersion
      ? "projects/images/" + projectId + "/" + projectVersion + "/" + (mobile == "true" ? "mobile/" : "")
      : "/projects/images/default.svg"

  try {
    // ⚠️ The below code is for App Router Route Handlers only
    let response = await list({ prefix: dir })
      .then(res => {
        return res.blobs.length > 0
          && res.blobs
            .filter((it) => it.pathname.split('/')[4] != "mobile")
            .filter((it) => it.size != 0)
            .map(it => {
              let url = it.url;
              let alt = it.pathname
                .split('/')[4]
                .split('.')[0]
                .replace(/[0-9]/g, '')
                .replaceAll('_', ' ')
                .replace('-', '')
                .replace('-', ' - ');

              return {
                url,
                alt
              };
            });
      });

    if (response) {
      return NextResponse.json({ images: response });
    } else {

      return NextResponse.json({
        images: [{
          url: "/images/default.svg",
          alt: "no-image"
        }]
      });
    }

  } catch (error) {
    console.error('Error reading directory:', error);
    return NextResponse.json({
      images: [{
        url: "/images/default.svg",
        alt: "no-image"
      }]
    });
  }
}