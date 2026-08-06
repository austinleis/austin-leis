import { Button, Stack, Text } from "@sanity/ui";
import { useRef, useState } from "react";
import { type ArrayOfObjectsInputProps, insert, setIfMissing, useClient } from "sanity";

const BATCH = 5;
const API_VERSION = "2024-10-01";

export function MultiImageInput(props: ArrayOfObjectsInputProps) {
  const { onChange } = props;
  const client = useClient({ apiVersion: API_VERSION });
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState<{ done: number; total: number } | null>(null);
  const [failed, setFailed] = useState<string[]>([]);

  const handleFiles = async (fileList: FileList | null) => {
    const files = Array.from(fileList ?? []);
    if (!files.length) return;

    setFailed([]);
    setUploading({ done: 0, total: files.length });
    onChange(setIfMissing([]));

    const problems: string[] = [];
    let done = 0;

    for (let i = 0; i < files.length; i += BATCH) {
      const slice = files.slice(i, i + BATCH);
      const results = await Promise.all(
        slice.map(async (file) => {
          try {
            const asset = await client.assets.upload("image", file, { filename: file.name });
            return { asset, name: file.name };
          } catch {
            return { asset: null, name: file.name };
          }
        }),
      );

      const items = results
        .filter((result) => result.asset)
        .map((result) => ({
          _type: "image",
          _key: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`,
          asset: { _type: "reference", _ref: result.asset!._id },
        }));

      for (const result of results) if (!result.asset) problems.push(result.name);
      if (items.length) onChange(insert(items, "after", [-1]));

      done += slice.length;
      setUploading({ done, total: files.length });
    }

    setUploading(null);
    setFailed(problems);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <Stack space={3}>
      {props.renderDefault(props)}

      <input
        ref={fileRef}
        type="file"
        multiple
        accept="image/*"
        style={{ display: "none" }}
        onChange={(event) => handleFiles(event.currentTarget.files)}
      />

      <Button
        mode="ghost"
        tone="primary"
        disabled={Boolean(uploading)}
        text={
          uploading
            ? `Uploading ${uploading.done} / ${uploading.total}...`
            : "Add multiple images"
        }
        onClick={() => fileRef.current?.click()}
      />

      {failed.length > 0 ? (
        <Text size={1} muted>
          {`Could not upload ${failed.length}: ${failed.join(", ")}`}
        </Text>
      ) : null}
    </Stack>
  );
}
