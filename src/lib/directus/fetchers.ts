import { Globals, Section } from '@/types/directus-schema';
import { useDirectus } from './directus';
import { readSingleton, readItems } from '@directus/sdk';

export const fetchGlobals = async (): Promise<Globals> => {
  const { directus } = useDirectus();

  try {
    const globals = await directus.request(
      readSingleton("globals", {
        fields: [
          'id',
          'title',
          'description',
          'logo',
          'sub_logo',
          'favicon',
        ],
      })
    );

    return globals;
  } catch (error) {
    console.error('Error fetching globals:', error);
    // Return fallback data if API fails
    return {
      id: 1,
      title: null,
      description: null,
      logo: null,
      sub_logo: null,
      favicon: null,
    };
  }
};

/**
 * Fetches sections data from Directus for a specific page
 */
export const fetchSections = async (page: string): Promise<Section[]> => {
  const { directus } = useDirectus();

  try {
    const sections = await directus.request(
      readItems("sections", {
        fields: [
          'id',
          'title',
          'subtitle',
          'description',
          'content',
          'image',
          'section_type',
          'order',
          'is_active',
          'page',
        ],
        filter: {
          page: {
            _eq: page
          },
          is_active: {
            _eq: true
          }
        },
        sort: ['order']
      })
    );

    return sections;
  } catch (error) {
    console.error('Error fetching sections:', error);
    // Return empty array if API fails
    return [];
  }
};
