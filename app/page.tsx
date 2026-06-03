// STRUCTURE and INTERACTIVITY of a webpage

import AdoptButton from './adopt-button';

// Component that forms the homepage
export default function Home() {
  return (
	<section id="container">
		<h1>Welcome to the Dog Shelter</h1>
		<AdoptButton />
	</section>
  );
}
