import {Inter} from 'next/font/google'
import Select from "@app/components/Select";
import Datepicker from "@app/components/Datepicker";
import Input from "@app/components/Input";
import Button from "@app/components/Button";
import Chat from "@app/components/Chat";
import {ChangeEvent, useState} from "react";

const inter = Inter({subsets: ['latin']})

const categories = [
  {
    label: 'Tử vi',
    value: 0,
  },
  {
    label: 'Thần số học',
    value: 1,
  },
  {
    label: 'Chiêm tinh học',
    value: 2,
  }
]

const genders = [
  {
    label: 'Nam',
    value: 0
  },
  {
    label: 'Nữ',
    value: 1
  },
  {
    label: 'Giới tính khác',
    value: 2
  }
]

interface Information {
  category: number,
  birthday: string
  gender: number
  name: string
}

export default function Home() {
  const [information, setInformation] = useState<Information>({
    category: 0,
    gender: 0
  } as Information);
  const [isLoading, setIsLoading] = useState(false);
  const [gptResponse, setGptResponse] = useState('')

  const onChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const {name, value} = event.target
    setInformation({
      ...information,
      [name]: value
    })
  }

  const onSubmit = async () => {
    setIsLoading(true)
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(information)
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    // This data is a ReadableStream
    const data = response.body
    if (!data) {
      return
    }

    const reader = data.getReader()
    const decoder = new TextDecoder()
    let done = false

    let lastMessage = ''

    while (!done) {
      const {value, done: doneReading} = await reader.read()
      done = doneReading
      const chunkValue = decoder.decode(value)

      lastMessage = lastMessage + chunkValue

      setGptResponse(lastMessage)

      setIsLoading(false)
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className={'md:w-120 lg:w-7/12'}>
        <h1 className={'mb-4 font-bold text-xl'}>Xem tử vi - Thần số học - Chiêm tinh học sử dụng AI. Thách thức các
          loại thầy bói 😜
        </h1>
        <div className={'flex w-440 gap-3 mb-4'}>
          <Select onChange={onChange} id={'category'} label={'Thể loại'} options={categories}/>
          <Datepicker onChange={onChange} id={'birthday'} label={'Ngày sinh'}/>
          <Select onChange={onChange} id={'gender'} label={'Giới tính'} options={genders}/>
          <Input onChange={onChange} id={'name'} label={'Họ tên'}/>
          <Button disable={isLoading} onClick={onSubmit} label={'Xem kết quả'} className={'flex items-end'}/>
        </div>

        <Chat message={gptResponse}/>
      </div>
    </main>
  )
}
