// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import openAI from '@/lib/chatgpt'
import type { NextApiRequest, NextApiResponse } from 'next'

type Option = {
  value: string
  label: string
}

type Data = {
  modelOptions: Option[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const models = await openAI.listModels().then((res) => res.data.data)

  const modelOptions = models.map((model) => ({
    value: model.id,
    label: model.id,
  }))
  res.status(200).json({ modelOptions })
}
