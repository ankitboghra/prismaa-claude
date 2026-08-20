/**
 * Renders a schema.org graph node.
 *
 * `JSON.stringify` output is escaped for `<` so a stray character in copy can
 * never break out of the script tag.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
