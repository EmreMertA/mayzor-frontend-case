export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'Kısıtlandı' | 'Aktif' | 'Yasaklandı';
};
