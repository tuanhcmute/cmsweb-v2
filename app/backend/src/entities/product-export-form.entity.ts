import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { Base } from "@entities/base.entity";
import { User } from "@entities/user.entity";

@Entity("product_export_form_tbl")
export class ProductExportForm extends Base {
  @OneToOne(() => User)
  @JoinColumn({ name: "recipient_column" })
  recipient?: User;

  @Column({ name: "to_column" })
  to?: string;

  @Column({ name: "description_column" })
  description?: string;
}
