"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

interface UserModalProps {
  onSubmit: (data: any) => void;
  defaultValues?: any;
  edit?: boolean
}

export function UserModal({ onSubmit, defaultValues, edit = false }: UserModalProps) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={() => reset(defaultValues)}>Novo Usuário</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{edit ? "Editar Usuário" : "Novo Usuário"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label>Nome</label>
            <Input {...register("name", { required: true })} />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Email</label>
            <Input type="email" {...register("email", { required: true })} />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Senha</label>
            <Input type="password" {...register("password")} />
          </div>
          <DialogFooter>
            <Button type="submit">{defaultValues ? "Atualizar" : "Criar"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
