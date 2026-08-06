import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";
import { MultiImageInput } from "../components/MultiImageInput";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      description: "Studio, brand or publication the work was made for.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Project",
      type: "string",
      description: "Leave empty when the work is not tied to a named project.",
    }),
    defineField({
      name: "slug",
      title: "Web address",
      type: "slug",
      options: {
        source: (doc: Record<string, unknown>) =>
          [doc.client, doc.title].filter(Boolean).join(" "),
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      options: { layout: "grid" },
      components: { input: MultiImageInput },
      description: "The first image is used as the cover. Drag to reorder.",
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "featured",
      title: "Show on the homepage",
      type: "boolean",
      initialValue: false,
    }),
    orderRankField({ type: "project" }),
  ],
  preview: {
    select: { client: "client", title: "title", media: "images.0" },
    prepare: ({ client, title, media }) => ({
      title: client,
      subtitle: title && title !== client ? title : "",
      media,
    }),
  },
});
