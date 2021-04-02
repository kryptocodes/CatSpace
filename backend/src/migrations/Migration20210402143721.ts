import { Migration } from '@mikro-orm/migrations';

export class Migration20210402143721 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" rename column "user" to "username";');


    this.addSql('alter table "user" drop constraint "user_user_unique";');

    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
  }

}
