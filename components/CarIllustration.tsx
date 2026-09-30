export default function CarIllustration() {
  return (
    <svg className="car" viewBox="0 0 900 430" role="img" aria-label="Stylized orange sports car" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="body" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#ff8a47"/><stop offset=".55" stopColor="#ff5d22"/><stop offset="1" stopColor="#d9380c"/></linearGradient>
        <linearGradient id="glass" x1="0" x2="1"><stop stopColor="#1b2228"/><stop offset="1" stopColor="#53636e"/></linearGradient>
      </defs>
      <path d="M112 280c18-52 69-77 135-87l92-77c26-21 59-31 93-31h111c40 0 70 12 99 39l70 68c37 8 63 25 78 57l-5 49H106z" fill="url(#body)" stroke="#111" strokeWidth="8" strokeLinejoin="round"/>
      <path d="M360 117l-101 80h137l41-84zM456 113l-38 84h176l-55-84z" fill="url(#glass)" stroke="#111" strokeWidth="7"/>
      <path d="M198 228h505" stroke="#111" strokeWidth="7" strokeLinecap="round"/>
      <path d="M130 267h74M699 267h70" stroke="#111" strokeWidth="9" strokeLinecap="round"/>
      <circle cx="250" cy="322" r="58" fill="#111"/><circle cx="250" cy="322" r="27" fill="#d5d5d5"/><circle cx="250" cy="322" r="10" fill="#111"/>
      <circle cx="650" cy="322" r="58" fill="#111"/><circle cx="650" cy="322" r="27" fill="#d5d5d5"/><circle cx="650" cy="322" r="10" fill="#111"/>
      <path d="M90 286c0-20 14-35 33-35h36v47H90zM758 251h39c20 0 33 16 33 35v12h-74z" fill="#f4f4f4" stroke="#111" strokeWidth="7"/>
      <path d="M155 296h63M680 296h63" stroke="#fff" strokeWidth="8" strokeLinecap="round" opacity=".8"/>
      <path d="M296 233h288" stroke="#fff" strokeWidth="4" opacity=".45"/>
    </svg>
  );
}
