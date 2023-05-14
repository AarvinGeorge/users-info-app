

import React from 'react'
import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'

type Params = {
    params : {
        userId : string 
    }
}

export default async function UserPage({params : { userId }} : Params) {
  const getUserData : Promise<User> = getUser(userId)
  const getUserPostsData : Promise<Post[]> = getUserPosts(userId)

  //   const [user, userPosts] = await Promise.all([getUserData, getUserPostsData])
  const user = await getUserData

  return (
    <>
      <h1>{user.name}</h1>
      <br />
      <Suspense fallback = {<h1>Loading...</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts promise = {getUserPostsData}/>
      </Suspense>
      
    </>
  )
}
