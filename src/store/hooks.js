import { useDispatch, useSelector } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useStoreDispatch = useDispatch;
export const useStoreSelector = useSelector;