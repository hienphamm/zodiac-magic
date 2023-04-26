import {OpenAIStream, OpenAIStreamPayload} from "@app/utils/OpenAPIStream";

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<Response> => {
  const payload: OpenAIStreamPayload = {
    model: 'text-davinci-003',
    prompt: 'Giúp tôi xem tử vi, tôi tên là Nguyễn Hoàng Việt sinh ngày 17-12-1991',
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 1,
  }
  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
export default handler