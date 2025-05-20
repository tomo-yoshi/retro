import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import WindowTemplate from '@/components/WindowTemplate';

export default function About() {
  return (
    <WindowTemplate title="About Me" icon={FaUser} className="top-[16%] md:top-[26%]">
      <h1 className="text-2xl font-bold mb-4 text-[#222266]">About Me</h1>
      <p className="mb-4 text-[#222266]">I'm Tomohiro, a <span className="font-bold">WEB DEVELOPER</span>, passionate about building meaningful digital experiences.</p>
      
      <div className="space-y-6 text-[#222266]">
        <section>
          <h2 className="text-xl font-bold mb-3">Professional Experience</h2>
          <p>
            After working in local government, I moved to Vancouver to pursue my passion for technology. 
            Currently, I'm a core member of the engineering team in a Canadian company's marketing department, 
            where I focus on developing web applications, implementing automated testing, and creating internal tools.
          </p>
        </section>
      </div>
    </WindowTemplate>
  );
}
