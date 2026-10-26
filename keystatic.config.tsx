import {config, collection, fields} from "@keystatic/core";
import {wrapper} from "@keystatic/core/content-components";

// Local mode while developing (edits files directly); GitHub mode in production
// (logs in with GitHub and commits to the repo, which triggers a Vercel deploy).
// Run `NEXT_PUBLIC_KEYSTATIC_STORAGE=github npm run dev` once to create the GitHub App (see README).
const isLocal =
  process.env.NODE_ENV === "development" &&
  process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE !== "github";

export default config({
  storage: isLocal
    ? {kind: "local"}
    : {kind: "github", repo: "naganikhilbijjala/naganikhilbijjala.github.io"},
  ui: {brand: {name: "Nikhil — Blog admin"}},
  collections: {
    posts: collection({
      label: "Blog posts",
      path: "content/blog/*",
      slugField: "title",
      format: {contentField: "content"},
      entryLayout: "content",
      columns: ["title", "date", "draft"],
      schema: {
        title: fields.slug({
          name: {label: "Title", validation: {isRequired: true}},
          slug: {label: "URL slug", description: "Becomes /blog/<slug>/"}
        }),
        description: fields.text({
          label: "Description",
          description: "One or two sentences for search results and link previews (~150 characters).",
          multiline: true,
          validation: {isRequired: true}
        }),
        date: fields.date({
          label: "Publish date",
          defaultValue: {kind: "today"},
          validation: {isRequired: true}
        }),
        updated: fields.date({label: "Last updated (optional)"}),
        tags: fields.array(fields.text({label: "Tag"}), {
          label: "Tags",
          itemLabel: props => props.value
        }),
        draft: fields.checkbox({
          label: "Draft",
          description: "Drafts are hidden on the live site. Untick to publish.",
          defaultValue: true
        }),
        content: fields.mdx({
          label: "Content",
          extension: "mdx",
          components: {
            Callout: wrapper({
              label: "Callout box",
              schema: {
                type: fields.select({
                  label: "Style",
                  options: [
                    {label: "Note", value: "note"},
                    {label: "Warning", value: "warning"}
                  ],
                  defaultValue: "note"
                })
              }
            })
          }
        })
      }
    })
  }
});
