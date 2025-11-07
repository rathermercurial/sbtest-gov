// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://governance.superbenefit.org',
	integrations: [
		starlight({
			title: 'SuperBenefit Governance',
			description: 'Governance documentation for SuperBenefit DAO - agreements, policies, and proposals that define how we work together.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/superbenefit/governance-site'
				},
			],
			// Enable Starlight features
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
			editLink: {
				baseUrl: 'https://github.com/superbenefit/governance-site/edit/main/',
			},
			lastUpdated: true,
			// Custom CSS for visual hierarchy
			customCss: [
				'./src/styles/custom.css',
			],
			// Override Sidebar component with custom implementation
			// The custom sidebar dynamically generates navigation from governance collections
			components: {
				Sidebar: './src/components/starlight/Sidebar.astro',
			},
			// Sidebar config is not used when Sidebar component is overridden,
			// but kept here for reference/documentation
			sidebar: [
				{
					label: 'Agreements',
					autogenerate: { directory: 'agreements' },
				},
				{
					label: 'Policies',
					autogenerate: { directory: 'policies' },
				},
				{
					label: 'Proposals',
					autogenerate: { directory: 'proposals' },
				},
				{
					label: 'Reference',
					collapsed: true,
					items: [
						{ label: 'Governance Framework', slug: 'governance' },
						{ label: 'Code of Conduct', slug: 'code-of-conduct' },
						{ label: 'Contributing', slug: 'contributing' },
					],
				},
			],
		}),
	],
});
