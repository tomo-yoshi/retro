import { FaCode } from 'react-icons/fa';
import WindowTemplate from '@/components/WindowTemplate';

export default function Skills() {
  return (
    <WindowTemplate title="Skills" icon={FaCode} className="top-[12%] md:top-1/5">
      <div className="space-y-6 text-[#222266]">
        <section>
          <h2 className="text-xl font-bold mb-3">Technical Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Frontend Development</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>React.js/Next.js, TypeScript</li>
                <li>CSS/SASS/TailwindCSS, styled-components</li>
                <li>Analytics (Amplitude, GA4, GTM)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Backend & Cloud</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Node.js/Next.js, MySQL, PostgreSQL</li>
                <li>AWS (Lambda, API Gateway, Aurora, ECS)</li>
                <li>GCP (Cloud Run, BigQuery)</li>
                <li>Docker, Terraform, CI/CD (GitHub Actions)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </WindowTemplate>
  );
} 