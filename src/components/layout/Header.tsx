// components/layout/HeaderServer.tsx
import {HeaderClient} from "./index";
import { DirectusFile } from '../../types/directus-schema';

export default async function Header({ logo, subLogo , siteTitle } : { logo?: DirectusFile | string | null; subLogo?: DirectusFile | string | null; siteTitle?: string | null; }) {
  return (
    <HeaderClient
      logo={logo}
      subLogo={subLogo}
      siteTitle={siteTitle}
    />
  );
}
