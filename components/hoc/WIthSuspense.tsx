"use client";

import { Suspense } from "react";
import React from "react";

export function withSuspense<P>(
  Component: React.ComponentType<P>,
  fallback: React.ReactNode = null
) {
  return function SuspendedComponent(props: P) {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
}
