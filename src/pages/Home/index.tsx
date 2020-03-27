import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostActions } from "@actions";
import { IStore } from "@interfaces";

const Home = () => {
  const count = useSelector((state: IStore) => state.user.count);

  const dispatch = useDispatch()
  const _handleListMenu = () => {
    dispatch(PostActions.AddCount())
  }

  return (
    <>
      <h1>Home</h1>
      <h2>Count: {count}</h2>
      <button onClick={_handleListMenu}>Add + </button>
    </>
  )
}

export default Home