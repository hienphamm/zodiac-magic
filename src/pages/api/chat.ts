import {ChatGPTAgent, OpenAIStream, OpenAIStreamPayload} from "@app/utils/OpenAPIStream";

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request) => {
  if (req.method === "POST") {
    const body = await req.json()
    const {
      category,
      birthday,
      gender,
      name,
    } = body
    const reqGender = +gender === 0 ? "nam" : "nữ"
    const reqCategory = +category === 0 ? "tử vi" : +category === 1 ? "thần số học" : "chiêm tinh học"
    const message = {
      role: 'user' as ChatGPTAgent,
      content: `Giúp tôi xem ${reqCategory}, tôi tên là ${name} sinh ngày ${birthday}, giới tính ${reqGender}`
    }

    const payload: OpenAIStreamPayload = {
      model: 'gpt-3.5-turbo',
      messages: [message],
      temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: true,
      user: "user",
      n: 1,
    }

    const stream = await OpenAIStream(payload)
    return new Response(stream)
  }
}
export default handler