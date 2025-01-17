import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export type ProjectDetails = {
  content: string;
  error?: string;
};

export async function GET(request: Request): Promise<NextResponse<ProjectDetails>> {
  const { searchParams } = new URL(request.url);

  const projectId = searchParams.get("projectId");
  const projectVersion = searchParams.get("projectVersion") ?? "1.0";

  const dir =
    projectId && projectVersion
      ? "projects/details/" + projectId + "/" + projectVersion + "/description.html"
      : "projects/details/default.html";

  const defaultURL = "https://" + process.env.BLOB_HOSTNAME + "/projects/details/default.html"

  try {
    let response = await list({ prefix: dir, mode: 'folded' })
      .then(res => {
        return res.blobs.length > 0
          && res.blobs
            .filter((it) => it.size != 0)
            .map(it => it.url)[0];
      });

    if (response) {
      return NextResponse.json({ content: response ?? defaultURL });
    } else {
      return NextResponse.json({
        content: defaultURL
      });
    }

  } catch (error) {
    console.error('Error reading directory:', error);
    return NextResponse.json({
      content: defaultURL
    });
  }
}