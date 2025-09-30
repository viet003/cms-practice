import SectionRenderer from '../../components/sections/SectionUI';
import { Section } from '../../types/directus-schema';

interface FeaturesClientProps {
  sections: Section[];
}

export default function FeaturesClient({ sections }: FeaturesClientProps) {
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
