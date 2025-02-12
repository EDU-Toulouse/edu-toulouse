import { prisma } from "@/lib/prisma"
import Image from "next/image";

interface User {
    id: string;
    
    name: string | null;
    image: string | null;
}

export default async function Users() {

    const users = await prisma.user.findMany();

    return (
        <div>
            {users.map((user: User) => {
                return <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.id}</p>
                    <Image
                    src={user.image ?? "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"}
                    alt={user.id}
                    width={35}
                    height={35}
                    />
                </div>
            })}
        </div>
    )
}