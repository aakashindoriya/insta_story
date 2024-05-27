import{ NextApiRequest, NextApiResponse } from 'next'
 

 
export default function handler(
  NextApiRequest,
  NextApiResponse
) {
    NextApiResponse.status(200).json({ message: 'Hello from Next.js!' })
}