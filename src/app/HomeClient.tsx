import SectionRenderer from '../components/sections/SectionRenderer';
import { Section } from '../types/directus-schema';

interface HomeClientProps {
  sections: Section[];
}

export default function HomeClient({ sections }: HomeClientProps) {
  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <SectionRenderer
          key={section.id}
          section={section}
          index={index}
        />
      ))}
    </div>
  );
}
