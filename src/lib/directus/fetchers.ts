import { Globals } from '@/types/directus-schema';
import { useDirectus } from './directus';
import { readSingleton } from '@directus/sdk';

/**
 * Fetches global site data, header navigation, and footer navigation.
 */
export const fetchSiteData = async () => {
  const { directus } = useDirectus();

  try {
    const [globals] = await Promise.all([
      directus.request(
        readSingleton("globals", {
          fields: [
            'id',
            'user_created',
            'date_created',
            'user_updated',
            'date_updated',
            'logo',
            'sub_logo',
            'favicon',
            'title',
            'description',
          ],
        })
      ),
    ]);

    return {
      globals,
    };
  } catch (error) {
    console.error('Error fetching site data:', error);
    throw new Error('Failed to fetch site data');
  }
};
