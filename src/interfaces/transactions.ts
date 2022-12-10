export interface ITransactions {
  id: number;
  date: string;
  value: number;
  description: string;
  category_name: string;
  type: string;
}

export interface INewTransaction {
  type: string;
  description?: string;
  date: string | number;
  category_id: number;
  value: number;
}

export interface IBalance {
  entrada: number,
  saida: number,
  result: number,
}