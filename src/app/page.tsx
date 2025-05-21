import Image from 'next/image';
import { FaFolder } from 'react-icons/fa';
import WindowTemplate from '@/components/WindowTemplate';

export default function Home() {
  return (
    <WindowTemplate title="Welcome to My Website" icon={FaFolder} className="top-[16%] md:top-[26%]">
      <h1 className="text-2xl font-bold mb-4 text-[#222266]">Hi, I&apos;m Tomohiro.</h1>
      <p className="mb-4 text-[#222266]">I&apos;m a <span className="font-bold">WEB DEVELOPER</span> passionate about creating amazing things.</p>
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-32 h-32 mt-4">
          <Image
            src="/images/profile_photo.jpg"
            alt="Tomohiro's profile photo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </WindowTemplate>
  );
}
