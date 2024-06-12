import { Button } from "@/components/Button";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SlimLayout } from "@/components/SlimLayout";

export default function OpenInChrome() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <br />
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Please open the link in Google Chrome
      </h1>

      <Button href="/" className="mt-10">
        Go back home
      </Button>
    </SlimLayout>
  );
}
