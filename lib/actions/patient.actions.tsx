/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { CreateUserParams } from "@/types/index.d";
import { users } from "../appwrite.config";
import { ID, Query } from "node-appwrite";
import { parseStringify } from "../utils";

export const createUser = async ({name, email, phone} : CreateUserParams)=>{
    console.log("action ==> create");
    try {
        console.log("action ==> try");
        const newUser = await users.create(
            ID.unique(),
            email,
            phone,
            undefined,
            name,
        )
        console.log("action ==> end try");
        return parseStringify(newUser);
    } catch (error: any) {
        if(error && error?.code === 409){
            const documents = await users.list([
                Query.equal("email",[email])
            ])

            return documents?.users[0];
        }
        console.error("An error occurred while creating a new user:", error);
    }
}