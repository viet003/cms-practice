import HomeClient from './HomeClient';
import { fetchSections } from '../lib/directus/fetchers';

export default async function HomePage() {
  const sections = await fetchSections('home');

  return (
    <div>
      <HomeClient sections={sections} />
    </div>
  );
}