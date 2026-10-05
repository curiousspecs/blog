// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Curious Spectacles';
export const SITE_DESCRIPTION =
	'Matt Bennett on film and psychoanalysis, and on making and teaching media with AI: what images do to us, and what we now do with them.';
export const SITE_TAGLINE = 'Psychoanalysis, film, and making media with AI.';

// Display names for post series, keyed by the `series` value in a post's front-matter.
export const SERIES: Record<string, string> = {
	'narrative instant': 'Narrative Instant',
};

// Scholarly profiles, shown in the footer (ORCID, Academia.edu) and as a line on the About and
// Publications pages. Change an address here and it changes everywhere.
export const PROFILES = {
	orcid: 'https://orcid.org/0009-0005-4721-9522',
	academia: 'https://ucblueash.academia.edu/MattBennett',
	scholar: 'https://scholar.google.com/citations?hl=en&user=jbqxIlEAAAAJ',
	directory: 'https://researchdirectory.uc.edu/p/bennetrd',
} as const;
