import Link from "next/link";

export const MainFooter = () => {
  return (
    <footer className={"footer"}>
      <h4 className="title">
        <Link href="/page2">
          <a>Go to page2</a>
        </Link>
      </h4>
    </footer>
  );
};
