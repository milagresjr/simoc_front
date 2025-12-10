"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Server, Wifi, Bell, Activity } from "lucide-react";

const uptimeData = [
  { day: "Seg", value: 98 },
  { day: "Ter", value: 99 },
  { day: "Qua", value: 97 },
  { day: "Qui", value: 99 },
  { day: "Sex", value: 100 },
];

const alertsData = [
  { day: "Seg", value: 4 },
  { day: "Ter", value: 2 },
  { day: "Qua", value: 5 },
  { day: "Qui", value: 1 },
  { day: "Sex", value: 3 },
];

const statusData = [
  { name: 'Online', value: 80, color: '#10B981' },
  { name: 'Offline', value: 15, color: '#EF4444' },
  { name: 'Manutenção', value: 5, color: '#F59E0B' },
];

export default function Home({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex-1 pt-4 px-4 md:px-6 overflow-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Cards com estatísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Servidores Ativos</CardTitle>
            <Server className="w-5 h-5" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
            <p className="text-xs text-muted-foreground">+2 esta semana</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Equipamentos de Rede</CardTitle>
            <Wifi className="w-5 h-5" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">34</p>
            <p className="text-xs text-muted-foreground">Todos online</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Alertas Hoje</CardTitle>
            <Bell className="w-5 h-5" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">7</p>
            <p className="text-xs text-muted-foreground">2 críticos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Uptime Médio</CardTitle>
            <Activity className="w-5 h-5" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">99%</p>
            <p className="text-xs text-muted-foreground">Últimos 7 dias</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Uptime da Infraestrutura */}
        <Card>
          <CardHeader>
            <CardTitle>Uptime da Infraestrutura</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={uptimeData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Alertas por Dia */}
        <Card>
          <CardHeader>
            <CardTitle>Alertas por Dia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={alertsData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#F59E0B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Status de serviços (Pie Chart) */}
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Status dos Serviços</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 flex items-center justify-center">
              <ResponsiveContainer width="50%" height="100%">
                <PieChart>
                  <Pie data={statusData} dataKey="value" nameKey="name" outerRadius={80} label>
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Logs recentes */}
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Logs Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Data/Hora</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Serviço</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Descrição</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">10/12/2025 08:32</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Servidor 1</td>
                    <td className="px-6 py-4 text-sm text-green-600">Online</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Sem problemas detectados</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">10/12/2025 07:45</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">API de Login</td>
                    <td className="px-6 py-4 text-sm text-red-600">Offline</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Falha de autenticação</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">10/12/2025 06:20</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Servidor 2</td>
                    <td className="px-6 py-4 text-sm text-yellow-600">Manutenção</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Atualização programada</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}