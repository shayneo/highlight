import logrocketlogofull from '../../public/images/logrocketlogofull.png'
import logrocketlogosmall from '../../public/images/logrocketlogosmall.png'
import { Competitor } from './competitors'
import {
	HighlightIsOpenAndTransparent,
	HighlightShipsNewFeatures,
} from './shared-snippets'

export const LogRocketSpec: Competitor = {
	name: 'LogRocket',
	header: 'The Open Source Logrocket Alternative.',
	subheader:
		'Pixel-perfect video replay of your frontend web application. Step into the shoes of your users.',
	logoDesktop: logrocketlogofull,
	logoMobile: logrocketlogosmall,
	sections: [
		{
			title: 'General',
			rows: [
				{
					feature: 'Unlimited Team Members',
					tooltip:
						'LogRocket only allows 5 team members on their free plan.',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Support Ticket Integrations',
					tooltip: 'Create tickets with clickup, linear, or jira.',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Self-hosted Options',
					tooltip:
						'Self-hosted options are available for highlight.io',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Analytics Integrations',
					tooltip: 'Integrations with mixpanel, amplitude, etc..',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Self-serve Setup',
					highlight: 1,
					competitor: 1,
				},
			],
		},
		{
			title: 'Session Replay',
			rows: [
				{
					feature: 'Session Commenting',
					tooltip:
						'Create comments on sessions to tag folks on your team of issues.',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Heatmaps',
					highlight: 0,
					competitor: 1,
				},
				{
					feature: 'Session Sharing',
					tooltip:
						'Ability to share sessions across your team and with customers.',
					highlight: 1,
					competitor: 1,
				},
				{
					feature: 'Privacy SDKs',
					highlight: 1,
					competitor: 1,
				},
				{
					feature: 'Embedded, fullstack error monitoring',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Canvas & WebGL Recording',
					tooltip:
						'Ability to record canvas and webgl elements in your application.',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Shadow DOM Recording',
					tooltip:
						'Ability to record shadow dom elements in your application.',
					highlight: 1,
					competitor: 0,
				},
			],
		},
		{
			title: 'Error Monitoring',
			rows: [
				{
					feature: 'Embedded Session Replay',
					highlight: 1,
					competitor: 1,
				},
				{
					feature: 'Error Sharing',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Support for Backend SDKs',
					highlight: 1,
					competitor: 0,
				},
			],
		},
		{
			title: 'Logging',
			rows: [
				{
					feature: 'Frontend logging',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Backend logging',
					highlight: 1,
					competitor: 0,
				},
				{
					feature: 'Embedded replay and stacktraces',
					highlight: 1,
					competitor: 0,
				},
			],
		},
	],
	paragraphs: [
		HighlightIsOpenAndTransparent('LogRocket'),
		HighlightShipsNewFeatures,
		{
			header: 'We focus on cohesion, not just session replay',
			body: 'While LogRocket is mainly focused on session replay, Highlight.io provides a **full-stack** solution that encompasses session replay, logs, and error monitoring. Along with recording user sessions, Highlight.io also captures logs and errors, providing developers with a comprehensive view of their entire stack. In contrast, LogRocket primarily focuses on session replay and product analytics, which can be more useful to product and marketing teams.',
		},
	],
}
