import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File } from 'formidable';
import * as fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Disable Next.js's default body parsing
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({
      uploadDir: path.join(process.cwd(), '/uploads'),
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to parse form data' });
      }

      const file = files.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // Type guard to check if `file` is an array or a single `File` object
      let uploadedFile: File;
      if (Array.isArray(file)) {
        uploadedFile = file[0]; // Assuming only one file is uploaded, take the first one
      } else {
        uploadedFile = file;
      }

      const filePath = uploadedFile.filepath; // Now `filePath` is safely accessed

      // Do something with the file (e.g., send it to the backend)
      return res.status(200).json({ message: 'File uploaded successfully', filePath });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
