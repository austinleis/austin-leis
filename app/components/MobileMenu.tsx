"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { instagram, menu } from "@/app/data/nav";
import { useMountEffect } from "@/app/hooks/useMountEffect";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const setState = (next: boolean) => {
    setOpen(next);
    document.documentElement.dataset.menu = next ? "open" : "closed";
  };

  const close = () => {
    const hadFocus = drawerRef.current?.contains(document.activeElement);
    setState(false);
    if (hadFocus) buttonRef.current?.focus();
  };

  const toggle = () => {
    if (open) {
      close();
      return;
    }
    setState(true);
    requestAnimationFrame(() => drawerRef.current?.querySelector("a")?.focus());
  };

  useMountEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      delete document.documentElement.dataset.menu;
    };
  });

  return (
    <>
      <button
        id="n-bt"
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="n-dr"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={toggle}
      >
        <span />
        <span />
      </button>
      <div id="n-sc" onClick={close} aria-hidden="true" />
      <div id="n-dr" ref={drawerRef} data-open={open} inert={!open}>
        <ul id="n-dr-me">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setState(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          id="n-dr-ig"
          href={instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setState(false)}
        >
          {instagram.label}
        </a>
      </div>
    </>
  );
}
