import * as React from "react";

function ProfileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
   <svg width={22} height={24} viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x={1} y={1} width={20} height={22} rx={4} stroke="black" strokeWidth={2} />
  <path d="M4 21C4 17.6863 6.68629 15 10 15H12C15.3137 15 18 17.6863 18 21V22H4V21Z" fill="black" />
  <circle cx={11} cy={11} r={6} fill="black" />
  <path d="M4 4L6 11L10 6L4 4Z" fill="black" />
  <path d="M18 4L16 11L12 6L18 4Z" fill="black" />
</svg>
  );
}

export default ProfileIcon;