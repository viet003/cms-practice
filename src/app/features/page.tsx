import FeaturesClient from './FeaturesClient';
import { fetchSections } from '../../lib/directus/fetchers';

export default async function FeaturesPage() {
  const sections = await fetchSections('features');

  return (
    <div>
      <FeaturesClient sections={sections} />
    </div>
  );
}
