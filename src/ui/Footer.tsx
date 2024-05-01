import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-4 text-center">
      <p>&copy; {currentYear} Johnny. All Rights Reserved.</p>
    </footer>
  );
}