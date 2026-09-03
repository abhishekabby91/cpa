/**
 * Renders a JSON-LD block.
 *
 * The payload is always an object built by `src/lib/schema.ts` from typed
 * content, never user input, and `<` is escaped so a stray character in copy
 * can't close the script tag early.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
