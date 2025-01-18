export interface ISuperOffersListTableRow {
  id: number;
  icon: string;
  number: number;
  name: string;
  vacants: number;
  contacted: number;
  ecg: number | string;
  accuracy: number | string;
  tus_datos: string;
  assigned_cvs: number;
  vitae_offer_count: number;
  whatsapp_message: string;
  active: boolean;
  city: string;
  salary: string;
  contract_type: number;
  cvCount?: number;
}
