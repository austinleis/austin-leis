import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "austin-leis",
  title: "Austin Leis",
  projectId: "247tn8xk",
  dataset: "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Projects")
              .child(S.documentTypeList("project").title("Projects")),
            S.divider(),
            S.listItem()
              .title("Site settings")
              .child(
                S.document().schemaType("siteSettings").documentId("siteSettings"),
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
  document: {
    newDocumentOptions: (prev) =>
      prev.filter((item) => item.templateId !== "siteSettings"),
  },
});
