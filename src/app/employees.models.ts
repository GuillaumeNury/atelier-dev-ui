export interface User {
  id: number;
  name: string;
  picture: {
    href: string;
  };
}

export interface UsersResponse {
  data: {
    items: User[];
  };
}
