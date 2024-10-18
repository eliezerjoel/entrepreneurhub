'use server';
import { createSessionClient } from "../../config/appwrite";
import { cookies } from 'next/headers';

async function checkAuth() {
  const sessionCookie = cookies().get('appwrite-session');

  if (!sessionCookie) {
    return {
      isAuthenticated: false,
    };
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value);
    const user = await account.get();

    console.log(user)
    return {
      isAuthenticated: true,
      user: {
        id: user.$id,
        name: user.name,
        email: user.email,
      },
    };
    
  } catch (error) {
    return {
      isAuthenticated: false,
    };
  }
  console.log(sessionCookie)
  console.log(sessionCookie.value)
}

export default checkAuth;
