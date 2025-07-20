"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import dynamic from "next/dynamic";

const supabase = createClient();

const WritePage = () => {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
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

  const handleQuillChange = (content, delta, source, editor) => {
    setValue(content);
    const editorElem = editorRef.current?.querySelector(".ql-editor");
    if (editorElem) {
      setTimeout(() => {
        editorElem.style.height = "auto";
        editorElem.style.height = `${editorElem.scrollHeight}px`;
      }, 0);
    }
  };

  useEffect(() => {
    const upload = async () => {
      if (!file) return;

      setIsUploading(true);
      setError(null);

      try {
        // Validate file size (e.g., max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          setError("File size exceeds 5MB limit");
          setFile(null);
          return;
        }

        const fileName = `${Date.now()}-${file.name}`;
        const filePath = `uploads/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("blog")
          .upload(filePath, file);

        if (uploadError) {
          throw new Error(uploadError.message);
        }

        const { data: urlData } = supabase.storage
          .from("blog")
          .getPublicUrl(filePath);

        setMedia(urlData.publicUrl);
      } catch (err) {
        setError("Failed to upload image: " + err.message);
      } finally {
        setIsUploading(false);
      }
    };

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
    e.preventDefault(); // Prevent default form submission
    
    // Validate inputs
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    if (!value.trim()) {
      setError("Content is required");
      return;
    }

    setIsPublishing(true);
    setError(null);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          slug: slugify(title),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to publish post");
      }

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
          onClick={() => setOpen(!open)}
          disabled={isUploading || isPublishing}
        >
          <Image src="/plus.png" alt="Add" width={16} height={16} />
        </button>

        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
              disabled={isUploading}
            />
            <button className={styles.addButton} disabled={isUploading}>
              <label htmlFor="image">
                <Image src="/image.png" alt="Upload" width={16} height={16} />
              </label>
            </button>
          </div>
        )}

        <div ref={editorRef}>
          <ReactQuill
            className={styles.textArea}
            theme="bubble"
            value={value}
            onChange={handleQuillChange}
            placeholder="Tell your story..."
            readOnly={isPublishing}
          />
        </div>
      </div>

      <button
        className={styles.publish}
        onClick={handleSubmit}
        disabled={isPublishing || isUploading}
      >
        {isPublishing ? "Publishing..." : "Publish"}
      </button>
    </div>
  );
};

export default WritePage;