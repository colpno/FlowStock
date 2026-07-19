import { redirect } from "next/navigation";

import { ROUTES } from "@/constants/route";

export default function Home() {
  redirect(ROUTES.dashboard.href);
}
