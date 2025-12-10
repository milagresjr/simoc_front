"use client";

import { UsersTable } from "./_components/UsersTable";

export default function Page() {
  return (
    <div className="p-6">
      {/* A tabela já contém os modais */}
      <UsersTable />
    </div>
  );
}