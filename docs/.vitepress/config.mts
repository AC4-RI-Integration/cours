import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
	base: "/cours/",
	lang: "fr-CA",
	vite: {
		optimizeDeps: {
			include: ["mermaid"],
		},
		resolve: {
			alias: [{ find: /^fastdom$/, replacement: "fastdom/fastdom.js" }],
		},
	},
	cleanUrls: true,
	title: "582-AC4-RI",
	description:
		"Intégration d'interfaces Web structurées — Énoncés, grilles, calendrier et ressources",
	themeConfig: {
		logo: "./logos/logo.png",

		nav: [
			{ text: "Plan de cours", link: "/plan-cours/plan-de-cours" },
			{ text: "Calendrier", link: "/plan-cours/calendrier-gr1109" },
			{
				text: "Modules",
				items: [
					{ text: "Module 1 — ", link: "/modules/01/" },
				],
			},
			{
				text: "Travaux",
				items: [
					{ text: "TP1 — ", link: "/travaux/tp1" },
				],
			},
		],
		sidebar: [
			{
				text: "Documents généraux",
				items: [
					{ text: "Plan de cours", link: "/plan-cours/plan-de-cours" },
					{ text: "Calendrier", link: "/plan-cours/calendrier-gr1109" },
				],
			},
			{
				text: "Modules du cours",
				collapsed: false,
				items: [
					{
						text: "Module 1 — ",
						collapsed: true,
						items: [
							{
								text: "Présentation",
								link: "/modules/01/00-presentation",
							},
						],
					},
				],
			},
			{
				text: "Laboratoires",
				collapsed: true,
				items: [
					{ text: "Lab 01 — ", link: "/labs/lab01" },
				],
			},
			{
				text: "Travaux pratiques",
				collapsed: true,
				items: [
					{ text: "TP1 — ", link: "/travaux/tp1" },
				],
			},
			{
				text: "Grilles d'évaluation",
				collapsed: true,
				items: [
					{ text: "Grille — TP1", link: "/grilles/grille-tp1" },
				],
			},
		],

		search: {
			provider: "local",
		},
	},
}));
