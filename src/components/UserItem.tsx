import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemsProps {
    user: IUser;
    onClick: (user: IUser) => void
}

const UserItem: FC<UserItemsProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: 15, border: '1px solid gray'}}>
            {user.id} {user.name} проживает в городе {user.address.city} по адресу {user.address.street}
        </div>
    )
}

export default UserItem;