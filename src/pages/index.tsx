import {Inter} from 'next/font/google'
import Select from "@app/components/Select";
import Datepicker from "@app/components/Datepicker";
import Input from "@app/components/Input";
import Button from "@app/components/Button";
import Chat from "@app/components/Chat";
import {useState} from "react";

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
  category: string,
  birthday: string
  gender: string
  name: string
}

export default function Home() {
  const [information, setInformation] = useState<Information>();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className={'md:w-120 lg:w-7/12'}>
        {/*<h1 className={'mb-4 font-bold text-xl'}>Xem tử vi - Thần số học - Chiêm tinh học sử dụng AI. Thách thức các*/}
        {/*  loại thầy*/}
        {/*  bói 😜*/}
        {/*</h1>*/}
        <div className={'flex w-440 gap-3 mb-4'}>
          <Select id={'category'} label={'Thể loại'} options={categories}/>
          <Datepicker id={'birthday'} label={'Ngày sinh'}/>
          <Select id={'gender'} label={'Giới tính'} options={genders}/>
          <Input id={'name'} label={'Họ tên'}/>
          <Button label={'Xem kết quả'} className={'flex items-end'}/>
        </div>

        <Chat/>
      </div>
    </main>
  )
}
