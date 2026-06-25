// STRUCTURE and INTERACTIVITY of a webpage

import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import AdoptButton from './adopt-button';

export const metadata: Metadata = {
  title: 'Dog Shelter',
};

// Component that forms the homepage
export default function Home() {
  return (
	<section id="container">
		<h1>Welcome to the Dog Shelter</h1>
		<AdoptButton />
	</section>
  );
}
