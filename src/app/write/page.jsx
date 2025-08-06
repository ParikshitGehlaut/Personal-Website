"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor…</p>,
});


const supabase = createClient();

export default function WritePage() {
  const router = useRouter();
  const editorRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const editorElem = editorRef.current?.querySelector(".ql-editor");
    if (editorElem) {
      editorElem.style.height = "auto";
      editorElem.style.height = `${editorElem.scrollHeight}px`;
    }
  }, [value]);

  useEffect(() => {
    async function upload() {
      if (!file) return;
      setIsUploading(true);
      setError(null);

      try {
        if (file.size > 5 * 1024 * 1024) {
          throw new Error("File size exceeds 5 MB");
        }
        const filePath = `uploads/${Date.now()}-${file.name}`;
        const { error: upErr } = await supabase.storage
          .from("blog")
          .upload(filePath, file);
        if (upErr) throw upErr;

        const { data } = supabase.storage
          .from("blog")
          .getPublicUrl(filePath);
        setMedia(data.publicUrl);
      } catch (err) {
        setError("Upload failed: " + err.message);
      } finally {
        setIsUploading(false);
      }
    }
    upload();
  }, [file]);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return setError("Title is required");
    if (!value.trim()) return setError("Content is required");

    setIsPublishing(true);
    setError(null);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          slug: slugify(title),
        }),
      });
      if (!res.ok) throw new Error("Failed to publish post");
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className={styles.container}>
      {error && <div className={styles.error}>{error}</div>}

      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isPublishing}
      />

      <div className={styles.editor}>
        <button
          className={styles.button}
          onClick={() => setOpen((o) => !o)}
          disabled={isUploading || isPublishing}
        >
          <Image src="/plus.png" alt="Add" width={16} height={16} />
        </button>

        {open && (
          <div className={styles.add}>
            <input
              id="image"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
              disabled={isUploading}
            />
            <label htmlFor="image" className={styles.addButton}>
              <Image src="/image.png" alt="Upload" width={16} height={16} />
            </label>
          </div>
        )}

        <div ref={editorRef}>
          <ReactQuill
            className={styles.textArea}
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story…"
            readOnly={isPublishing}
          />
        </div>
      </div>

      <button
        className={styles.publish}
        onClick={handleSubmit}
        disabled={isPublishing || isUploading}
      >
        {isPublishing ? "Publishing…" : "Publish"}
      </button>
    </div>
  );
}
