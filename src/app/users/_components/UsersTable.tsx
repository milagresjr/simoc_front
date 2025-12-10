"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { UserModal } from "./UserModal";

export function UsersTable() {
  // Dados fictícios
  const [users, setUsers] = useState([
    { id: "1", name: "João Silva", email: "joao.silva@example.com" },
    { id: "2", name: "Maria Souza", email: "maria.souza@example.com" },
    { id: "3", name: "Carlos Oliveira", email: "carlos.oliveira@example.com" },
  ]);

  const handleCreate = (user: any) => {
    const newUser = { ...user, id: String(Date.now()) };
    setUsers([...users, newUser]);
  };

  const handleUpdate = (updatedUser: any) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
  };

  const handleDelete = (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este usuário?")) return;
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestão de Usuários</h1>
        {/* Botão para criar novo usuário */}
        <UserModal onSubmit={handleCreate} />
      </div>

      {/* Tabela de usuários */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
        <Table className="min-w-full">
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="text-left text-gray-700">Nome</TableHead>
              <TableHead className="text-left text-gray-700">Email</TableHead>
              <TableHead className="text-left text-gray-700">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="hover:bg-gray-50">
                <TableCell className="text-gray-800">{user.name}</TableCell>
                <TableCell className="text-gray-800">{user.email}</TableCell>
                <TableCell className="flex gap-2">
                  {/* Modal para editar usuário */}
                  {/* <UserModal edit={true} defaultValues={user} onSubmit={handleUpdate} /> */}
                  {/* Botão para excluir */}
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
