import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

export const useExtractLinkFromUrl = (): string | null => {
  const pathname = usePathname();
  const [extractedString, setExtractedString] = useState<string | null>(null);

  useEffect(() => {
    const match = pathname.match(/\/join\/([^\/]*)/);
    if (match) {
      setExtractedString(match[1]);
    }
  }, [pathname]);

  return extractedString;
};
