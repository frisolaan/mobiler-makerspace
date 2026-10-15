import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <Link className="mark" href="/">
          Mobiler <span>MakerSpace</span>
        </Link>
        <Link className="lnk" href="/woche">
          Die Woche
        </Link>
        <Link className="lnk" href="/lernspur">
          Die Lernspur
        </Link>
        <Link className="lnk" href="/kompetenzen">
          Kompetenzen
        </Link>
        <Link className="lnk" href="/making">
          Schulisches Making
        </Link>
      </div>
    </nav>
  );
}
