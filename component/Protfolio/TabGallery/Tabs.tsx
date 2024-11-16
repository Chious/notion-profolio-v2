import React from "react";

export function Tabs({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
  defaultValue: string;
}) {
  return <div className={className}>{children}</div>;
}

export function TabsList({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return <div className={className}>{children}</div>;
}

export function TabsContent({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
}

export function TabsTrigger({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return <button>{children}</button>;
}
