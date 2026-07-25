"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0b0d10] py-6 border-t border-white/10">
      <p className="text-center text-sm text-white">
        © {new Date().getFullYear()} Alda Amorita Azza. All rights reserved.
      </p>
    </footer>
  );
}
