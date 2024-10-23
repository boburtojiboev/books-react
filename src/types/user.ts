export interface Member {
  _id: string;
  mb_nick: string;
  mb_phone: string;
  mb_password: string;
  mb_type: string;
  mb_status: string;
  mb_address?: string;
  mb_description?: string;
  mb_image?: string;
  mb_subscriber_cnt: number;
  createdAt: Date;

}
