type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'Kısıtlandı' | 'Aktif' | 'Yasaklandı';
};

const users: User[] = [
  {
    id: 1,
    name: 'Lale Soylu',
    email: 'lalesoylu@gail.com',
    phone: '0543 000 00 00',
    status: 'Aktif',
  },
  {
    id: 2,
    name: 'Haydar Candan',
    email: 'haydar_345@gmail.com',
    phone: '0543 000 00 00',
    status: 'Aktif',
  },
  {
    id: 3,
    name: 'Mehmet Yılmaz',
    email: 'akınpeyda@gmail.com',
    phone: '0543 000 00 00',
    status: 'Aktif',
  },
  {
    id: 4,
    name: 'Suna Küçük',
    email: 'suna_kck34@gmail.com',
    phone: '0543 000 00 00',
    status: 'Kısıtlandı',
  },
  {
    id: 5,
    name: 'Lale Soylu',
    email: 'lalesoylu@gail.com',
    phone: '0543 000 00 00',
    status: 'Aktif',
  },
  {
    id: 6,
    name: 'Haydar Candan',
    email: 'haydar_345@gmail.com',
    phone: '0543 000 00 00',
    status: 'Yasaklandı',
  },
  {
    id: 7,
    name: 'Mehmet Yılmaz',
    email: 'akınpeyda@gmail.com',
    phone: '0543 000 00 00',
    status: 'Aktif',
  },
  {
    id: 8,
    name: 'Suna Küçük',
    email: 'suna_kck34@gmail.com',
    phone: '0543 000 00 00',
    status: 'Aktif',
  },
  {
    id: 9,
    name: 'Haydar Candan',
    email: 'haydar_345@gmail.com',
    phone: '0543 000 00 00',
    status: 'Aktif',
  },
  {
    id: 10,
    name: 'Mehmet Yılmaz',
    email: 'akınpeyda@gmail.com',
    phone: '0543 000 00 00',
    status: 'Yasaklandı',
  },
  {
    id: 11,
    name: 'Suna Küçük',
    email: 'suna_kck34@gmail.com',
    phone: '0543 000 00 00',
    status: 'Aktif',
  },
];

export default users;
