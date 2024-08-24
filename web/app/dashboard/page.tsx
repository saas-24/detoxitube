"use client";

import { fetchAuthSession } from "aws-amplify/auth";
import { useEffect } from "react";

export default function DashboardPage() {
  useEffect(() => {
    fetchAuthSession().then((session) => {
      console.log(session);
    });
  }, []);
  return <>Dashboard</>;
}
