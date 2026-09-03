import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
	base: "/cours/",
	lang: "fr-CA",
	markdown: {
		config(markdown) {
			markdown.use(tabsMarkdownPlugin);
		},
	},
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
		"Intégration d'interfaces Web structurées - Énoncés, grilles, calendrier et ressources",
	themeConfig: {
		logo: "./logos/logo.png",

		nav: [
			{ text: "Plan de cours", link: "/plan-cours/plan-de-cours" },
			{ text: "Calendrier", link: "/plan-cours/calendrier-gr1109" },
			{
				text: "Modules",
				items: [
					{ text: "Module 1 - Découvrir les outils d'intégration Web", link: "/modules/01/00-presentation" },
				],
			},
			{
				text: "Travaux",
				items: [
					{ text: "TP1 - ", link: "/travaux/tp1" },
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
						text: "Module 1 - Découvrir les outils d'intégration Web",
						collapsed: true,
						items: [
							{
								text: "Présentation",
								link: "/modules/01/00-presentation",
							},
														{
								text: "HTML et CSS",
								link: "/modules/01/01-html-css",
							}
						],
					},
				],
			},
			{
				text: "Laboratoires",
				collapsed: true,
				items: [
					{ text: "Lab 01 - Configurations", link: "/labs/lab01" },
				],
			},
			{
				text: "Travaux pratiques",
				collapsed: true,
				items: [
					{ text: "TP1 - ", link: "/travaux/tp1" },
				],
			},
			{
				text: "Grilles d'évaluation",
				collapsed: true,
				items: [
					{ text: "Index des grilles", link: "/grilles/" },
					{ text: "OA-1 - Outil d'édition Web", link: "/grilles/grille-oa-1" },
					{ text: "OA-2 - Structure HTML", link: "/grilles/grille-oa-2" },
					{ text: "OA-3 - Présentation visuelle", link: "/grilles/grille-oa-3" },
					{ text: "OA-4 - Guide ou maquette", link: "/grilles/grille-oa-4" },
					{ text: "OA-5 - Vérification", link: "/grilles/grille-oa-5" },
					{ text: "OA-6 - Versionnage", link: "/grilles/grille-oa-6" },
					{ text: "OA-7 - Organisation", link: "/grilles/grille-oa-7" },
				],
			},
		],

		search: {
			provider: "local",
		},
	},
}));
