import { defineCollection, z } from "astro:content";

const guides = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		diagram: z.string().optional(),
		diagramAlt: z.string().optional(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { guides };
