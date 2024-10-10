import { asl } from "@configs/context.config";
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from "typeorm";

@EventSubscriber()
export class EntitySubscriber implements EntitySubscriberInterface {
  /**
   * Called before entity insertion.
   */
  beforeInsert(event: InsertEvent<any>) {
    console.log(`BEFORE ENTITY INSERTED: `, event.entity);
    const userId = asl.getStore()?.userId;
    Object.assign(event.entity, { createdBy: userId });
  }

  afterInsert(event: InsertEvent<any>): Promise<any> | void {
    console.log(`AFTER ENTITY INSERTED: `, event.entity);
  }
}
