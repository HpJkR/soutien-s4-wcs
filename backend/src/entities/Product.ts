import { Entity, BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";


@Entity()
@ObjectType()
export default class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field()
    name: string;
}
